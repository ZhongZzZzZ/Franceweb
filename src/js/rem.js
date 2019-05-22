const rem = (designWidth,fontSize)=>{
  let clientWidth = document.body.clientWidth || document.documentElement.clientWidth
  if(!clientWidth) {
    return 
  } /* else if(clientWidth == 1581) {//这是我全屏时谷歌浏览器的宽度
    document.getElementsByTagName('html')[0].style.fontSize = 50 + 'px' */
   else {
    document.getElementsByTagName('html')[0].style.fontSize = fontSize*(clientWidth/designWidth) + 'px'
  }
}

rem(1581,50)

window.addEventListener('resize',()=>{
  rem(1581,50)
},false)
