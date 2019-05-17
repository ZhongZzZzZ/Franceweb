<template>
  <el-carousel ref="carousel" :height="carouselHeight" class="carousel" indicator-position="none" :interval="5000">
    <el-carousel-item v-for="(item) in imgList" :key="item[0]">
      <div class="img">
        <el-image :src="item[0]" alt=""></el-image>
        <el-image :src="item[1]" alt=""></el-image>
      </div>
    </el-carousel-item>
  </el-carousel>
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
  created(){},
  mounted(){
  }
}

</script>
<style lang="scss">
.carousel{
  margin-bottom: 3rem;
  .el-carousel__item{
    float: left;
    .img{
      width: 100%;
      height: 100%;
      .el-image{
      width: 48%;
      height: 100%;
      margin-right: 2%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  }
  
}
</style>