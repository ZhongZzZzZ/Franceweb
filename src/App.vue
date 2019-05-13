<template>
 <div>
  <Header></Header>
  <router-view class="container"></router-view>
  <Footer></Footer>
 </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  components:{
    Header,
    Footer,
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
.container{
  padding: 0 10%;
}
@media screen and (max-width: 768px) {
  .container{
    padding: 0 0.2rem;
  }
}
</style>