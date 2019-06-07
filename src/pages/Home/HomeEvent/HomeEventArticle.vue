<template>
   <div class="homeeventarticle-container">
    <div class="homeeventarticle-content">
      <div class="homeeventarticle-topic" v-for="(item, index) in articleList" :key="index">
        <h1><router-link class="title" to="/article" tag="a" target="_blank">{{item.title}}</router-link></h1>
        <span>{{item.time}}</span>
        <router-link class="more" to="/article" tag="a" target="_blank">more</router-link>
      </div>
      <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.page" :pageSize="5"  @pagination="getList" />
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
        page: 1,
        limit: 5
      },
      total:50,
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getArticle () {
          const result = await reqArticle('/data/get')
          this.articleList = result.slice(0,5)
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
@import '@/styles/color.scss';
.homeeventarticle-container{
  padding: 0 4rem;
  .homeeventarticle-content{
    .homeeventarticle-topic{
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