<template>
  <div>
    <association></association>
    <members></members>
  </div>
</template>

<script>
import Association from './Association/Association.vue'
import Members from './Members/Members.vue'
export default {
  components:{
    Association,
    Members
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