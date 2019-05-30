<template>          <!--活动信息子组件-->
    <div>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-collapse v-model="activeNames" >
                    <div v-for="(item,index) in articleList" :key="index" >
                        <el-collapse-item  :title="item.title" :name="index + 1">
                            <div>{{item.description}}</div>
                            <el-col :span="8" style="margin: 8px">
                                <el-image src="" class="serviceImg">
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                </el-image>
                            </el-col>
                            <el-button type="primary" class="btn">活动报名</el-button>
                        </el-collapse-item>
                    </div>
                </el-collapse>
            </el-col>
        </el-row>
        <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.page" :pageSize="5"  @pagination="getList" />
    </div>
</template>

<script>
import { reqArticle } from '@/api';
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
              page: 1,
              limit: 5
            },
            total:50,
       }
   },
   watch:{

   },
   computed:{},
   methods:{
       async getArticle () {
          const result = await reqArticle('/data/get')
          this.articleList = result.slice(0,5)
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
.activitiy-container{
  .el-collapse-item__arrow{
    font-size: .48rem;
  }
} 
</style>