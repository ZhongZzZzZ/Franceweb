<template>
  <div class="article-container">
    <div class="article-content">
      <div class="article-header">
        <h1>驻斯特拉斯堡总领事凌军出席法国东部华人联谊会五一联欢活动</h1>
          <span>作者</span>
          <span>时间</span>
      </div>
      <div class="article-info">
        <article>  2014年，来历不明的太空舰队进入了太阳系。名为“饕餮”的外星人以取悦冥河星系主神卡尔为目的，意图在地球制造死亡。地球文明正处于核前时代，目前的军事实力无法面对这场浩劫。 面对危机，华夏军方和万年前德诺星系诺言之星的指挥官杜卡奥决定建立“雄兵连”，唤醒千年以前杜卡奥散布在地球的神河基因，配之以暗合金装甲，建立一支可抵百万雄兵的超级连队。 葛小伦等人在各种途径下加入了雄兵连，同时加入的还有烈阳星主神蕾娜，斗战胜佛孙悟空等。不久，天河战役爆发，饕餮先锋的旗舰出现在天河市上空，全市沦为火海。雄兵连初次出击，在付出惨重代价后，以南海舰队的全部火力摧毁了先锋旗舰，取得了第一场胜利。 然而灾难的引线才刚刚引燃。天使文明和恶魔文明很快卷入了地球战争，天使之王凯莎在恶魔之王莫甘娜和死神卡尔的勾结下被杀，恶魔文明与饕餮文明发动了全球性的入侵，地球沦为各派势力的战场，雄兵连也在袭击中失散，华夏的土地大片沦陷，雄兵连的成员在迷茫与痛苦中逐渐蜕变。 当灾难继续，雄兵连才发现，他们抵抗的不止是外星文明，更是未知。</article>
      </div>
      <img src="http://huangchaoweb.cn/acef/img/%E9%9B%84%E5%85%B5%E8%BF%9E.jpg" alt="">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../Footer/Footer'
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
@import '../../styles/color.scss';
.article-content{
  padding: 0 6rem;
  margin-bottom: 2rem;
  .article-header{
    margin: 2rem 0;
    text-align: center;
    h1{
      color: $blue;
      font-size: .6rem;
      padding-bottom: 0.5rem;
      border-bottom: .04rem solid $blue;
      margin-bottom: 0.25rem;
    }
    span{
      margin: 0 20px;
    }
  }
  .article-info{
    text-indent: 2em;
    line-height: .6rem
  }
  img{
    width: 100%;
  }
}
</style>