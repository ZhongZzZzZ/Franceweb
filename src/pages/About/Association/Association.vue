<template>
  <div class="association-container">
    <div class="association-content">
      <el-image :src="associationPic" lazy></el-image>
    </div>
  </div>
</template>

<script>
import {getCookies} from '@/api/cookie'
import {reqAssociationPic} from '@/api'
export default {
  components:{
  },
  props:{},
  data(){
    return {
      associationPic:''
    }
  },
  watch:{},
  computed:{},
  methods:{
    async getAssiociationPic() {
      let data = {}
      const language = getCookies('language')
      if(language === 'Chinese') {
        data = {part:'xiehuipic1'}
      } else {
        data = {part:'xiehuipic2'}
      }
      
      const result = await reqAssociationPic('img/gssoai',data)
      console.log(result);
      if(!result || result.result == 0 || result.length === 0) {

        this.$message.error('Network Error')
      } else {
        this.associationPic = result[0].url
      }
    }
  },
  created(){
    this.getAssiociationPic()
  },
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
  }
}
</style>