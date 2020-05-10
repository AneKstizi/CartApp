<template>
  <div class="total__cart">
    <div class="total__cart__price">Итоговая цена: {{ totalPrice }} ₽</div>
  </div>
</template>

<script>

export default {
  computed: {
    totalPrice () {
      return this.$store.getters.TOTAL_PRICE
    }
  }
}
</script>

<style lang="scss">
  .total__cart {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #54486E;
    height: 70px;

    &__price {
      text-align: center;
      margin-top: 25px;
      color: #fff;
    }
  }
</style>
