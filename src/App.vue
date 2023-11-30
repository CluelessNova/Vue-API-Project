<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Playfair;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import NavBar from './components/NavigationBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>