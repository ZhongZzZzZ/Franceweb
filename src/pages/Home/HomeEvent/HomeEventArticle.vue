<template>
   <div class="homeeventarticle-container">
    <div class="homeeventarticle-content">
      <div class="homeeventarticle-topic" v-for="(item, index) in articleList" :key="index">
        <router-link class="title" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" target="_blank">{{item.title}}</router-link>
        <p>{{item.author}}</p>
        <p style="position: absolute;right: 0.15rem;top: 0.75rem;">{{item.displayTime}}</p>
        <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" target="_blank">more</router-link>
      </div>
      <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.currentPage" :pageSize="5"  @pagination="getList" />
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
        pageSize: 5,
        part:'homeevent'
      },
      total:1,
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getArticle () {
        const result = await reqArticle(`/oa/g`,this.listQuery)
        if(!result) {
            this.$message.error('网络错误')
            return
        }
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
@import '@/styles/color.scss';
.homeeventarticle-container{
  padding: 0 4rem;
  .homeeventarticle-content{
    .homeeventarticle-topic{
      height: 2rem;
      position: relative;
      border-bottom: 2px solid $orange;
      line-height: 0.65rem;
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
