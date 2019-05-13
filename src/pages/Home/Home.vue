<template>
  <div class="home-container">
    <div class="home-content">
      <home-event class="home-event"></home-event>
      <div class="home-right">
        <sign-up></sign-up>
        <home-activity></home-activity>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeActivity from './HomeActivity/HomeActivity.vue'
import HomeEvent from './HomeEvent/HomeEvent.vue'
import Footer from '../../components/Footer/Footer'
import SignUp from './SignUp/SignUp.vue'
export default {
  components:{
    HomeEvent,
    HomeActivity,
    Footer,
    SignUp
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
    .home-right{
    width: 300px;
  }
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .home-container{
    .home-content{
      .home-right{
      width: 3rem;
    }
    }
}
}
</style>