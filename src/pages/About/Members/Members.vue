<template>
  <div class="members-container">
    <ContentHeader title="社团成员介绍" color="#000"></ContentHeader>
    <div class="members-content">
      <div class="members" v-for="(item, index) in members" :key="index">
        <img :src="item.imgPath" alt="">
        <p class="name">姓名：{{item.name}}</p>
        <p class="position">职位：{{item.position}}</p>
        <p class="description">个人介绍：{{item.description}}</p> 
      </div>
    </div>
     <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.page"  @pagination="getList" />
  </div>
</template>

<script>
import {reqMembersList} from '../../../api'
import ContentHeader  from '../../../components/ContentHeader/ContentHeader'
import Pagination from '../../../components/Pagination/index'
export default {
  components:{
    ContentHeader
  },
  props:{},
  data(){
    return {
      members:[],
      listQuery: { 
        page: 1,
        limit: 9
      },
      total:20,
      currentPage: 1
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getMemberList ({page,limit}) {
    const result = await reqMembersList(`/user/pgami/${page}/${limit}`)
    this.members = result.list
    this.total = result.total
    console.log(this.members);
    },
  },
  created(){
    this.getMemberList(this.listQuery)
  },
  mounted(){
  }
}
</script>
<style lang="scss">
.members-container{
  >h1{
    margin-bottom: 1.5rem;
  }
  .members-content{
    text-align: center;
    padding: 0 7rem;
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 7rem);
    grid-gap: 1rem 1rem;
    .members{
      border: 1px solid #000;
      padding: .1rem;
      img{
        width: 4rem;
        height: 4rem;
      }
      p{
        font-size: .32rem;
        margin-top: .2rem;
        font-weight: bold;
        &:nth-of-type(3){
          line-height: .4rem;
        }
      }
    }
  }
}
</style>