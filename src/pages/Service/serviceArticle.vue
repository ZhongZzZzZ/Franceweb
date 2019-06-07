<template>
    <!--<el-row >-->
        <!--<div class="service" v-for="(item,index) in articleList" :key="index">-->
            <!--<el-col  :lg="2" :md="2"  v-show="index % 2 ==1?true:false" class="floatLeft">&nbsp;</el-col>-->
            <!--<el-col :span="3" v-show="index % 2 ==0?true:false" >&nbsp;</el-col>-->
            <!--&lt;!&ndash;右浮占位栅格&ndash;&gt;-->
            <!--<el-col :span="3"  v-show="index % 2 ==1?true:false" class="floatRight">&nbsp;</el-col>-->
            <!--<el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18"  :class="index % 2 ==1?'floatRight':''">-->

                <!--<div >-->
                    <!--<h2 >{{item.title}}</h2>-->
                    <!--<p>{{item.time}}</p>-->
                    <!--<el-image src="" class="serviceImg">-->
                        <!--&lt;!&ndash;<el-image :src="item.poster" class="serviceImg">&ndash;&gt;-->
                        <!--<div slot="placeholder" class="image-slot">-->
                            <!--加载中<span class="dot">...</span>-->
                        <!--</div>-->
                    <!--</el-image>-->
                <!--</div>-->
            <!--</el-col>-->
            <!--&lt;!&ndash;用空格制造间隔&ndash;&gt;-->
            <!--<el-col :xs="4" :sm="3" :md="1" :lg="1" >&nbsp;</el-col>-->
            <!--<el-col :xs="18" :sm="10" :md="9" :lg="8" :xl="8">-->
                <!--<div class="article">-->
                    <!--<p class="passage" >-->
                        <!--{{item.description}}-->
                    <!--</p>-->
                    <!--<a href="javascript:;">Read More></a>-->
                <!--</div>-->
            <!--</el-col>-->
        <!--</div>-->
        <!--<pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.page" :pageSize="3"  @pagination="getList" />-->
    <!--</el-row>-->
    <div class="topicarticle-container">
        <div class="topicarticle-content">
            <div class="topicarticle-topic" v-for="(item, index) in articleList" :key="index">
                <h1><router-link class="title" to="/article" tag="a" target="_blank">{{item.title}}</router-link></h1>
                <p>作者:{{item.author}}</p>
                <p style="position: absolute;right: 0.15rem;top: 1rem;">时间:{{item.displayTime}}</p>
                <router-link class="more" :to="{path:'/article',query:{ articleId : item.articleId,Id: 0 }}" tag="a" target="_blank">more</router-link>
            </div>
            <pagination style="text-align:center" v-show="total>0" :total="total" :page.sync="listQuery.currentPage" :pageSize="listQuery.pageSize"  @pagination="getList" />
        </div>
    </div>
</template>

<script>
import { reqArticle } from '@/api';
import Pagination from '@/components/Pagination/index'
export default {
    props: {
    },
    components:{
      Pagination
    },
    data() {
        return {
          activeNames:[],
            articleList:[],
              listQuery: {
                currentPage: 1,
                pageSize: 3,
                part:'review'
              },
              total:50,
        }
    },
    watch: {
    },
    computed: {},
    methods: {
      async getArticle () {
          const result = await reqArticle(`/oa/g`,this.listQuery)
          console.log(result)
          this.total = result.total
          this.articleList = result.list
          this.activeNames= []
        },
        getList() {
          this.getArticle()
        }
    },
    created() {
        this.getArticle()
    },
    mounted() {
    }

}

</script>

<style lang="scss" scoped>
@import '../../styles/color.scss';
.topicarticle-container{
    padding: 0 4rem;
    margin-bottom: 1rem;
    .topicarticle-content{
        .topicarticle-topic{
            height: 2rem;
            position:relative;
            border-bottom: 2px solid $orange;
            line-height: 0.65rem;
            padding: 0 .2rem;
            .title{
                color: #294057;
                font-size: .4rem
            }
            .more{
                float: right;
                color: $orange;
                font-size: .35rem;
            }
        }
    }
    .page{
        text-align: center;
        margin: 0.5rem 0;
    }
}
</style>
