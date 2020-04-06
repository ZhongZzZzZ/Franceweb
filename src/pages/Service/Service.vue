<template>
  <div class="container">
    <div class="content">
      <h1>{{$t('m.menu.social_service')}}</h1>
      <serviceArticle></serviceArticle>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from '@/components/Footer/Footer'
    import serviceArticle from './serviceArticle'
    export default {
        name:'Service',
        components:{
            Footer,
            serviceArticle
        },
    }
</script>
<style lang="scss" scoped>
  @import '../../styles/color.scss';
  .container{
    position: relative;
    .content
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
      font-size: 0.5rem;
      color: $orange;
      text-align: center;
      margin: 0.4rem 0 1rem 0;
    }
  }
  </style>
