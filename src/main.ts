import './style.css'
// import toImage from 'dom-to-image-more'
// import { throttle }  from 'lodash'

// const search = new URLSearchParams(location.search)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<navbar class="nav">
  <a href>Blog</a>
  <a href>Projects</a>
  <a href>Links</a>
  <a href>About</a>
</navbar>
<div id="cover" style="display:none;position:absolute;top:0;left:0;margin:0;width:100%;height:1000vh;overflow:hidden;background:#0d1117;z-index:100;"></div>


<div id="content">
<div class="box markdown-body">
  <div class="title">
    <h1>About Me</h1>

  </div>



    <blockquote><p>Hey 👋 Nice to meet you here.</p></blockquote>

    <p>My nickname is <strong>Hydration</strong>, I come from Guangdong, China.</p>

    <p>I am a student as well as a open sourceror, a Web developer and a UI/UX designer. And I am studying in Guangdong Experimental High School currently.</p>

    <p>I am...</p>
    <ul>
      <li>Core member team of <a href="https://github.com/EdgelessPE">Edgeless PE</a></li>
      <li>One of the founders of <a href="https://github.com/cladonia-cn">Cladonia LLC.</a></li>
      <li>Dreaming up ideas and making them come true is where my passion lies, but I am not a idealist.</li>
      <li>Many other things...</li>
    </ul>

    <p>I currently focus...</p>
    <ul>
      <li>Web Technologies. JavaScript, Vue, Vite and TypeScript</li>
      <li><a href="https://github.com/EdgelessPE">Edgeless PE</a> and its ecosystem</li>
      <li><a href="https://github.com/cladonia-cn">Cladonia LLC.</a> internal projects</li>
      <li><a href="https://systematize.design">Systematize Design</a> and its ecosystem</li>
    </ul>

    <p>Contact me</p>
    <ul>
      <li>Github <a href="https://github.com/hydrati">@hydrati</a></li>

      <li>Bilibili <a href="https://space.bilibili.com/98955693">@水合Hydration</a></li>

      <li>Email <a href="mailto:hy@cladonia.team">hy@cladonia.team</a></li>
    </ul>

    <p>Links</p>
    <ul>
      <li><a href="https://home.edgeless.top/">Edgeless</a></li>
      <li><a href="https://cladonia.team">Cladonia LLC.</a></li>
      <li><a href="https://systematize.design">Systematize Design</a></li>
    </ul>


    <div class="line"></div>

    <p>Well, that's all.</p>
    <p class=present><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color: inherit;">CC BY-NC-SA 4.0</a> 2022-PRESENT © Hydration</p>
  </div>
</div>`


// let double = false
// function showContent() {
//   if (!double) {
//     double = true
//   } else {
//     alert(`search.get('show_content') != null`)
//     // search.set('show_content', '')
//     // location.search = search.toString()
//     double = false
//   }
// }
// const shouldShow = search.get('show_content') != null
// if (!shouldShow) {
//   const cover = document.getElementById("cover")!
//   const content = document.getElementById("content")!

//   let img = document.createElement('canvas')
//   content.parentNode?.insertBefore(img, content)

//   const render = throttle(() => {
//     console.log('start render')
//     cover.style.display = 'block'
//     content.style.display = 'block'
//     toImage.toCanvas(content, { quality: 0.5, cacheBust: false, style: {} }).then((src: HTMLCanvasElement) => {
//       content.style.display = 'none'
//       img.replaceWith(src)
//       img = src
//       img.draggable = false

//       img.setAttribute('style', '-webkit-user-drag:none;width:100%;overflow:hidden;user-select:none;user-drag:none;')
//       img.onclick = showContent
//       cover.style.display = 'none'
//     })
//   }, 500)

//   window.onresize = render
//   render()
// }