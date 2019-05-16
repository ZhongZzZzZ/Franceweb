<template>
  <div class="contact-container">
    <div class="contact-content">
      <ContentHeader title="联系我们" color="#eb7a67"></ContentHeader>
      <el-row class="contact-info">
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="18">
          <el-col class="contact contact-store" :xs="24" :span="12">
            <div class="grid-content bg-purple">
              <div><i class="iconfont iconlocation"></i></div>
              <h2>OUR STORE</h2>
              <p>8 The Green #4638</p>
              <p>Dover, DE, 19901</p>
              <p>flowers@mockingbot.com | Tel. 123-456-7890</p>
              <a href="">View Map ></a>
            </div>
          </el-col>
          <div class="lineY hidden-xs-only"></div>
          <hr class="lineX hidden-sm-and-up">
          <el-col class="contact contact-time" :xs="24" :span="12">
            <div class="grid-content bg-purple">
               <div><i class="iconfont icontime"></i></div>
                <h2>OPENING HOURS</h2>
                <p>Monday - Friday: 11.00 - 18.30</p>
                <p>Saturday: 11.00 - 17.00</p>
                <p>Sunday: 12.30 - 16.30</p>
            </div>
          </el-col>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
      </el-row>
    </div>
    <contact-form></contact-form>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer/Footer'
import ContactForm from './ContactForm/ContactForm.vue'
import ContentHeader from '../../components/ContentHeader/ContentHeader.vue'
export default {
  components:{
      Footer,
      ContactForm,
      ContentHeader
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../styles/color.scss';
.contact-container{
  overflow: hidden;
  .contact-content{
    .contact-info{
      text-align: center;
      position: relative;
      .contact{
        >div{
          overflow: hidden;
          i{
          color: $orange;
          font-size: 50px;
          font-weight: bold;
        }
        h2{
          margin: 1rem 0 .6rem;
          font-size: 32px;
          color:#294057;
        }
        P{
          margin-top: .6rem;
          color:#101010;
          font-size: 16px;
        }
        a{
          color: $orange;
          font-size: 20px;
          margin: 0.6rem 0;
          display: block;
        }
        }
      }
      .lineY{
        height: 100%;
        width: .02rem;
        background-color: $orange;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%)
      }
      .lineX{
        width: 100%;
        height: .02rem;
        background-color: $orange;
        margin-bottom: 0.6rem;
      }
    }
  }
}
</style>