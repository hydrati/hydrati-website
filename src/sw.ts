import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import {} from 'workbox-core'
import { useMarkdown } from './composables/markdown'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.oninstall = async (event) => {
  event.waitUntil(self.skipWaiting())
}

const manifest = self.__WB_MANIFEST
precacheAndRoute(manifest)

async function updateMarkdown(
  cache: Cache,
  req: Request,
  url: string
): Promise<void> {
  try {
    const article = await renderMarkdown(url)
    await cache.put(
      req,
      new Response(JSON.stringify({ err: false, r: article }))
    )
  } catch {}
}

async function renderMarkdown(url: string): Promise<[string, any]> {
  const cache = await caches.open('article-cache')
  try {
    const res = await fetch(url)
    await cache.put(url, res.clone())
    const [md, file] = await useMarkdown(await res.text())
    return [md, file.data]
  } catch {
    const res = await cache.match(url)
    if (res == null) {
      throw new Error('not found article raw')
    }
    const [md, file] = await useMarkdown(await res.text())
    return [md, file.data]
  }
}

registerRoute(
  (opts) => {
    return opts.url.pathname.startsWith('/__sw/render')
  },
  async (r) => {
    try {
      const cache = await caches.open('article-render-cache')
      const resp = await cache.match(r.request)
      if (resp != null) {
        void updateMarkdown(cache, r.request, r.url.pathname.slice(12))
        return resp
      }
      const re = await renderMarkdown(r.url.pathname.slice(12))
      const res = new Response(JSON.stringify({ err: false, r: re }))
      await cache.put(r.request, res.clone())
      return res
    } catch (e: any) {
      return new Response(JSON.stringify({ err: true, r: e }))
    }
  },
  'GET'
)

registerRoute(
  /^.*(\.md|\.markdown)$/i,
  new StaleWhileRevalidate({
    cacheName: 'articles-cache',
    plugins: [
      new ExpirationPlugin({ maxEntries: 300, maxAgeSeconds: 31536e3 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  }),
  'GET'
)

export {}
