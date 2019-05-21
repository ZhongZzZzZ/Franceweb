const rem = ()=>{
  let clientWidth = document.body.clientWidth || document.documentElement.clientWidth
  if(!clientWidth) {
    return 
  } else if(clientWidth == 1581) {//这是我全屏时谷歌浏览器的宽度
    document.getElementsByTagName('html')[0].style.fontSize = 50 + 'px'
  } else {
    document.getElementsByTagName('html')[0].style.fontSize = 50*(clientWidth/1581) + 'px'
  }
}

rem()

window.addEventListener('resize',()=>{
  rem()
  console.log('jsrem');
},false)
