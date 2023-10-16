<template>
  <NavBar></NavBar>
  <router-view/>
  <!-- <footer id="footer">Test</footer> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
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