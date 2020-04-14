<template>
  <div id="app">
    <default-layout id="nav">
      <router-view/>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from './layout/DefaultLayout'
export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
