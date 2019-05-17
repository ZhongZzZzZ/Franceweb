<template>
  <div class="homeactivity-container">
    <h1 class="homeactivity">近期活动</h1>
    <div class="homeactivity-list" ref="activityList">
      <ul>
        <li class="card" v-for="(item, index) in activityList" :key="index">
           <div class="card-content"><p>{{item.p}}</p></div>
           <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      activityList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    const arr = [
      {p:'可以是单行',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'可以是单行',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'昭和无惨绘｜丸尾末广×花轮和一 新英…',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'可以是单行',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'昭和无惨绘｜丸尾末广×花轮和一 新英…',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'可以是单行',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'昭和无惨绘｜丸尾末广×花轮和一 新英…',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'可以是单行',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
      {p:'昭和无惨绘｜丸尾末广×花轮和一 新英…',img:'http://img4.imgtn.bdimg.com/it/u=2150992516,3202248268&fm=26&gp=0.jpg'},
    ]
    this.activityList = arr
  },
  mounted(){
  }
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';
.homeactivity-container{
  .homeactivity{
    font-size: 40px;
    color: $red;
    font-weight: bold;
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
        height: 4rem;
        .card-content{
          width: 2.74rem;
          margin: .8rem .4rem 0;
        }
        img{
          width:  3rem;
          height: 3rem;
          margin: .2rem .2rem 0 0;
        }
      }
    }
}
</style>