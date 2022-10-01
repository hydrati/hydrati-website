import './style.css'
import 'github-markdown-css/github-markdown-dark.css'
import 'misans/index.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id=box class=markdown-body>
  <h1>关于我</h1>

  <blockquote><p>你好👋 很高兴你能找到这里。</p></blockquote>

  <p>我是水合 Hydration！</p>

  <p>来自中国广东，是一名初中三年级学生、开源爱好者和 UI/UX 设计师，现就读于广东实验中学。</p>

  <p>我是...</p>
  <ul>
    <li><a href="https://github.com/EdgelessPE">Edgeless PE</a> 的核心团队成员。</li>
    <li><a href="https://github.com/cladonia-cn">Cladonia 十叠科技</a> 的联合创始人之一。</li>
    <li>热衷于构想并让其实现的<s>空想主义者</s> 。</li>
    <li>或许还有？</li>
  </ul>

  <p>我现在专注于...</p>
  <ul>
    <li><a href="https://github.com/EdgelessPE">Edgeless PE</a> 及其生态系统。</li>
    <li><a href="https://github.com/cladonia-cn">Cladonia 十叠科技</a> 的一些<s>有趣的</s>内部项目。</li>
    <li><a href="https://systematize.design">Systematize Design</a> 设计系统和周边。</li>
  </ul>

  <p>联系我</p>
  <ul>
    <li>Github <a href="https://github.com/hydrati">@hydrati</a></li>

    <li>Bilibili <a href="https://space.bilibili.com/98955693">@水合Hydration</a></li>

    <li>Email <a href="mailto:hy@cladonia.team">hy@cladonia.team</a></li>
  </ul>

  <p>友情链接</p>
  <ul>
    <li><a href="https://home.edgeless.top/">Edgeless</a></li>
    <li><a href="https://cladonia.team">Cladonia 十叠</a></li>
    <li><a href="https://systematize.design">Systematize Design</a></li>
  </ul>

  <hr />

  <p>好吧，就先说这么多罢。</p>
  <p>Blog <s>很快</s>就会上线的，不要着急。</p>
  <p class=present><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color: inherit;">CC BY-NC-SA 4.0</a> 2022-PRESENT © Hydration</p>
</div>
`
