<template>
  <div class="home-container">
    <home-event class="home-event"></home-event>
    <home-activity class="home-activity"></home-activity>
  </div>
</template>

<script>
import HomeActivity from './HomeActivity/HomeActivity.vue'
import HomeEvent from './HomeEvent/HomeEvent.vue'
export default {
  components:{
    HomeEvent,
    HomeActivity
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