<template>
  <div class="home-container">
    <home-event class="home-event"></home-event>
    <home-activity class="home-activity"></home-activity>
    <Footer></Footer>
    <home-event></home-event>
    <div class="home-right">
      <sign-up></sign-up>
      <home-activity></home-activity>
    </div>
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
  display: flex;
  .home-right{
    width: 300px;
  }
}
</style>