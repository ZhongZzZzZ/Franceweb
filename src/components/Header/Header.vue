<template>
<div>
  <el-menu
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#3f51b5"
    text-color="#FFF"
    >
    <el-menu-item  class="menu-item"><router-link to="/home">{{$t('m.menu.home_page')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/about">{{$t('m.menu.about_us')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/activity">{{$t('m.menu.activity_info')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/report">{{$t('m.menu.special_report')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-drop">
      <el-dropdown @command="selectSocialCulture" trigger="click" placement="top">
        <span class="el-dropdown-link">
         <router-link :to="path">{{$t('m.menu.social_culture')}}<i class="el-icon-arrow-down el-icon--right"></i></router-link>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="社会服务">{{$t('m.menu.social_service')}}</el-dropdown-item>
          <el-dropdown-item command="语言学校">{{$t('m.menu.language_school')}}</el-dropdown-item>
          <el-dropdown-item command="文化交流">{{$t('m.menu.culture_exchange')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/topic">{{$t('m.menu.report_review')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/link">{{$t('m.menu.friendship_link')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/contact">{{$t('m.menu.contact_us')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-drop">
    <el-dropdown @command="selectLanguage" trigger="click" placement="top">
      <span class="el-dropdown-link">
      {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="中文">中文</el-dropdown-item>
        <el-dropdown-item command="Français">Français</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import {getCookies, setCookies} from '../../api/cookie'
export default {
  components:{},
  props:{},
  data(){
    return {
      lang:'',
      language:'中文',
      path:''
    }
  },
  watch:{
    $route(){ //监听当前路由变化，判断社会文化菜单栏块点击是否跳转
    if(this.$route.path.includes('/culture')) { //当路由是在社会文化，点击社会文化块会跳转到自己页面，因为当前路由有keepalive，不需要担心重新发请求
      this.path = this.$route.path
    } else { //当目前路由不是在社会文化里，点击社会文化块可以去到社会文化中的服务页面
      this.path = '/culture/service'
    }
    }
  },
  computed:{
  },
  methods:{
    selectSocialCulture(command) {
      switch (command) {
        case '社会服务':
          this.$router.push('/culture/service')
          break;
        case '语言学校':
          this.$router.push('/culture/school')
          break;
        case '文化交流':
          this.$router.push('/culture/exchange')
          break;
        default:
          break;
      }
    },
     selectLanguage(command){
      switch (command) {
        case '中文':
          setCookies('language','Chinese')
          location.reload()
          break;
        case 'Français':
          setCookies('language','French')
          location.reload()
          break;
        default:
          break;
      }
  
    }
  },
  created(){
    switch (getCookies('language')) {
      case 'Chinese':
        this.language = '中文'
        break;
      case 'French':
        this.language = 'Français'
        break;
      default:
        break;
    }

    
    if(this.$route.path.includes('/culture')) { //当路由是在社会文化，点击社会文化块会跳转到自己页面，因为当前路由有keepalive，不需要担心重新发请求
      this.path = this.$route.path
    } else { //当目前路由不是在社会文化里，点击社会文化块可以去到社会文化中的服务页面
      this.path = '/culture/service'
    }
    
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
  i{
    color: $blue !important;
  }
}
.menu{
  height: 1.5rem;
  padding: 0 3rem !important;
  display: flex;
  justify-content: space-between;
  .menu-item{
    box-sizing: border-box;
    height: 1.5rem !important;
    text-align: center;
    padding: 0 5px;
    flex: 1;
    border-bottom: none !important;
    a{
      display: block;
      line-height: 1.4rem;
      font-size:  .36rem;
      text-decoration: none;
      height: 100%;
      width: 100%;
      transition: all 0.3s ease;
    }
    &.menu-item-drop{
      >div{
        width: 100%;
        height: 100%;
        display: block;
        &:focus{
          outline-color: transparent !important;
        }
      }
      span,i{
        color: #fff;
        font-size: .36rem;
        line-height: 1.4rem;
      }
      span{
        width: 100%;
        height: 100%;
        display: block;
      }
      i{
        margin: 0;
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