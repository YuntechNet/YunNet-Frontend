<template>
  <div id="app" class="container-fluid">
    <index/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: { Index }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
