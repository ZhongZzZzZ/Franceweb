<template>
 <div >
  <img class="head-img" src="./assets/head.jpg" alt="">
  <Header></Header>
    <keep-alive exclude="Home">
     <router-view class="app-container"></router-view>
    </keep-alive>
 </div>
</template>

<script>
import {reqLanguage} from './api'
import Header from './components/Header/Header.vue'
import { setTimeout } from 'timers';
import { Promise } from 'q';
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
  methods:{
    async postLanguage(){
      //在这里根据页面当前设置语言发送请求告诉后台当前语言
    const locale = this.$i18n.locale
    let data = null
    switch (locale) {
      case 'zh-CN':
        data = {language:'Chinese'}
        break;
      case 'en-US':
        data = {language:2}
        break;
      case 'fr-FR':
        data = {language:'French'}
        break;
      default:
        break;
    }
    await reqLanguage('/user/language',data)
    await setTimeout(() => {
      return new Promise(res => {
        res()
      })
    }, 1000);
    }
  },
  created(){
    this.postLanguage()
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