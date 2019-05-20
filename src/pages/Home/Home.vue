<template>
  <div class="home-container">
    <div class="home-content">
      <div class="home-left">
        <keep-alive>
          <Carousel></Carousel>
        </keep-alive>
        <home-event class="home-event"></home-event>
      </div>
      <div class="home-right">
        <sign-up></sign-up>
        <home-activity></home-activity>
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
import SignUp from './SignUp/SignUp.vue'
export default {
  components:{
    HomeEvent,
    HomeActivity,
    Footer,
    SignUp,
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
<style lang="scss" scoped>
.home-container{

  .home-content{
    display: flex;
    padding: 0 10vh;
    .home-left{
      width: 75vw;
    }
    .home-right{
      width: 25vw;
    }
  }
}
</style>