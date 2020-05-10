<template>
  <div class="wrapper__search">
    <div class="search">
      <div class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
    </div>
    <input type="text" :placeholder="placeholder" v-model.trim="search"/>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      search: this.value
    }
  },
  watch: {
    search (value) {
      this.$emit('search', value)
    }
  }
}
</script>

<style lang="scss" scoped >

  svg {
   color: #e4e4e4;
  }
/* Search */

  .wrapper__search {
    position: relative;
    margin: 0 auto;
  }

  .search {
    top: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;

    &-icon {
      height: 100%;
      padding-left: 16px;
      padding-right: 16px;
      align-items: center;
      display: flex;
    }
  }

  input {
    padding: 16px 16px 16px 56px !important;
    margin: 20px 0;
    border-radius: 30px;
    color: rgb(248, 242, 242);
    font-size: 16px;
    max-width: 550px !important;
    height: auto;
    background: #54486E !important;

    &::placeholder {
      color: rgb(248, 242, 242);
    }
  }

</style>
