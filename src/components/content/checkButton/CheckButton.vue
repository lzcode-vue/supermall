<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .check-button{
    border: 2px solid #aaa;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .check{
    border-color: #ff8198;
    background-color: #ff8198;
  }
</style>