<template>
  <NavBar></NavBar>
  <router-view/>
  <!-- <footer id="footer">Test</footer> -->
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

/* #footer {
  clear: both;
  position: relative;
  height: 10px;
  margin-top: 100px;
  font-size: 1.5rem;
  color: #362a6c;
  text-align: center;
} */
</style>

<script lang="ts">
import NavBar from './components/NavigationBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>