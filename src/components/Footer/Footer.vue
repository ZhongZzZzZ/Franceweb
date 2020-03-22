<template>
  <div class="footer" ref="footer">
    <div class="infofooter">
      <div class="infoDetails">
        <img src="../../assets/footerImg.png">
        <p>法国东部华人联谊会 &nbsp;&nbsp; &nbsp;版权所有</p>
        <p style="padding:30px 0 30px 0"><span class="iconfont iconcopyright">2019&nbsp;&nbsp;ACEF</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
  },
  created(){},
  mounted(){
  }
}
</script>
<style lang="scss">
@import '../../styles/color.scss';
.footer{
  width: 100%;
  text-align: center;
  position:relative;

  left:0;
  overflow: hidden;
  .infofooter{
    background-color: #4d4d4d;
    .infoDetails{
      text-align: center;
      color: #fff;
      p{
        margin-top: .3rem;
      }
      img{
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
