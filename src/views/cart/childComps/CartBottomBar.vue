<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="checked-button" 
                    :is-checked='isSelectedAll'
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice(){
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength(){
        return this.cartList.filter(item => item.checked).length
      },
      isSelectedAll(){
        if(this.cartList.length === 0){
          return false
        }else{
          return !this.cartList.find(item => !item.checked)
          // return !(this.cartList.filter(item => !item.checked).length)
        }
      }
    },
    methods: {
      checkClick(){
        if(this.isSelectedAll){
          this.cartList.forEach(item => item.checked = false)
        }else{
          this.cartList.forEach(item => item.checked = true)
        }
      }, 
      calcClick(){
        if(this.cartList.filter(item => item.checked).length === 0){
          this.$toast.show('请先添加商品')
        }
      }
    }
  }
</script>

<style>
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
    /* bottom: 40px; */
    line-height: 40px;
    display: flex;
    font-size: 14px;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .checked-button{
    line-height: 20px;
    margin-right: 5px;
  }
  .price{
    margin-left: 30px;
    flex: 1;
  }
  .calculate{
    width: 90px;
    background-color: orangered;
    text-align: center;
    color: #fff;
  }
</style>