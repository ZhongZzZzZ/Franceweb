<template>
  <div>
    <ContentHeader title="重大事件" color="#eb7a67"></ContentHeader>
    <HomeEventArticle></HomeEventArticle>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeEventArticle from './HomeEventArticle'
import ContentHeader from '@/components/ContentHeader/ContentHeader'
import Footer from '@/components/Footer/Footer'
export default {
  components:{
      ContentHeader,
      Footer,
      HomeEventArticle
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss">

</style>