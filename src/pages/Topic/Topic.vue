<template>
  <div>
    <ContentHeader :title="$t('m.menu.report_review')" color="#3f51b5"></ContentHeader>
    <TopicArticle></TopicArticle>
    <Footer></Footer>
  </div>
</template>

<script>
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import TopicArticle from './TopicArticle/TopicArticle'
import Footer from "../../components/Footer/Footer"
export default {
  components:{
    ContentHeader,
    Footer,
    TopicArticle
  },
}
</script>
<style lang="scss">

</style>
