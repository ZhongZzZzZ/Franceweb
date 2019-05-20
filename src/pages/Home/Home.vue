<template>
  <div class="home-container">
    <div class="home-box">
      <Carousel></Carousel>
      <div class="home-content">
        <div class="home-left">
          <home-event class="home-event"></home-event>
        </div>
        <div class="home-right">
          <home-activity></home-activity>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Carousel from './Carousel/Carousel'
import HomeActivity from './HomeActivity/HomeActivity.vue'
import HomeEvent from './HomeEvent/HomeEvent.vue'
import Footer from '../../components/Footer/Footer'
export default {
  name:'Home',
  components:{
    HomeEvent,
    HomeActivity,
    Footer,
    Carousel
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
.home-container{
  .home-box{
    .home-content{
    display: flex;
    padding: 2rem 2rem;
    .home-left{
      width: 18rem;
    }
    .home-right{
      margin-left: 1rem;
      width: 6rem;
    }
  }
  }
}
</style>