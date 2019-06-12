<template>
  <div class="activitiy-container">
    <ContentHeader :title="$t('m.menu.activity_info')" color="#eb7a67"></ContentHeader>
    <div class="articleContent">
    <Article></Article>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import ContentHeader from '../../components/ContentHeader/ContentHeader'
    import Footer from '../../components/Footer/Footer'
    import Article from "../../pages/Activity/Article"
    export default {
        components:{
            Footer,
            Article,
            ContentHeader
        },
        data(){
            return {
            }
        }
    }
</script>
<style lang="scss">
  @import '../../styles/color.scss';
  .activitiy-container{
    position: relative;
    .articleContent
    {
      ::after{
        content: "";
        clear: both;
        display: block;
        overflow: hidden;
        font-size: 0;
        height: 0;
      }
      .pageSelect{
        text-align: center;
        margin: 0.5rem 0 0.5rem 0;
      }
    }
    h1{
      font-size: 0.8rem;
      color: $orange;
      text-align: center;
      margin: 1rem 0 2rem 0;
    }
  }

</style>
