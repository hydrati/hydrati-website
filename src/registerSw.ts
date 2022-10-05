import { registerSW } from 'virtual:pwa-register'

registerSW({
  onRegisteredSW(swScriptUrl, registration) {
    registration?.waiting?.postMessage('skipWaiting')
  },
})
