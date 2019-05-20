<template>
<div>
  <el-menu
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#3f51b5"
    text-color="#fff"
    >
    <a href="javascript:;" class="menu-item logo"><img src="../../assets/logo.png" alt="" title="acef联谊会"></a>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/home">首页</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/about">关于我们</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/service">公益服务</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/activity">活动信息</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/topic">专题回顾</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/contact">联系我们</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/link">友情链接</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-info"><router-link to="/report">专题报道</router-link></el-menu-item>
  </el-menu>
</div>
</template>

<script>

export default {
  components:{},
  props:{},
  data(){
    return {
      activeIndex:'/',
    }
  },
  watch:{},
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
@import '../../styles/color.scss';
.heightlight{
  background-color: red;
}
.menu{
  height: 110px;
  padding: 0 3rem !important;
  display: flex;
  justify-content: space-between;
  .menu-item{
    flex: 1;
    height: 110px !important;
    text-align: center;
    &.is-active{
      color: #fff;
      border-bottom: 0.1rem solid #fff !important;
    }
    a{
      line-height: 110px;
      font-size: 18px;
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
  }
  .logo{
    margin-top: 5px;
    padding-right: 20px;
    img{
      width: 100px;
      height: 100px;
    }
  }
  
}







</style>