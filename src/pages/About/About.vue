<template>
  <div>
    <association></association>
    <members></members>
    <Footer></Footer>
  </div>
</template>

<script>
import Association from './Association/Association.vue'
import Members from './Members/Members.vue'
import Footer from '../../components/Footer/Footer'
export default {
  components:{
    Association,
    Members,
    Footer,
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
<style lang="scss" scoped>

</style>