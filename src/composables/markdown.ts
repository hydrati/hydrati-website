import type MarkdownIt from 'markdown-it'
// import emoji from 'markdown-it-emoji'
// import abbr from 'markdown-it-abbr'
// import footnote from 'markdown-it-footnote'
// import sub from 'markdown-it-sub'
// import sup from 'markdown-it-sup'
import type matter from 'gray-matter-browser'
// import hljs from 'markdown-it-highlightjs'

const [
  { default: MarkdownIt2 },
  { default: emoji },
  { default: abbr },
  { default: footnote },
  { default: sub },
  { default: sup },
  { default: matter2 },
  { default: hljs },
] = await Promise.all([
  import('markdown-it'),
  import('markdown-it-emoji'),
  import('markdown-it-abbr'),
  import('markdown-it-footnote'),
  import('markdown-it-sub'),
  import('markdown-it-sup'),
  import('gray-matter-browser'),
  import('markdown-it-highlightjs'),
])

const md = new MarkdownIt2({
  html: true,
  linkify: false,
})

md.use(emoji).use(abbr).use(footnote).use(sub).use(sup).use(hljs)

export function useMarkdownIt(): MarkdownIt {
  return md
}

export function useMarkdown(
  markdown: string
): [string, matter.GrayMatterFile<string>] {
  const file = matter2(markdown)
  const md = useMarkdownIt()
  return [md.render(file.content), file]
}
