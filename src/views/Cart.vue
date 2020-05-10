<template>
  <div class="cart">
    <h1 class="cart__title">Корзина</h1>
    <cart-item
      v-for="(cart_item, index) in CART"
      :key="index"
      :cart_item="cart_item"
      @deleteCartItem="deleteCartItem(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
     />
     <total-cart />
  </div>
</template>

<script>
import cartItem from '../components/CartItem'
import totalCart from '../components/TotalCart'

export default {
  components: {
    cartItem,
    totalCart
  },
  data () {
    return {

    }
  },
  methods: {
    deleteCartItem (index) {
      this.$store.dispatch('DELETE__FROM__CART', index)
    },
    increment (index) {
      this.$store.dispatch('INCREMENT_CART_ITEM', index)
    },
    decrement (index) {
      this.$store.dispatch('DECREMENT_CART_ITEM', index)
    }
  },
  computed: {
    CART () {
      return this.$store.getters.CART
    }
  }
}
</script>

<style scoped>
  .cart__title {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    margin-top: 25px;
    font-size: 60px;
  }
</style>
