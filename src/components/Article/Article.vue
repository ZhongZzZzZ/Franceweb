<template>
  <div class="article-container">
    <div class="article-content">
      <div class="article-header">
        <h1>{{result.title}}</h1>
          <span >{{result.author}}</span>
          <span>{{result.displayTime}}</span>
          <span v-show="ifShowPoster">{{result.activityStartTime}}   --   {{result.activityEndTime}}</span>
      </div>
      <div class="article-info">
        <article><span v-html="result.content"></span></article>
      </div>
      <img v-show="ifShowPoster" :src="result.posterUrl" alt="" style="width:100%">
      <el-button v-show="result.entryFormUrl" type="primary" class="downLoadBtn"><a :href="result.entryFormUrl" download>报名表下载</a></el-button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../Footer/Footer'
import { getSingleArticle} from '@/api';

export default {
  components:{
    Footer
  },
  props:{},
  data(){
    return {
        articleId:{
            articleId:this.$route.query.articleId,
        },
        Id:this.$route.query.Id,
        result:[]
    }
  },
  watch:{},
  computed:{
      ifShowPoster: function () {
          if (+this.Id) {
              return true
          }else{
              return false
          }
      }
  },
  methods:{
      async getOrdinaryArticle (){
          this.result = await getSingleArticle(`/oa/go`,this.articleId)
          if(!this.result) {
              this.$message.error('Network Error')
              return
          }
          document.title = this.result.title
          },
      async getAcitiveArticle (){
          this.result = await getSingleArticle(`/aa/go`,this.articleId)
          if(!this.result) {
              this.$message.error('Network Error')
              return
          } else {
            document.title = this.result.title
          }
      }
  },
  created(){
      if(this.Id == 0){
          this.getOrdinaryArticle()
      }else {
          this.getAcitiveArticle()
      }

  },
  mounted(){
  }
}
</script>
<style lang="scss">
@import '../../styles/color.scss';
.article-content{
  padding: 0 6rem;
  margin-bottom: 2rem;
  position: relative;
  .downloadButton{
    margin:1rem 0 0 0;
  }
  .article-header{
    margin: 2rem 0;
    text-align: center;
    h1{
      color: $blue;
      font-size: .6rem;
      padding-bottom: 0.5rem;
      border-bottom: .04rem solid $blue;
      margin-bottom: 0.25rem;
    }
    span{
      margin: 0 .4rem;
    }
  }
  .article-info{
    text-indent: 2em;
    line-height: .6rem
  }
  .downLoadBtn{
    margin: .4rem 0;
      a{
      color:#fff;
    }
  }
}
</style>
