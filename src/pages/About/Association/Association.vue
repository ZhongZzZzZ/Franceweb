<template>
  <div class="association-container">
    <ContentHeader title="联谊会介绍" color="#000"></ContentHeader>
    <div class="association-content">
      <img src="@/assets/法国东部华人联谊会(ACEF)简介1118.png" alt="">
  <!--     <div class="association-info">
        <h1>ACEF协会介绍</h1>
        <p>1, 画面简单大方, 有中法文化气氛.<br>2, 颜色 着重 蓝红白 (三色是法国国旗的颜色, 红色也是中国国旗的颜色 )</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import ContentHeader  from '@/components/ContentHeader/ContentHeader'
export default {
  components:{
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
.association-container{
  padding: 0 1rem;
  >h1{
    margin-bottom: 1rem;
  }
  .association-content{
   width: 20rem;
   margin: 0 auto;
    text-align: center;
    img{
      width: 100%;
    }
   /*  .association-info{
      text-align: center;
      p{
        padding-top: 4rem;
        width: 12rem;
      }
    } */
    
  }
}
</style>