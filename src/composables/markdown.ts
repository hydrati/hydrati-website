import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import addr from 'markdown-it-abbr'
import footnote from 'markdown-it-footnote'
import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import matter from 'gray-matter-browser'
import hljs from 'markdown-it-highlightjs'

const md = new MarkdownIt({
  html: true,
  linkify: false,
})

md.use(emoji).use(addr).use(footnote).use(sub).use(sup).use(hljs)

export function useMarkdownIt(): MarkdownIt {
  return md
}

export function useMarkdown(
  markdown: string
): [string, matter.GrayMatterFile<string>] {
  const file = matter(markdown)
  const md = useMarkdownIt()
  return [md.render(file.content), file]
}
