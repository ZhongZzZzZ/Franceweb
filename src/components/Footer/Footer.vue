<template>
  <div class="footer" ref="footer">
    <div class="linkfooter">
      <ul class="socialList">
        <li><a href="javascript:;" ><i class="iconfont iconFacebook iconSize" ></i></a></li>
        <li><a href="javascript:;" ><i class="iconfont icontuite iconSize" ></i></a></li>
        <li><a href="javascript:;" ><i class="iconfont iconyoutube iconSize" ></i></a></li>
        <li><a href="javascript:;" ><i class="iconfont iconpinterest iconSize" ></i></a></li>
        <li><a href="javascript:;" ><i class="iconfont iconinstagram iconSize" ></i></a></li>
      </ul>
    </div>
    <div class="infofooter">
      <div class="infoDetails">
      <img src="../../assets/footerImg.png">
      <p>Disigner,ZBQ 19901</p>
      <p>13715965769</p>
      <p style="padding:30px 0 30px 0"><span class="iconfont iconcopyright">2019&nbsp;&nbsp;AECF</span></p>
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
  position:relative;
  left:0;
  overflow: hidden;
  .linkfooter{
    height: 2rem;
    background-color: $blue;
    text-align: center;
  }
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
  .socialList li{
    display: inline-block;
    margin-left: 0.8rem;
  }
  .iconSize{
    font-size: 0.7rem;
    white-space: nowrap;
    color: #fff;
    line-height: 100px;
  }
}
@media (max-width: 768px) {
  .iconSize {
    font-size: 0.5rem!important;
  }
}
</style>