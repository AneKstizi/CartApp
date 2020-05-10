<template>
  <div id="app">
    <navigation />
    <div class="content-wrapper">
      <div class="container">
        <vue-page-transition name="overlay-left-full">
          <router-view/>
        </vue-page-transition>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from './components/Navigation'
export default {
  components: {
    navigation
  }
}
</script>

<style>
</style>
