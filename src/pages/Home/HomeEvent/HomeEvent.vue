<template>
  <div class="homeevent-container">
    <h1 class="homeevent">{{$t('m.home.home_event')}}</h1>
    <div class="homeevent-content">
      <div class="homeevent-topic" v-for="(item, index) in articleList" :key="index">
        <router-link class="title" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" target="_blank">{{item.title}}</router-link>
        <p>{{item.author}}</p>
        <p style="position: absolute;right: 0.15rem;top: 0.75rem;">{{item.displayTime}}</p>
        <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" target="_blank">more</router-link>
      </div>
      <div class="homeevent-button" @click="goArticle">{{$t('m.home.more')}}</div>
    </div>
  </div>
</template>

<script>
    import { reqArticle } from '@/api';
export default {
  components:{
  },
  props:{},
  data(){
    return {
      articleList:[],
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
      this.$router.push('/home/eventlist')
    },
      async getArticle () {
          const result = await reqArticle(`/oa/g`,this.listQuery)
          if(!result) {
            this.$message.error('Network Error')
            return
          }
          this.articleList = result.list
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

.homeevent-container{
  padding: 0 2rem;
  .homeevent{
    font-size:.5rem;
    color: $red;
    text-align: center;
    margin-bottom: 0.6rem;
  }
  .homeevent-content{
    .homeevent-topic{
      height: 2rem;
      position:relative;
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
