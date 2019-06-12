<template>
 <div >
  <img v-show="show" class="head-img" src="./assets/head.jpg" alt="">
    <Header v-show="show"></Header>
    <keep-alive exclude='Home'>
     <router-view class="app-container"></router-view>
    </keep-alive>
 </div>
</template>

<script>
import Header from './components/Header/Header.vue'
export default {
  components:{
    Header,
  },
  props:{},
  data(){
    return {
      show:true
    }
  },
  watch:{
    $route() {
      if(this.$route.path === '/404') {
      this.show = false
    } else{
       this.show = true
    }
    }
  },
  computed:{},
  methods:{
    
  },
  created(){
  },
  mounted(){
  }
}
</script>
<style lang="scss">
.head-img{
  width: 100%;

  
}
/* .container{
  padding: 0 10%;
}
@media screen and (max-width: 768px) {
  .container{
    padding: 0 0.2rem;
  }
} */
/*.container{*/
/*}*/
/*@media screen and (max-width: 768px) {*/
  /*.container{*/
    /*overflow: hidden;*/
  /*}*/
/*}*/
</style>