<template>
  <div class="carousel">
    <ul class="box1">
      <li><img src="../../../assets/carousel/1.jpg" alt="" style="width: 300px;height: 200px;padding: 0 15px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/2.jpg" alt="" style="width: 300px;height: 200px;padding: 0 15px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/3.jpg" alt="" style="width: 300px;height: 200px;padding: 0 15px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/4.jpg" alt="" style="width: 300px;height: 200px;padding: 0 15px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/5.jpg" alt="" style="width: 300px;height: 200px;padding: 0 15px 0 0;box-sizing: border-box" class="carouselItem"></li>
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
      var interVal ;
      const box1 = document.getElementsByClassName('box1')[0];
      const carouseItem = document.getElementsByClassName("carouselItem");
      box1.style.marginLeft = 0;
      window.onload=function(){
          auto();
      }
      function auto(){
          interVal = setInterval(function () {
              const ml = parseInt(box1.style.marginLeft)
              if(ml % 300 === 0 && ml !==0) {
                  box1.style.marginLeft = 0
                  box1.appendChild(carouseItem[0])
              }
              box1.style.marginLeft = parseInt(box1.style.marginLeft) -1 +'px'
          }, 10);
      }

      for (let i = 0 ; i <carouseItem.length ;i++){
          carouseItem[i].addEventListener("mouseenter",function () {
              clearInterval(interVal);
          })
      }
      for (let i = 0 ; i <carouseItem.length ;i++){
          carouseItem[i].addEventListener("mouseleave",function () {
              auto()
          })
      }
  },

}

</script>
<style lang="scss">
.carousel{
  margin: 0 0 0.2rem 1.6rem;
  padding: 0;
  width: 1100px;
  height: 200px;
  overflow: hidden;
  ul{
    width: 1500px;
    list-style: none;
      li{

        float: left;
        img{

        }
      }
  }
}
</style>