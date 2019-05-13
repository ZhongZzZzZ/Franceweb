<template>
  <div class="home-container">
    <home-event class="home-event"></home-event>
    <home-activity class="home-activity"></home-activity>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeActivity from './HomeActivity/HomeActivity.vue'
import HomeEvent from './HomeEvent/HomeEvent.vue'
import Footer from '../../components/Footer/Footer'
export default {
  components:{
    HomeEvent,
    HomeActivity,
    Footer
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

</style>