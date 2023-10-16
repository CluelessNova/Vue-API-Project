<template>
    <div class="nav-container">
      <div class="nav-me">
        <img id="myPfP" class="header-me" src="../../public/JakePfP.jpg">
        <router-link id="contactLink" :to="{ name: 'contact' }">
        <h3 class="header-me">Jake Levinsky</h3>
        </router-link>
      </div>
      <div class="nav-content">
          <a class="nav-link"><router-link :to="{ name: 'home' }">Home</router-link></a> |
          <a class="nav-link"><router-link :to="{ name: 'about' }">About</router-link></a> |
          <a class="nav-link"><router-link :to="{ name: 'contact' }">Contact</router-link></a> |
          <a class="nav-link"><router-link :to="{ name: 'projects' }">My Projects</router-link></a>
        </div>
      </div>
</template>

<style>
.nav-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.nav-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.nav-link {
  padding: 30px;
  font-size: 1em;
}

.nav-link a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-link a.router-link-exact-active {
  color: #42b983;
}

.nav-me {
  display: flex;
  align-items: center;
}

.header-me {
  margin: 5px;
}

#myPfP {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  border: 1px black solid;
}

#contactLink {
  text-decoration: none;
  color: black;
}
</style>