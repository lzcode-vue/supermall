<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default {
    name: 'GoodsList',
    components: { 
      GoodsListItem 
    },
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    /* 根据元素宽度布局，不会全部挤在一行显示 */
    flex-wrap: wrap;
    /* 元素空白部分均等分 */
    justify-content: space-evenly;
  }
</style>