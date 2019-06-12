<template>
  <div class="homeactivity-container">
    <h1 class="homeactivity">{{$t('m.home.home_activity')}}</h1>
    <div class="homeactivity-list" ref="activityList">
      <ul>
        <li class="card" v-for="(item, index) in articleList" :key="index">
           <div class="card-content">
              <h1 class="card-title">{{item.title}}</h1>
              <p class="card-time">{{item.activityStartTime}}</p>
              <p class="card-time">--  {{item.activityEndTime}}</p>
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
@import '../../../styles/color.scss';
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
            display: flex;
            justify-content: space-around;
            transition: all 0.5s ease;
            padding-bottom: 0.2rem;
            &:hover{
                border: 1px solid $orange;
            }
            .card-content{
                width: 3rem;
                margin: .4rem .4rem .2rem;
                .card-title{
                    font-size: .3rem;
                    margin-bottom: .2rem;
                }
                .card-time{
                    font-size: .3rem;
                    margin-bottom: .2rem;
                }
                .card-author{
                    font-size: .3rem;
                }
                .more{
                    color: $orange;
                    font-size: .4rem;
                }
            }
            img{
                width:  3rem;
                height: 3rem;
                margin: .3rem .3rem 0 0;
            }
        }
    }
}
</style>
