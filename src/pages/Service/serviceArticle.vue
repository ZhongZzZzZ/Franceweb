<template>
    <el-row >
        <div class="service" v-for="(item,index) in getnews" :key="index">
            <el-col  :lg="2" :md="2"  v-show="index % 2 ==1?true:false" class="floatLeft">&nbsp;</el-col>
            <el-col :span="3" v-show="index % 2 ==0?true:false" >&nbsp;</el-col>
            <!--右浮占位栅格-->
            <el-col :span="3"  v-show="index % 2 ==1?true:false" class="floatRight">&nbsp;</el-col>
            <el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18"  :class="index % 2 ==1?'floatRight':''">

                <div >
                    <h2 >{{item.title}}</h2>
                    <p>{{item.year}}</p>
                    <el-image :src="src2" class="serviceImg">
                        <!--<el-image :src="item.poster" class="serviceImg">-->
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
                    <p class="passage" >
                        {{item.plot_simple}}
                    </p>
                    <a href="javascript:;">Read More></a>
                </div>
            </el-col>
        </div>
    </el-row>
</template>

<script>
export default {
    props: {
        pageSize: {          //父组件传过来的参数，pageSize是一页显示数据条数
            type: Number,
            required: true,
        },
        currentPage: {        //父组件传过来的参数，当前页号
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            getnews: [],         //数据总数目
            activeNames: [],
            data: [],         //渲染指定页面的数组
            src2:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1557670229&di=d2f9e181946f6c809ef05ef801832f39&src=http://uploads.5068.com/allimg/1712/144-1G2091Z026.jpg"
        }
    },
    watch: {
        getnews: {           //监视数据总数的变化，得到总数据后，将数据总条目传给父级，实现总页数计算
            handler() {
                this.$emit("totalPages", this.getnews.length);
                this.data = this.getnews.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize); //显示初始第一页的数据
            },
        },
        currentPage: {       //当触发改变当前页号事件，重新给data赋值，覆盖data数据
            handler() {
                console.log(this.currentPage);
                this.data = this.getnews.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
                this.activeNames = []     //当改变页号事件，让所有折叠面板折叠起来
            }
        }
    },
    computed: {},
    methods: {
        /* getItem() {      //请求数据方法
            this.$axios.get('https://api.apiopen.top/getSongPoetry', {
                params: {
                    // page:this.page,
                    count: 3
                }
            }).then(res => {
                return res.data.result
            }).then(res => {
                this.getnews = res
                console.log(this.getnews)
            })
        }, */
    },
    created() {
        /* this.getItem(); */
    },
    mounted() {
    }

}

</script>

<style lang="scss" scoped>
@import '../../styles/color.scss';
p{
    font-size: 0.4rem;
}
.service{
    margin-top: 0.8rem;
    border-bottom: $orange solid 1px;
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
        margin:30px 0px 50px 0px;
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
            height: 240px;
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