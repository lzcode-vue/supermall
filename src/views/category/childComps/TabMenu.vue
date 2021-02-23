<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
           :class="{isActive: index === currentIndex}"
           v-for="(item, index) in categories"
           :key="index"
           @click="itemClick(index)">
        {{item.title}}
      </div>
  </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: 'TabMenu',
    components: {
      Scroll 
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    props: {
      categories: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
  }
</script>

<style>
  #tab-menu{
    background-color: #f6f6f6;
    width: 100px;
    height: calc(100vh - 44px - 49px);
    box-sizing: border-box;
    overflow: hidden;
  }
  .menu-list-item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .isActive{
    background-color: #fff;
    color: var(--color-hign-text);
    font-weight: 700;
    border-left: 3px solid var(--color-high-text);
  }
</style>