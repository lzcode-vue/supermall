<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories"
                @selectItem='selectItem'></tab-menu>
      <scroll id="tab-content">
        <div>
          <tab-content-category :subcategories='showSubcategory'/>
          <tab-control :titles="['综合', '新品', '销量']"
                       @tabClick='tabClick'/>
          <tab-content-detail :category-detail='showCategoryDetail'/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'
  import {tabControlMixin} from 'common/mixin'

  import TabMenu from './childComps/TabMenu.vue'
  import TabContentCategory from './childComps/TabContentCategory.vue'
  import TabContentDetail from './childComps/TabContentDetail'

  export default {
    name: "Category",
    components: {
      NavBar,
      TabMenu,
      TabContentCategory,
      TabControl,
      TabContentDetail,
      Scroll
    },
    mixins: [tabControlMixin],
    data(){
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    created(){
      this._getCategory()
    },
    computed: {
      showSubcategory(){
        if(this.currentIndex === -1){
          return {}
        }else {
          return this.categoryData[this.currentIndex].subcategories
        }
      },
      showCategoryDetail(){
        if(this.currentIndex === -1){
          return []
        }else {
          return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
        }
      }
    },
    methods: {
      _getCategory(){
        getCategory().then(res => {
          this.categories = res.data.category.list
          // console.log(res)

          for(let i = 0; i < this.categories.length; i++){
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index){
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          // console.log(res)

          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('new')
          this._getCategoryDetail('sell')
        })
      },
      _getCategoryDetail(type){
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey, type).then(res => {
          // console.log(res)

          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      selectItem(index){
        this._getSubcategories(index)
      }
    }
  }
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
  #tab-content{
    flex: 1;
    height: calc(100% - 44px -49px);
    overflow: hidden;
  }
</style>