export const renderMain = async (url: string): Promise<[string, any]> => {
  const { useMarkdown } = await import('../composables/markdown')
  const resp = await fetch(url)
  const source = await resp.text()

  const [md, file] = await useMarkdown(source)
  return [md, file.data]
}

export const renderByWorker = async (url: string): Promise<[string, any]> => {
  const resp = await fetch(`/__sw/render${url}`)
  const body = await resp.json()
  if (body.err !== false) {
    throw body.r
  }

  return body.r
}

export const render = async (url: string): Promise<[string, any]> => {
  try {
    return await renderByWorker(url)
  } catch {
    return await renderMain(url)
  }
}
