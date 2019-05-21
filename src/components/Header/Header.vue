<template>
<div>
  <el-menu
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#3f51b5"
    text-color="#FFF"
    >
    <a href="javascript:;" class="menu-item logo"><img src="../../assets/logo.png" alt="" title="acef联谊会"></a>
    <el-menu-item  class="menu-item"><router-link to="/home">{{$t('m.menu.home_page')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/about">{{$t('m.menu.about_us')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/service">{{$t('m.menu.social_service')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/activity">{{$t('m.menu.activity_info')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/topic">{{$t('m.menu.report_review')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/contact">{{$t('m.menu.contact_us')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/link">{{$t('m.menu.friendship_link')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item"><router-link to="/report">{{$t('m.menu.special_report')}}</router-link></el-menu-item>
    <el-menu-item  class="menu-item menu-item-drop">
    <el-dropdown @command="selectLanguage" trigger="click" placement="top">
      <span class="el-dropdown-link">
      {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="中文">中文</el-dropdown-item>
        <el-dropdown-item command="English">English</el-dropdown-item>
        <el-dropdown-item command="Français">Français</el-dropdown-item>
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
      lang:'',
      language:'中文'
    }
  },
  watch:{},
  computed:{},
  methods:{
    selectLanguage(command){
      this.language = command
      switch (command) {
        case '中文':
          this.lang = 'zh-CN'
          break;
        case 'English':
          this.lang = 'en-US'
          break;
        case 'Français':
          this.lang = 'fr-FR'
          break;
        default:
          break;
      }
      localStorage.setItem('locale',this.lang)
      location.reload()
    }
  },
  created(){
    const locale = localStorage.getItem('locale')
    if(!locale || locale === 'zh-CN'){
      this.language = '中文'
    } else if(locale === 'en-US'){
      this.language = 'English'
    } else if(locale === 'fr-FR'){
      this.language = 'Français'
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
        line-height: 2rem;
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