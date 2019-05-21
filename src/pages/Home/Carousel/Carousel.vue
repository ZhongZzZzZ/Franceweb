<template>
  <div class="carousel">
    <ul class="box1">
      <li><img src="../../../assets/carousel/1.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/2.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/3.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/4.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/5.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/6.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/7.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/8.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/1.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/2.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
      <li><img src="../../../assets/carousel/3.jpg" alt="" style="width: 6rem;height: 4rem;padding: 0 5px 0 0;box-sizing: border-box" class="carouselItem"></li>
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
      box1.style.marginLeft = 0;
      const auto = ()=>{
          this.interVal = setInterval( ()=> {
              const ml = parseInt(box1.style.marginLeft)
              if(ml % document.getElementsByClassName("carouselItem")[0].clientWidth === 0 && ml !==0) {
                  box1.style.marginLeft = 0
                  box1.appendChild(carouseItem[0])
              }
              box1.style.marginLeft = parseInt(box1.style.marginLeft) -1 +'px'
          }, 15);
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
  width: 100%;
  height: 4rem;
  overflow: hidden;
  background-color: black;
  .box1{
    width: 48rem !important;
    list-style: none;
      li{
        float: left;
      }
  }
}

</style>