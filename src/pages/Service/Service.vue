<template>
  <div class="container">
    <div class="content">
      <h1>公益服务</h1>
      <serviceArticle :pageSize="pageSize" :currentPage="currentPage" @totalPages="listen"></serviceArticle>
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
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

    import "../../styles/color.scss"
    import Footer from '../../components/Footer/Footer'
    import serviceArticle from './serviceArticle'
    export default {

        components:{
            Footer,
            serviceArticle
        },
        props:{
        },
        data(){
            return {
                src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
                src2:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1557670229&di=d2f9e181946f6c809ef05ef801832f39&src=http://uploads.5068.com/allimg/1712/144-1G2091Z026.jpg",
                flag:true,
                currentPage:1,
                total:1,
                pageSize:3
            }
        },
        watch:{},
        computed:{

        },
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
        mounted(){

        },

    }
</script>
<style lang="scss" scoped>
  @import '../../styles/color.scss';
  .container{
    position: relative;
    .content
    {
      /*margin:0 4rem;*/
      ::after{
        content: "";
        clear: both;
        display: block;
        overflow: hidden;
        font-size: 0;
        height: 0;
      }

      .pageSelect{
        text-align: center;
        margin: 0.5rem 0 0.5rem 0;
      }
    }
    h1{
      font-size: 0.8rem;
      color: $orange;
      text-align: center;
      margin: 1rem 0 2rem 0;
    }
  }
  </style>