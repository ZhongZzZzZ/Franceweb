<template>
  <div class="members-container">
    <div class="members-content">
      <div class="members" v-for="(item, index) in members" :key="index">
        <img :src="item.imgPath" alt="" />
        <p class="name">姓名：{{item.name}}</p>
        <p class="position">职位：{{item.position}}</p>
        <p class="description">个人介绍：{{item.description}}</p> 
      </div>
    </div>
     <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.page" :pageSize="12"  @pagination="getList" />
  </div>
</template>

<script>
import {reqMembersList} from '@/api'
import Pagination from '@/components/Pagination/index'
export default {
  components:{
    Pagination
  },
  props:{},
  data(){
    return {
      members:[],
      listQuery: { 
        page: 1,
        limit: 12
      },
      total:1,
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getMemberList () {
      const result = await reqMembersList(`/mi/gaf?currentPage=${this.listQuery.page}&pageSize=${this.listQuery.limit}`,)
      if(!result) {
            this.$message.error('Network Error')
            return
          }
      this.members = result.list
      this.total = result.total
      },
    getList(){
      this.getMemberList()
    },
  },
  created(){
    this.getList()
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
    padding: 0 4.5rem;
    display: grid;
    grid-template-columns: repeat(4, 5rem);
    grid-template-rows: repeat(3, 7rem);
    grid-gap: 1rem 1rem;
    .members{
      transition: all 0.7s ease;
      padding: .1rem;
      -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
      &:hover{
        transform:scale(1.1);
      }
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