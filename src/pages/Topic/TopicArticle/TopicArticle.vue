<template>
  <div class="topicarticle-container">
    <div class="topicarticle-content">
      <div class="topicarticle-topic" v-for="(item, index) in articleList" :key="index">
        <h1><router-link class="title" to="/article" tag="a" target="_blank">{{item.title}}</router-link></h1>
        <span>{{item.time}}</span>
        <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" tag="a" target="_blank">more</router-link>
      </div>
      <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.currentPage" :pageSize="listQuery.pageSize"  @pagination="getList" />
  </div>
  </div>
</template>

<script>
import { reqArticle } from '@/api';
import Pagination from '@/components/Pagination/index'
export default {
  components:{
    Pagination
  },
  props:{},
  data(){
    return {
      articleList:[],
        listQuery: {
            currentPage: 1,
            pageSize: 3,
            part:'service'
        },
        total:50,
        activeNames:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getArticle(){
        const result = await reqArticle(`/oa/g`,this.listQuery)
        console.log(result)
        this.total = result.total
        this.articleList = result.list
        this.activeNames= []
    },
    getList(){
      this.getArticle()
    },
  },
  created(){
    this.getList()
  },
  mounted(){}
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';
.topicarticle-container{
  padding: 0 4rem;
  margin-bottom: 1rem;
  .topicarticle-content{
    .topicarticle-topic{
      height: 2rem;
      border-bottom: 2px solid $orange;
      line-height: 1rem;
      padding: 0 .2rem;
      .title{
        color: #294057;
        font-size: .4rem
      }
      .more{
        float: right;
        color: $orange;
        font-size: .35rem;
      }
    }
  }
  .page{
    text-align: center;
    margin: 0.5rem 0;
  }
}
</style>
