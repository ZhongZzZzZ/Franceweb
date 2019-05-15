<template>
  <div class="contact-container">
    <div class="contact-content">
      <h1 class="contact-header">联系我们</h1>
      <div class="contact-info">
        <el-col :span="12"><div class="grid-content bg-purple">store</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">open hour</div></el-col>
      </div>
    </div>
    <div class="contact-form">联系表单</div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from '../../components/Footer/Footer'
export default {
  components:{
      Footer
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

</style>