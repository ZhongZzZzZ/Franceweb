<template>
  <div class="homeevent-container">
    <h1 class="homeevent">重大事件</h1>
    <div class="homeevent-content">
      <h1 class="homeevent-title"><router-link to="/article" tag="a" target="_blank">ABOUT US</router-link></h1>
      <p class="homeevent-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <!-- <el-button plain class="homeevent-button" @click="goArticle">What's New</el-button> -->
      <div plain class="homeevent-button" @click="goArticle">What's New</div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    goArticle(){
      let routerData = this.$router.resolve({ //编程式路由导航打开新窗口
        path:'/article',
      })
      window.open(routerData.href,'_blank')
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';

.homeevent-container{
  padding: 0 2rem;
  .homeevent{
    font-size:.8rem;
    color: $red;
    text-align: center;
    margin-bottom: 1.6rem;
  }
  .homeevent-content{
    .homeevent-title{
      padding-bottom: 1.2rem;
      a{
        font-size: .64rem;
      color: $orange;
      }
    }
    .homeevent-info{
      line-height: .6rem;
      padding-bottom: 1rem;
    }
    .homeevent-button{
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 1rem;
      color: $orange !important;
      border: 1px solid $orange;
      width: 3rem;
      height: 1.2rem;
      line-height: 1.2rem;
      cursor: pointer;
    }
  }
}
</style>