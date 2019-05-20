<template>
   <div class="reportarticle-container">
    <div class="reportarticle-content">
      <div class="reportarticle-topic" v-for="(item, index) in articleList" :key="index">
        <h1><router-link class="title" to="/article" tag="a" target="_blank">{{item.title}}</router-link></h1>
        <span>{{item.time}}</span>
        <router-link class="more" to="/article" tag="a" target="_blank">more</router-link>
      </div>
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
import { reqArticle } from '../../../api';
export default {
  components:{},
  props:{},
  data(){
    return {
      articleList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getArticle () {
          const result = await reqArticle('/data/get')
          this.articleList = result
        }
  },
  created(){
    this.getArticle()
  },
  mounted(){}
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';
.reportarticle-container{
  padding: 0 4rem;
  .reportarticle-content{
    .reportarticle-topic{
      height: 1.6rem;
      border-bottom: 2px solid $orange;
      line-height: 0.8rem;
      padding: 0 .2rem;
      .title{
        color: #294057;
        font-size: .4rem;
      }
      .more{
        float: right;
        color: $orange;
        font-size: .35rem;
      }
    }
  }
  .page{
    margin: 0.5rem 0;
    text-align: center;
  }
}
</style>