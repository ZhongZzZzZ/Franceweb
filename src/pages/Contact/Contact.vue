<template>
  <div class="contact-container">
    <div class="contact-content">
      <ContentHeader :title="$t('m.menu.contact_us')" color="#eb7a67"></ContentHeader>
      <div class="contact-info">
          <div class="contact contact-store">
            <div class="grid-content bg-purple">
              <div><i class="iconfont iconlocation"></i></div>
              <h2>OUR INFO</h2>
              <p>18B,rue du noyeu</p>
              <p>70400 vyans le val,France</p>
              <p>acef@orange.fr | Tel. (33)06 18 03 19 38</p>
              <a href="http://www.google.cn/maps/place/70400+Vyans-le-Val,+%E6%B3%95%E5%9B%BD/@47.5495234,6.7699024,152m/data=!3m1!1e3!4m5!3m4!1s0x479215e1e68186ed:0x6c26997218c11c95!8m2!3d47.549345!4d6.766077">View Map ></a>
            </div>
          </div>
      </div>
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
      display: flex;
      width: 100%;
      justify-content: space-around;
      .contact{
        >div{
          overflow: hidden;
          i{
          color: $orange;
          font-size: 1rem;
          font-weight: bold;
        }
        h2{
          margin: 1rem 0 .6rem;
          font-size: .64rem;
          color:#294057;
        }
        P{
          margin-top: .6rem;
          color:#101010;
          font-size: .32rem;
        }
        a{
          color: $orange;
          font-size: .4rem;
          margin: 0.6rem 0;
          display: block;
        }
        }
      }
    }
  }
}
</style>