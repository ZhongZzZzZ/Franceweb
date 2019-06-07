<template>
  <div class="homeevent-container">
    <h1 class="homeevent">重大事件</h1>
    <div class="homeevent-content">
      <div class="homeevent-topic" v-for="(item, index) in articleList" :key="index">
        <h1><router-link class="title" to="/article" tag="a" target="_blank">{{item.title}}</router-link></h1>
        <span>{{item.displayTime}}</span>
        <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" tag="a" target="_blank">more</router-link>
      </div>
      <div class="homeevent-button" @click="goArticle">更多</div>
    </div>
  </div>
</template>

<script>
    import { reqArticle } from '../../../api';
export default {
  components:{
  },
  props:{},
  data(){
    return {
      articleList:[],
        activeNames:[],
        listQuery: {
            currentPage: 1,
            pageSize: 6,
            part:'homeevent'
        },
    }
  },
  watch:{},
  computed:{},
  methods:{
    goArticle(){
      let routerData = this.$router.resolve({ //编程式路由导航打开新窗口
        path:'/article',
      })
      window.open(routerData.href,'_blank')
    },
      async getArticle () {
          const result = await reqArticle(`/oa/g`,this.listQuery)
          console.log(result)
          this.articleList = result.list
          this.activeNames= []
      }
  },
  created(){
      this.getArticle()
  },
  mounted(){}
}
</script>
<style lang="scss">
@import '@/styles/color.scss';

.homeevent-container{
  padding: 0 2rem;
  .homeevent{
    font-size:.8rem;
    color: $red;
    text-align: center;
    margin-bottom: 1.6rem;
  }
  .homeevent-content{
    .homeevent-topic{
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
    .homeevent-button{
      box-sizing: border-box;
      text-align: center;
      margin: 1rem 0;
      color: $orange !important;
      border: 1px solid $orange;
      width: 3rem;
      height: 1.2rem;
      line-height: 1.2rem;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover{
        background-color: $orange;
        color: #fff !important;
        border-radius: 100%;

      }
    }
  }
}
</style>
