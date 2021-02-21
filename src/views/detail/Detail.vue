<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"/>
    <scroll class="content" ref="scroll"
            @scroll='contentScroll'
            :probe-type='3'>
      <detail-swiper :top-images='topImages'/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shop='shop'/>
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'/>
      <detail-param-info :param-info='paramInfo' ref="params"/>
      <detail-comment-info :comment-info='commentInfo' ref="comment"/>
      <goods-list :goods='recommends' ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart='addToCart'/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast :message='message' :show='show'/> -->
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetaiNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getDetails, Goods, Shop, GoodsParams, getRecommend} from 'network/detail'
  import {debounce} from 'common/utils'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'
  import {mapActions} from 'vuex'
  
  // import Toast from 'components/common/toast/Toast'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
      // Toast
    },
    mixins: [itemListenerMixin, backTopMixin],
    data(){
      return {
        iid: '',
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0
        // message: '',
        // show: false
      }
    },
    created(){
      this.iid = this.$route.params.iid
      getDetails(this.iid).then(res => {
        // console.log(res)
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
        
        // this.$nextTick(() => {
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs)
        // })
      })
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    mounted(){
    },
    destroyed(){
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoad(){
        this.$refs.scroll.refresh()

        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      contentScroll(position){
        const positionY = -position.y
        let length = this.themeTopYs.length
        for(let i = 0; i < length-1; i++){
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        this.listenShowBackTop(position)
      },
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车
        // 1.
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res)
        // })
        // 2.
        this.addCart(product).then(res => {
          // this.message = res
          // this.show = true
          // setTimeout(() => {
          //   this.show = false
          //   this.message = ''
          // }, 1500)
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    /* height: calc(100% - 44px); */
    position: absolute;
    top: 44px;
    bottom: 58px;
  }
</style>