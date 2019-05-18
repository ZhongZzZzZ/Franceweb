<template>
  <h1 class="content-header" ref="contentHeader">{{title}}</h1>
</template>

<script>
export default {
  components:{},
  props:{
    title:String,
    color:String
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    this.$refs.contentHeader.style.color = this.color
  }
}
</script>
<style lang="scss">
.content-header{
  font-size: 0.8rem;
  text-align: center;
  margin: 1rem 0 2rem 0;
}
</style>