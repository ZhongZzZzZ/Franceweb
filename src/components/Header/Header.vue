<template>
<div>
  <el-menu
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#3f51b5"
    text-color="#FFF"
    >
    <a href="javascript:;" class="menu-item logo"><img src="../../assets/logo.png" alt="" title="acef联谊会"></a>
    <el-menu-item  class="menu-item"><router-link to="/home">首页</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/about">关于我们</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/service">公益服务</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/activity">活动信息</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/topic">专题回顾</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/contact">联系我们</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/link">友情链接</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/report">专题报道</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-drop">
    <el-dropdown trigger="click" placement="top">
      <span class="el-dropdown-link">
        选择语言<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>中文</el-dropdown-item>
        <el-dropdown-item>English</el-dropdown-item>
        <el-dropdown-item>Français</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-menu-item>
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
  background-color: #ffffff;
  color: $blue !important;
  border-bottom: .04rem solid $blue;
  border-top: .04rem solid $blue;
  box-sizing: border-box;
}
.menu{
  height: 2.2rem;
  padding: 0 3rem !important;
  display: flex;
  justify-content: space-between;
  .menu-item{
    height: 2.2rem !important;
    text-align: center;
    padding: 0;
    flex: 1;
    border-bottom: none !important;
    a{
      display: block;
      line-height: 2rem;
      font-size:  .36rem;
      text-decoration: none;
      height: 100%;
      width: 100%;
      transition: all 0.3s ease;
      &:hover{
      font-size: .4rem;
      }
    }
    &.menu-item-drop{
      >div{
        width: 100%;
        height: 100%;
        &:focus{
          outline-color: transparent !important;
        }
      }
      span,i{
        color: #fff;
        font-size: .36rem;
        line-height: 2rem;
      }
      span{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .logo{
    margin-top: .1rem;
    padding-right: .4rem;
    img{
      width: 2rem;
      height: 2rem;
    }
  }
  
}







</style>