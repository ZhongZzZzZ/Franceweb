<template>
  <div class="homeevent-container">
    <h1 class="homeevent">重大事件</h1>
    <div class="homeevent-content">
      <div class="homeevent-topic" v-for="(item, index) in 6" :key="index">
        <h1><router-link class="title" to="/article" tag="a" target="_blank">结构化查询语言</router-link></h1>
        <span>2019-05-30 08:08:08</span>
        <router-link class="more" to="/article" tag="a" target="_blank">more</router-link>
      </div>
      <div class="homeevent-button" @click="goArticle">更多</div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
  props:{},
  data(){
    return {
      articleList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
    goArticle(){
      this.$router.push('/home/eventlist')
    }
  },
  created(){},
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