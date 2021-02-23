<template>
  <div class="tab-detail">
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods-item='item'/>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default {
    name: 'TabContentDetail',
    components: { 
      GoodsListItem 
    },
    props: {
      categoryDetail: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .tab-detail{
    display: flex;
    /* 根据元素宽度布局，不会全部挤在一行显示 */
    flex-wrap: wrap;
    /* 元素空白部分均等分 */
    justify-content: space-evenly;
  }
</style>