import './style.css'
import 'github-markdown-css/github-markdown-dark.css'
import 'misans/index.css'

import { lang } from './i18n'

const search = new URLSearchParams(location.search)
const key = search.get('lang')?.toLocaleLowerCase() ?? 'en'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = lang[key] ?? lang['en']
