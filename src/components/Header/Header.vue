<template>
<div>
  <el-menu
    class="el-menu-demo menu"
    mode="horizontal"
    :router="true"
    background-color="#3f51b5"
    text-color="#fff"
    active-text-color="#fff"
    >
    <a href="javascript:;" class="menu-item logo"><img src="../../assets/logo.png" alt="" title="acef联谊会"></a>
    <el-menu-item index="/" class="menu-item menu-item-info"><a href="javascript:;">首页</a></el-menu-item>
    <el-menu-item index="/about" class="menu-item menu-item-info"><a href="javascript:;">关于我们</a></el-menu-item>
    <el-menu-item index="/service" class="menu-item menu-item-info"><a href="javascript:;">公益服务</a></el-menu-item>
    <el-menu-item index="/activity" class="menu-item menu-item-info"><a href="javascript:;">活动信息</a></el-menu-item>
    <el-menu-item index="/topic" class="menu-item menu-item-info"><a href="javascript:;">专题回顾</a></el-menu-item>
    <el-menu-item index="/contact" class="menu-item menu-item-info"><a href="javascript:;">联系我们</a></el-menu-item>
    <el-menu-item index="/link" class="menu-item menu-item-info"><a href="javascript:;">友情链接</a></el-menu-item>
    <el-menu-item index="/report" class="menu-item menu-item-info"><a href="javascript:;">专题报道</a></el-menu-item>
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