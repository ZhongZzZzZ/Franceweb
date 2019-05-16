
function stopScroll() {
  let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  window.onscroll = function () {
    if(window.pageYOffset) {
      window.pageYOffset = top
    } else if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop = top
    } else {
      document.body.scrollTop = top
    } 
  }
}

function cancelStopScroll() {
  window.onscroll = null
} 

 export {stopScroll,cancelStopScroll}