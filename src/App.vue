<template>
 <div >
  <Header></Header>
  <router-view class="container"></router-view>
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
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
/*.container{*/
/*}*/
/*@media screen and (max-width: 768px) {*/
  /*.container{*/
    /*overflow: hidden;*/
  /*}*/
/*}*/
</style>