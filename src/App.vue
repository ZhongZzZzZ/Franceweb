<template>
 <div >
  <Header></Header>
    <keep-alive exclude="Home">
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
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
  },
  mounted(){
  }
}
</script>
<style lang="scss">
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