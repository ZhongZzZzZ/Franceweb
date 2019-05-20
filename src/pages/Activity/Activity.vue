<template>
  <div class="activitiy-container">
    <ContentHeader title="活动信息" color="#eb7a67"></ContentHeader>
    <Article @totalPages="listen" :pageSize="pageSize" :currentPage="currentPage"></Article>
    <el-pagination
            background
            :page-size="pageSize"
            :pager-count="5"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="total"
            class="pageSelect"
            @current-change="getPages">
    </el-pagination>
    <Footer></Footer>
  </div>


</template>

<script>
    import ContentHeader from '../../components/ContentHeader/ContentHeader'
    import Footer from '../../components/Footer/Footer'
    import Article from "../../pages/Activity/Article"
    export default {
        components:{
            Footer,
            Article,
            ContentHeader
        },
        props:{},
        data(){
            return {
                currentPage:1,
                total:1,
                pageSize:3
            }
        },
        watch:{},
        computed:{},
        methods:{
            getPages:function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)
            },
            listen:function(data){
                this.total = data
                console.log(this.total)
            }
        },
        created(){

        },
        mounted(){}
    }
</script>
<style lang="scss">
  @import '../../styles/color.scss';
  .activitiy-container{
    position: relative;
    h1 {
      font-size: 0.8rem;
      color: $orange;
      text-align: center;
      margin: 1rem 0 2rem 0;
    }
    .el-collapse-item__header{
      color:#294057;
      font-size:0.35rem;
      border-bottom:2px solid $orange;
      height: 1.6rem;
      line-height: 1.6rem;
      transition:border-bottom-color .2s;

    }
    .el-collapse-item__wrap{
      border-bottom:2px solid $orange;
      position: relative;
      overflow: hidden;
    }
    .el-collapse-item__arrow{
      font-size: 24px;
      font-weight: bold;
    }
    .el-collapse-item__content{
      color: #8F9A9E;
      font-size: 12px;
    }
    .btn{
      position:relative;
      left: 8px;
      top: 8px;
    }
    .pageSelect{
      text-align: center;
      margin: 0.5rem 0 0.5rem 0;
    }
  }

</style>