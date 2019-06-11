<template>
    <div class="topicarticle-container">
        <div class="topicarticle-content">
            <div class="topicarticle-topic" v-for="(item, index) in articleList" :key="index">
                <h1 class="title">{{item.title}}</h1>
                <p>{{item.author}}</p>
                <p style="position: absolute;right: 0.15rem;top: 0.75rem;">{{item.displayTime}}</p>
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
          if(!result) {
            this.$message.error('Network Error')
            return
          }
          this.total = result.total
          this.articleList = result.list
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
            position: relative;
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
