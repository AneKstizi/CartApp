<template>
  <div class="home">
    <h1 class="home__title">Продукты</h1>
    <search
      placeholder="Поиск товара"
      :value="search"
      @search="search = $event"
    />
    <div class="wrapp__catalog">
      <catalog-item
        v-for="(product, index) in filterCatalog"
        :key="index"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from '../components/CatalogItem'
import search from '../components/Search'

export default {
  components: {
    catalogItem,
    search
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {

  },
  computed: {
    products () {
      return this.$store.getters.PRODUCTS
    },
    filterCatalog () {
      if (this.search === '') {
        return this.products
      }
      return this.products.filter(product => {
        if (product.name.toLowerCase().match(this.search.toLowerCase())) {
          return product
        }
      })
    }
  }
}
</script>

<style scoped>
  .wrapp__catalog {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .home__title {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    margin-top: 25px;
    font-size: 60px;
  }
</style>
