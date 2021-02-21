<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar,
      Scroll
    }, 
    computed: {
      // 两种写法
      // ...mapGetters({length: 'cartLength'})
      ...mapGetters(['cartLength'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    height: calc(100% - 44px - 58px - 40px);
    overflow: hidden;
  }
</style>