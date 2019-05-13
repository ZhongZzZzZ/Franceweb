<template>
<div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo menu hidden-xs-only"
    mode="horizontal"
    :router="true"
    background-color="#3f51b5"
    text-color="#fff"
    active-text-color="#e51c23">
    <a href="javascript:;" class="menu-item logo"><img src="../../assets/logo.png" alt="" title="acef联谊会"></a>
    <el-menu-item index="/" class="menu-item"><a href="#">首页</a></el-menu-item>
    <el-menu-item index="/about" class="menu-item"><a href="#">关于我们</a></el-menu-item>
    <el-menu-item index="/service" class="menu-item"><a href="#">公益服务</a></el-menu-item>
    <el-menu-item index="/activity" class="menu-item"><a href="#">活动信息</a></el-menu-item>
    <el-menu-item index="/topic" class="menu-item"><a href="#">专题回顾</a></el-menu-item>
    <el-menu-item index="/contact" class="menu-item"><a href="#">联系我们</a></el-menu-item>
    <el-menu-item index="/link" class="menu-item"><a href="#">友情链接</a></el-menu-item>
    <el-menu-item index="/report" class="menu-item"><a href="#">专题报道</a></el-menu-item>
  </el-menu>
  <div class="phone-menu hidden-sm-and-up">
    <div class="title">
      <a href="#"><img src="../../assets/logo.png" alt=""></a>
      <h1>ACEF联谊会</h1>
      <el-button type="primary" icon="el-icon-caret-bottom" size="mini" @click="showToggle"></el-button>
    </div>
  </div>
  <transition name="toggle">
  <div class="phone-container" v-show="isShow"> 
    <div class="phone-menu-link hidden-sm-and-up">
      <ul class="phone-menu-ul" ref="phone-menu-ul">
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/">首页</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/about">关于我们</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/service">公益服务</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/activity">活动信息</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/topic">专题回顾</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/contact">联系我们</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/link">友情链接</router-link>
        <router-link @click.native="showToggle" tag="li" class="phone-menu-item" to="/report">专题报道</router-link>
      </ul>
    </div>
    <div class="black" @click="showToggle"></div>
  </div>
  </transition>
</div>
</template>

<script>

export default {
  components:{},
  props:{},
  data(){
    return {
      activeIndex:'/',
      isShow:false
    }
  },
  watch:{},
  computed:{},
  methods:{
    showToggle(){
      this.isShow = !this.isShow
    }
  },
  created(){
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
@import '../../styles/color.scss';
.phone-menu{
  position: relative;
  z-index: 100;
  height: 10vh;
  background-color: $blue;
  padding: 0 0.4rem;
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      height: 10vh;
      width: 10vh;
    }
    h1{
      color: #fff;
      font-size: 18px;
    }
  }

}
.phone-container{
  &.toggle-enter-active,&.toggle-leave-active{
    transition: all 0.3s ease;
  }
  &.toggle-enter,&.toggle-leave-to{
    opacity: 0;
  }
  .phone-menu-link{
    position: relative;
    z-index: 100;
    background-color: $blue;
    .phone-menu-ul{
      .phone-menu-item{
        padding: 0.2rem 0.4rem;
        line-height: 5vh;
        border-top: 1px solid #fff;
        color: #fff;
      }
    }
  }
  .black{
    position: absolute;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

/* .phone-menu-item-active{
  border-bottom: 1px solid $red !important;
  a{
    color: $red !important;
  }
} */


.menu{
  height: 110px;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  .menu-item{
    flex: 1;
    height: 110px;
    text-align: center;
    a{
      line-height: 110px;
      font-size: 18px;
    }
  }
  .logo{
    margin: 5px;
    img{
      width: 100px;
      height: 100px;
    }
  }
  
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu{
    .menu-item{
      padding: 0 2px;
      a{
        font-size: 15px;
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .menu{
    .menu-item{
      padding: 0 10px;
    }
  }
}





</style>