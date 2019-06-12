<template>
  <div class="homeactivity-container">
    <h1 class="homeactivity">{{$t('m.home.home_activity')}}</h1>
    <div class="homeactivity-list" ref="activityList">
      <ul>
        <li class="card" v-for="(item, index) in articleList" :key="index">
           <div class="card-content">
              <h1 class="card-title">{{item.title}}</h1>
              <span class="card-time">{{item.activityStartTime}}</span>
              <span class="card-time">{{item.activityEndTime}}</span>
              <p class="card-author">{{item.author}}</p>
              <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 1 }}" tag="a" target="_blank">more</router-link>
             </div>
           <img :src="item.posterUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {reqArticle} from '@/api'
export default {
  components:{},
  props:{},
  data(){
    return {
        articleList:[],
        listQuery: {
            currentPage: 1,
            pageSize: 20,
            part:'homeactivity'
        },
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getArticle () {
          const result = await reqArticle(`/aa/g`,this.listQuery)
          if(!result) {
            this.$message.error('Network Error')
            return
          }
          this.articleList = result.list
        },
  },
  created(){
    this.getArticle()
  },
  mounted(){
  }
}
</script>
<style lang="scss">
@import '@/styles/color.scss';
.homeactivity-container{
  .homeactivity{
    font-size: .8rem;
    color: $red;
    text-align: center;
    margin-bottom: 1.6rem;
  }
  .homeactivity-list{
    height: 12rem;
    overflow: auto;
      .card{
        box-sizing: border-box;
        border: 1px solid lightgray;
        border-bottom: none;
        display: flex;
        justify-content: space-around;
        height: 3.5rem;
        padding: 10px;
        transition: all 0.5s ease;
        &:hover{
        border: 1px solid $orange;
        }
        .card-content{
          width: 4rem;
          position: relative;
          .card-title{
            font-size: .32rem;
            line-height: .5rem;
            margin-bottom: .2rem;
            color: #294057;
          }
          .card-time{
            font-size: .3rem;
            margin: .3rem 0;
            margin-right: .1rem;
            display: inline-block;
            
          }
          .card-author{
            font-size: .3rem;
          }
          .more{
            position: absolute;
            color: $orange;
            font-size: .4rem;
            bottom: 5px;
          }
        }
        img{
          width:  4.5rem;
          height: 3rem;
          
        }
      }
    }
}
</style>
