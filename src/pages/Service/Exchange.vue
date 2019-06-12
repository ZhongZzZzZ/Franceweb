<template>
  <div class="container">
    <div class="content">
      <h1>{{$t('m.menu.culture_exchange')}}</h1>
      <exchangeArticle/>
    <Footer></Footer>
  </div>
  </div>
</template>

<script>
    import Footer from '@/components/Footer/Footer'
    import exchangeArticle from './exchangeArticle'
    export default {
        name:'Service',
        components:{
            Footer,
            exchangeArticle
        },

        data(){
            return {
            }
        },

    }
</script>
<style lang="scss" scoped>
  @import '@/styles/color.scss';
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
      font-size: 0.8rem;
      color: $orange;
      text-align: center;
      margin: 1rem 0 2rem 0;
    }
  }
  </style>
