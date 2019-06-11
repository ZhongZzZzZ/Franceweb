<template>
  <div>
    <ContentHeader :title="$t('m.menu.special_report')" color="#eb7a67"></ContentHeader>
    <ReportArticle></ReportArticle>
    <Footer></Footer>
  </div>
</template>

<script>
import ReportArticle from './ReportArticle/ReportArticle'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import Footer from '../../components/Footer/Footer'
export default {
  components:{
      ContentHeader,
      Footer,
      ReportArticle
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