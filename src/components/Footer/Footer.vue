<template>
  <div class="footer">
    <div class="linkfooter">linkfooter</div>
    <div class="infofooter">infofooter</div>
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
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../styles/color.scss';
.footer{
  width: 100%;
  position: absolute;
  bottom: 0;
  .linkfooter{
    height: 100px;
    background-color: $blue;
  }
  .infofooter{
    background-color: #4d4d4d;
    height: 120px;
  }
}
</style>