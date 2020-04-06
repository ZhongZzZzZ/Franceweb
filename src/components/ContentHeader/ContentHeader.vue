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
  width: 100%;
  font-size: 0.5rem;
  text-align: center;
  margin: 0.4rem 0 1rem 0;
}
</style>