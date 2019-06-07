<template>          <!--活动信息子组件-->
    <div>
        <el-row>
            <!--<el-col :span="18" :offset="3">-->
                <!--<el-collapse v-model="activeNames" >-->
                    <!--<div v-for="(item,index) in articleList" :key="index" >-->
                        <!--<el-collapse-item  :title="item.title" :name="index + 1">-->
                            <!--<div>{{item.description}}</div>-->
                            <!--<el-col :span="8" style="margin: 8px">-->
                                <!--<el-image src="" class="serviceImg">-->
                                    <!--<div slot="placeholder" class="image-slot">-->
                                        <!--加载中<span class="dot">...</span>-->
                                    <!--</div>-->
                                <!--</el-image>-->
                            <!--</el-col>-->
                            <!--<el-button type="primary" class="btn">活动报名</el-button>-->
                        <!--</el-collapse-item>-->
                    <!--</div>-->
                <!--</el-collapse>-->
            <!--</el-col>-->
            <div class="service" v-for="(item,index) in articleList" :key="index">
                <el-col  :lg="2" :md="2"  v-show="index % 2 ==1 ? true: false" class="floatLeft">&nbsp;</el-col>
                <el-col :span="3" v-show="index % 2 ==0?true:false" >&nbsp;</el-col>
                <!--右浮占位栅格-->
                <el-col :span="3"  v-show="index % 2 ==1?true:false" class="floatRight">&nbsp;</el-col>
                <el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18"  :class="index % 2 ==1?'floatRight':' '">
                    <div >
                        <h2 >{{item.title}}</h2>
                        <p>{{item.displayTime}}</p>
                        <!--<el-image src="" class="serviceImg">-->
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
                        <span class="passage" v-html="item.content">
                        </span>
                        <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 1 }}" tag="a" target="_blank">Read More></router-link>
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
   props:{

   },
   data(){
       return {
           activeNames:[],
           articleList:[],
            listQuery: {
              currentPage: 1,
              pageSize: 5,
              part:'activity'
            },
            total:50,
       }
   },
   watch:{

   },
   computed:{},
   methods:{
       async getArticle () {
          const result = await reqArticle(`/aa/g`,this.listQuery)
          console.log(result)
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
   },
   mounted(){}
    }
</script>
<style lang="scss">
@import '../../styles/color.scss';
/*.activitiy-container{*/
  /*.el-collapse-item__arrow{*/
    /*font-size: .48rem;*/
  /*}*/
/*}*/
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
    h2{
        font-size: 0.4rem;
        color: $blue;
        margin-bottom: 0.3rem;
    }
    .article{
        line-height: 0.5rem;
        margin-top: 1.4rem;
        a{
            display: inline-block;
            color:$orange;
            margin-top: 2rem;
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
