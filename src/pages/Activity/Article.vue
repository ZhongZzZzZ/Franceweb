<template>          <!--活动信息子组件-->
    <div>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-collapse v-model="activeNames" >
                    <div v-for="(item,index) in data" :key="index" >
                        <el-collapse-item  :title="item.title" :name="index + 1">
                            <div>{{item.description}}</div>
                            <el-col :span="8" style="margin: 8px">
                                <el-image :src="src2" class="serviceImg">
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
    </div>
</template>

<script>
import { reqArticle } from '../../api';

export default {
   components:{

   },
   props:{
       pageSize:{          //父组件传过来的参数，pageSize是一页显示数据条数
           type:Number,
           required:true,
       },
       currentPage:{        //父组件传过来的参数，当前页号
           type:Number,
           required:true,
       },
   },
   data(){
       return {
           getnews:[],         //数据总数目
           activeNames:[],
           data:[],         //渲染指定页面的数组
           src2:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1557670229&di=d2f9e181946f6c809ef05ef801832f39&src=http://uploads.5068.com/allimg/1712/144-1G2091Z026.jpg"
       }
   },
   watch:{
       getnews:{           //监视数据总数的变化，得到总数据后，将数据总条目传给父级，实现总页数计算
           handler(){
               this.$emit("totalPages",this.getnews.length);
               this.data = this.getnews.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize); //显示初始第一页的数据
           },
       },
       currentPage:{       //当触发改变当前页号事件，重新给data赋值，覆盖data数据
           handler(){
               console.log(this.currentPage);
               this.data = this.getnews.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
               this.activeNames=[]     //当改变页号事件，让所有折叠面板折叠起来
           }
       }
   },
   computed:{},
   methods:{
      /*  getItem(){      //请求数据方法
           this.$axios.get('https://api.apiopen.top/getSongPoetry',{
               params:{
                   // page:this.page,
               }
           }).then(res=>{
               return res.data.result
           }).then(res=>{
               this.getnews = res
               console.log(this.getnews)
           })
       },
 */
        async getArticle () {
          const result = await reqArticle('/data/get')
          this.getnews = result
          this.src2 = result[0].imePath
        }
   },
   created(){
      /*  this.getItem();   */       //初始化页面时候请求数据
  this.getArticle()
   },
   mounted(){}
    }
</script>
<style lang="scss">

</style>