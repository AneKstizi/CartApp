<template>
  <div class="cart__item">
    <div class="ui-card ui-card--shadow-always ui-card--flex">
      <div class="cart__item__wrapp__img">
        <div class="cart__item__img">
          <img :src="require('@/assets/images/' + cart_item.image)" alt="">
        </div>
        <div class="cart__item__name ui-title-4">{{ cart_item.name }}</div>
        <div class="cart__item__descr ui-text-small">{{ cart_item.descr }}</div>
        <div class="cart__item__price ui-text-regular">{{ cart_item.price }}₽</div>
      </div>
      <div class="wrapp__button">
        <button class="button button--round button-success" @click="decrement">-</button>
          <div class="cart__item__quantity">{{ cart_item.quantity }}</div>
        <button class="button button--round button-success" @click="increment">+</button>
      </div>
      <button class="button button--large button--tall" @click="deleteCartItem">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart_item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteCartItem () {
      this.$emit('deleteCartItem')
    },
    increment () {
      this.$emit('increment')
    },
    decrement () {
      this.$emit('decrement')
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart__item {
    margin-bottom: 15px;
    padding-bottom: 70px;
    &__descr {
      margin: 10px 0;
    }
    &__quantity {
      margin: 5px 10px;
    }
  }

  .ui-card {
    &--flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .wrapp__button {
    display: flex;
  }

  .button--tall {
    background-color: rgb(251, 21, 21);
  }
</style>
