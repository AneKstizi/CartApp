<template>
  <div class="catalog__item">
    <div class="ui-card ui-card--shadow">
      <div class="catalog__item__wrapp__img">
        <img :src="require('@/assets/images/' + product_data.image)" class="catalog__item__img">
      </div>
      <div class="catalog__item__name ui-title-4">{{ product_data.name }}</div>
      <div class="catalog__item__descr ui-text-small">{{ product_data.descr }}</div>
      <div class="catalog__item__wrapp__elements">
        <div class="catalog__item__price ui-title-4">{{ product_data.price }}₽</div>
        <button class="button button--round button-primary button--width" @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('ADD_TO_CART', this.product_data)
    }
  }
}
</script>

<style lang="scss" scoped>
  .catalog__item {
    flex-basis: 47%;
    margin-bottom: 15px;
    &__descr {
      margin: 10px 0;
    }
    &__wrapp__img {
      max-width: 400px;
      margin: 0 auto;
    }
    &__img {
      width: 100%;
      height: auto;
    }
    &__wrapp__elements {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  .button--width {
    padding: 20px;
    font-size: 16px
  }

  @media screen and (max-width: 990px) {

  }
   @media screen and (max-width: 770px) {
    .catalog__item {
      flex-basis: 100%;
    }
    .button--width  {
      text-align: center;
      font-size: 14px
    }
  }

</style>
