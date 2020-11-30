<template>
  <div id="app">
    <minijeux />
  </div>
</template>

<script>
import Minijeux from './components/Minijeux.vue'

export default {
  name: 'App',
  components: {
    Minijeux
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
