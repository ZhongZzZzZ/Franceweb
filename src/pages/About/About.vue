<template>
  <div class="about-container">
    <div class="routeChange">
      <router-link to="/about/association" class="routeLink" :class="{isActivity:isAssociation}">{{$t('m.about.association')}}</router-link>
      <router-link to="/about/members" class="routeLink" :class="{isActivity:!isAssociation}">{{$t('m.about.members')}}</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer'
export default {
  components:{
    Footer,
  },
  props:{},
  data(){
    return {
      isAssociation:true
    }
  },
  watch:{
    $route () {
      if(this.$route.meta.isAssociation) {
        this.isAssociation = true
      } else {
        this.isAssociation = false
      }
    }
  },
  computed:{},
  methods:{},
  created(){
    if(this.$route.meta.isAssociation) {
        this.isAssociation = true
      } else {
        this.isAssociation = false
      }
  },
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/color.scss';
.about-container{
  .routeChange{
    box-sizing: border-box;
    font-size: 0.5rem;
    text-align: center;
    margin: 0.6rem auto;
    width: 10rem;
    height: 1.5rem;
    line-height: 1.5rem;
    .routeLink{
      display: inline-block;
      width: 5rem;
      color: $blue !important;
      border: none;
      transition: all 0.3s ease;
      &:hover{
        color: #fff !important;
        background-color: $blue;
        border-bottom: .1rem solid $blue;
      }
      &.isActivity{
        border-bottom: .1rem solid $blue;
      }
    }

  }

}
</style>
