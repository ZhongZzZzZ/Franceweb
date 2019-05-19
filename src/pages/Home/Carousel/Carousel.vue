<template>
  <div class="carousel">
    <ul class="box1">
      <li><img src="../../../assets/carousel/1.jpg" alt=""  style="width: 300px"></li>
      <li><img src="../../../assets/carousel/2.jpg" alt=""  style="width: 300px"></li>
      <li><img src="../../../assets/carousel/3.jpg" alt=""  style="width: 300px"></li>
      <li><img src="../../../assets/carousel/4.jpg" alt=""  style="width: 300px"></li>
      <li><img src="../../../assets/carousel/5.jpg" alt=""  style="width: 300px"></li>
    </ul>
  </div>
</template>
<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      imgList:[
        [
          require('../../../assets/carousel/1.jpg'),
          require('../../../assets/carousel/2.jpg')
        ],
        [

          require('../../../assets/carousel/3.jpg'),
          require('../../../assets/carousel/4.jpg')
        ],
        [
          require('../../../assets/carousel/7.jpg'),
          require('../../../assets/carousel/6.jpg')
        ],
        [
          require('../../../assets/carousel/5.jpg'),
          require('../../../assets/carousel/8.jpg')
        ],
      ],
      carouselHeight:'300px'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){

  },
  mounted(){
      var interVal;
      const box1 = document.getElementsByClassName('box1')[0]
      box1.style.marginLeft = 0;
      window.onload=function(){
          auto();
      }
      function auto(){
          const li = document.getElementsByTagName('li')
          interVal = setInterval(function () {
              const ml = parseInt(box1.style.marginLeft)
              if(ml % 400 === 0 && ml !==0) {
                  box1.style.marginLeft = 0
                  box1.appendChild(li[0])
              }
              box1.style.marginLeft = parseInt(box1.style.marginLeft) -1 +'px'
          }, 10);
      }
      const li = document.getElementsByTagName("li");
      for (let i = 0 ; i <li.length ;i++){
          li[i].addEventListener("mouseenter",function () {
              clearInterval(interVal);
          })
      }
      for (let i = 0 ; i <li.length ;i++){
          li[i].addEventListener("mouseleave",function () {
              auto()
          })
      }
  }
}

</script>
<style lang="scss">
.carousel{
  width: 1100px;
  height: 200px;
  border: 5px solid;
  overflow: hidden;
}
.carousel>ul{
  background: #000;
  list-style: none;
  display: flex;
  >li{   
    width: 400px;
    height: 100%;
  }
}

</style>