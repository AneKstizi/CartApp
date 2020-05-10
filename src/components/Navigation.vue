<template>
  <div class="navbar navbar--gray">
    <div class="container">
      <div class="navbar-content"><router-link class="header-logo ui-title-4" to="/">Shop</router-link>
        <div class="navbar-list__wrapper">
          <ul class="navbar-list">
            <router-link to="/cart">
              <li class="navbar-item link--flex">
                <img class="navbar__cart__img" src="../assets/cart-img.svg" alt="">
                <div class="count__cart">{{ CART.length }}</div>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    CART () {
      return this.$store.getters.CART
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    &--gray {
     background-color: #54486E;
    }

    &__cart__img {
      margin-right: 20px;
      width: 40px;
    }
  }

  .header-logo {
    color: #fff;
  }

  .link--flex {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .count__cart {
    background: rgb(236, 76, 76);
    position: absolute;
    bottom: 0;
    right: 8px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    padding: 1px 1px 0  0;
  }
</style>
