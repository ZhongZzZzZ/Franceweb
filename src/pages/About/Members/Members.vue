<template>
  <div class="members-container">
    <ContentHeader title="社团成员介绍" color="#000"></ContentHeader>
    <div class="members-content">
      <div class="members" v-for="(item, index) in members" :key="index">
        <img src="../../../assets/timg.jpg" alt="">
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader  from '../../../components/ContentHeader/ContentHeader'
export default {
  components:{
    ContentHeader
  },
  props:{},
  data(){
    return {
      members:['主席','主席','主席','主席','主席','主席','主席','主席','主席',]
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
.members-container{
  >h1{
    margin-bottom: 1.5rem;
  }
  .members-content{
    text-align: center;
    padding: 0 7rem;
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 5rem);
    grid-gap: 1rem 1rem;
    .members{
      img{
        width: 4rem;
        height: 4rem;
      }
    }
  }
}
</style>