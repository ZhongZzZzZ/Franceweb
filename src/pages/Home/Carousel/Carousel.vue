<template>
  <div class="carousel">
    <ul class="box1">
      <li><img src="../../../assets/carousel/1.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/2.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/3.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/4.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/5.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/6.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/7.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/8.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/1.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/2.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/3.jpg" alt="" style="width: 300px;height: 200px;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
    </ul>
  </div>
</template>
<script>
export default {

  components:{},
  props:{},
  data(){
    return {
      interVal:null,
    }
  },
  watch:{},
  computed:{},

  methods:{},
  created(){
  },
  mounted(){
      const box1 = document.getElementsByClassName('box1')[0];
      const carouseItem = document.getElementsByClassName("carouselItem");
      const that = this
      box1.style.marginLeft = 0;
      function auto(){
          that.interVal = setInterval( ()=> {
              const ml = parseInt(box1.style.marginLeft)
              if(ml % 300 === 0 && ml !==0) {
                  box1.style.marginLeft = 0
                  box1.appendChild(carouseItem[0])
              }
              box1.style.marginLeft = parseInt(box1.style.marginLeft) -1 +'px'
          }, 10);
      }

      for (let i = 0 ; i <carouseItem.length ;i++){
          carouseItem[i].addEventListener("mouseenter", ()=> {
              clearInterval(this.interVal);
          })
      }
      for (let i = 0 ; i <carouseItem.length ;i++){
          carouseItem[i].addEventListener("mouseleave", ()=> {
              auto()
          })
      }
      auto();
  },
  beforeDestroy(){
    clearInterval(this.interVal)
  }
}

</script>
<style lang="scss">
.carousel{
  padding: 0;
  width: 60rem;
  height: 4rem;
  overflow: hidden;
  background-color: black;
  ul{
    width: 48rem;
    list-style: none;
      li{
        float: left;
      }
  }
}

</style>