<template>          <!--活动信息子组件-->
    <div>
        <el-row>
            <div class="service" v-for="(item,index) in articleList" :key="index">
                <el-col  :span="3"  v-show="index % 2 ==1 ? true: false" class="floatLeft">&nbsp;</el-col>
                <el-col :span="3" v-show="index % 2 ==0?true:false" >&nbsp;</el-col>
                <!--右浮占位栅格-->
                <el-col :span="1" v-show="index % 2 ==0?true:false" class="floatLeft">&nbsp;</el-col>
                <!--左浮占位栅格-->
                <el-col :span="3"  v-show="index % 2 ==1?true:false" class="floatRight">&nbsp;</el-col>
                <el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18"  :class="index % 2 ==1?'floatRight':' '">
                    <div >
                        
                        <router-link class="title" :to="{path:'/article',query:{ articleId : item.articleId,Id: 1 }}" target="_blank">{{item.title}}</router-link>
                        <p>{{item.activityStartTime}} --- {{item.activityEndTime}}</p>
                            <el-image :src="item.posterUrl" class="serviceImg">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </el-image>
                    </div>
                </el-col>
                <!--用空格制造间隔-->
                <el-col :xs="4" :sm="3" :md="1" :lg="1" >&nbsp;</el-col>
                <el-col :xs="18" :sm="10" :md="9" :lg="8" :xl="8">
                    <div class="article">
                        <span class="passage" v-html="Aritcle(item)">
                        </span>
                        <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 1 }}" tag="a" target="_blank"><el-button type="primary" plain>Read More></el-button></router-link>
                    </div>
                </el-col>
            </div>
        </el-row>
        <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.currentPage" :pageSize="listQuery.pageSize"  @pagination="getList" />
    </div>
</template>

<script>
import { reqArticle } from '../../api';
import Pagination from '@/components/Pagination/index'

export default {
   components:{
     Pagination
   },
   data(){
       return {
           activeNames:[],
           articleList:[],
            listQuery: {
              currentPage: 1,
              pageSize: 3,
              part:'activity'
            },
            total:1,
           article:""
       }
   },
   computed:{
       Aritcle(){
           return function (item) {
               const article = item.content.replace(/<img.*\/>/ig, "")
               return article
           }
       }
   },
   methods:{
       async getArticle() {
          const result = await reqArticle(`/aa/g`,this.listQuery)
           if(!result) {
               this.$message.error('Network Error')
               return
           }
           this.total = result.total
           this.articleList = result.list
           this.activeNames= []
        },
        getList() {
          this.getArticle()

        }
   },
   created(){
      this.getArticle()
   }
}
</script>
<style lang="scss">
@import '../../styles/color.scss';
.service{
    margin-top: 0.8rem;
    p{
        font-size: 0.4rem;
    }
    .floatRight{
        float: right;
    }
    .floatLeft{
        float: left;
    }
    .title{
        font-size: 0.4rem;
        color: $blue;
        margin-bottom: 0.3rem;
        display: block;
    }
    .article{
        line-height: 0.5rem;
        margin-top: 1.4rem;
        .passage{
            display: block;
            height: 400px;
            width: 550px;
            overflow: hidden;
        }
        a{
            display: inline-block;
            color:$orange;
            margin-top: 1rem;
        }
    }
    .serviceImg{
        margin:.6rem 0px 1rem 0px;
        text-align: center;

    }
}
@media (max-width: 1300px) {
    .article{
        a{
            margin-top: 0.5rem!important;
        }
    }
}
@media (max-width: 925px) {
    .article{
        p{
            height: 4.8rem;
            overflow: hidden;
        }
    }
}
@media (max-width: 803px){
    .article {
        margin-top: 0.1rem !important;
        a {
            margin-top: 0.1rem !important;
        }
    }
}
</style>
