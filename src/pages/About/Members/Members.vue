<template>
  <div class="members-container">
    <div class="members-content">
      <div class="box" v-for="(item, index) in members" :key="index">
        <div class="members" >
        <img :src="item.imgPath" alt="" />
        <p class="name">{{$t('m.about.name')}}：{{item.name}}</p>
        <p class="position">{{$t('m.about.position')}}：{{item.position}}</p>
        <p class="desc">{{$t('m.about.position')}}：{{item.description}}</p>
      </div>
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
    grid-template-rows: repeat(3, 7.3rem);
    grid-gap: 1rem 1rem;
    .box{
      height: 7.3rem;
      overflow: hidden;
      -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
      .members{
      padding: .1rem .34rem 0;
      overflow-y: scroll;
      margin-right: -17px;
      height: 7.3rem;
      img{
        width: 4rem;
        height: 4rem;
      }
      p{
        font-size: .32rem;
        margin-top: .2rem;
        font-weight: bold;
        &:nth-of-type(3){
          line-height: .5rem;
        }
      }
    }
    }
  }
}
</style>