<template>
  <div class="Link-container">
    <ContentHeader title="友情链接" color="#eb7a67"></ContentHeader>
    <div class="links-content">
      <div class="links" v-for="(item, index) in result" :key="index">
          <div class="demo-image__error">
            <div class="block">
              <a :href="item.link" :title="item.description" target="_blank">
              <el-image :src="item.imgPath" style="width:300px;height: 200px" :alt="item.description">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i><span>{{item.description}}</span>
                </div>
              </el-image>
              </a>
            </div>
          </div>
      </div>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
import {getFriendLink} from '@/api'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import Footer from '../../components/Footer/Footer'
export default {
  components:{
    ContentHeader,
    Footer
  },
  props:{},
  data(){
    return {
        result:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
     async getLinks(){
       this.result =  await getFriendLink(`/fl/g`)
     }
  },
  created(){
      this.getLinks()
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
  @import '@/styles/color.scss';
.Link-container{
  >h1{
    margin-bottom: 1.5rem;
    color: $orange;
  }
  .links-content{
    text-align: center;
    padding: 2rem 4.5rem;
    display: grid;
    grid-template-columns: repeat(4, 5rem);
    grid-gap: 1rem 1rem;
  }
}
</style>
