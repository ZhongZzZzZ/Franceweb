<template>
  <div class="container">
    <div class="content">
      <h1>公益服务</h1>
        <el-row >
          <div class="service">
            <el-col :span="3">&nbsp;</el-col>
            <el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18">
              <div>
                <h2 >Maecenas porttitor vulputate dapibus Suspendisse tempor turpis</h2>
                <p>Feb 21,2017</p>
                <el-image :src="src" class="serviceImg">
                  <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <!--用空格制造间隔-->
            <el-col :xs="4" :sm="3" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
            <el-col :xs="18" :sm="10" :md="9" :lg="8" :xl="8">
              <div class="article">
                <p class="passage">
                  Maecenas porttitor vulputate dapibus Suspendisse tempor turpis
                  neque, vel gravida lorem luctus ut Nam augue velit, commodo in
                  laoreet in. sollicitudin nec felis. Praesent ornare blandit est ve
                  pellentesque Aliquam non vulputate ante Donec commodo metus
                  sed mauris dictum feugiat Vestibulum pretium mi eget velit
                  pulvinar ultricies nec non est. Aenean eu consectetur mi Integer
                  euismod, turpis ac dapibus feugiat, neque metus volutpat diam,
                  sed suscipit lorem neque vitae orci. Ut non pulvinar enim. Sed eget
                  massa in velit sagittis pulvinar. Suspendisse ac orci dolor
                </p>
                <a href="javascript:;">Read More></a>
              </div>
            </el-col>
          </div>
          <div class="service">
            <el-col  :lg="2" :md="2" style="float: left">&nbsp;</el-col>
            <!--右浮占位栅格-->
            <el-col :span="3" style="float: right;">&nbsp;</el-col>
            <el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18" style="float: right;">
              <div >
                <h2 >Maecenas porttitor vulputate dapibus Suspendisse tempor turpis</h2>
                <p>Feb 21,2017</p>
                <el-image :src="src2" class="serviceImg">
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
                    <p class="passage" style="text-align: left">
                    Maecenas porttitor vulputate dapibus Suspendisse tempor turpis
                    neque, vel gravida lorem luctus ut Nam augue velit, commodo in
                    laoreet in. sollicitudin nec felis. Praesent ornare blandit est ve
                    pellentesque Aliquam non vulputate ante Donec commodo metus
                    sed mauris dictum feugiat Vestibulum pretium mi eget velit
                    pulvinar ultricies nec non est. Aenean eu consectetur mi Integer
                    euismod, turpis ac dapibus feugiat, neque metus volutpat diam,
                    sed suscipit lorem neque vitae orci. Ut non pulvinar enim. Sed eget
                    massa in velit sagittis pulvinar. Suspendisse ac orci dolor
                    </p>
                    <a href="javascript:;">Read More></a>
                </div>
            </el-col>
          </div>
          <div class="service">
            <el-col :span="3">&nbsp;</el-col>
            <el-col :xl="8" :lg="9" :md="8" :sm="7" :xs="18">
              <div>
                <h2 >Maecenas porttitor vulputate dapibus Suspendisse tempor turpis</h2>
                <p>Feb 21,2017</p>
                <el-image :src="src" class="serviceImg">
                  <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <!--用空格制造间隔-->
            <el-col :xs="4" :sm="3" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
            <el-col :xs="18" :sm="10" :md="9" :lg="8" :xl="8">
              <div class="article">
                <p class="passage">
                  Maecenas porttitor vulputate dapibus Suspendisse tempor turpis
                  neque, vel gravida lorem luctus ut Nam augue velit, commodo in
                  laoreet in. sollicitudin nec felis. Praesent ornare blandit est ve
                  pellentesque Aliquam non vulputate ante Donec commodo metus
                  sed mauris dictum feugiat Vestibulum pretium mi eget velit
                  pulvinar ultricies nec non est. Aenean eu consectetur mi Integer
                  euismod, turpis ac dapibus feugiat, neque metus volutpat diam,
                  sed suscipit lorem neque vitae orci. Ut non pulvinar enim. Sed eget
                  massa in velit sagittis pulvinar. Suspendisse ac orci dolor
                </p>
                <a href="javascript:;">Read More></a>
              </div>
            </el-col>
          </div>
        </el-row>
            <el-pagination

                    background
                    :page-size="20"
                    :pager-count="5"
                    layout="prev, pager, next"
                    :total="1000" class="pageSelect">
            </el-pagination>
      </div>
    <Footer></Footer>
    </div>
</template>

<script>

import "../../styles/color.scss"
import Footer from '../../components/Footer/Footer'
export default {
  components:{
      Footer
  },
  props:{},
  data(){
    return {
        src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        src2:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1557670229&di=d2f9e181946f6c809ef05ef801832f39&src=http://uploads.5068.com/allimg/1712/144-1G2091Z026.jpg"
    }
  },
  watch:{},
  computed:{

  },
  methods:{},
  created(){},
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/color.scss';
p{
  font-size: 0.4rem;
}
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
    .service{
      margin-top: 0.8rem;
      border-bottom: $orange solid 1px;
      .Left{
        float: right;
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
  .serviceImg{
    margin:30px 0px 50px 0px;

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
.article{
  margin-top: 0.1rem!important;
  a{
    margin-top: 0.1rem!important;
  }
}
}
</style>