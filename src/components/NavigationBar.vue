<template>
    <div class="nav-container">
      <div class="nav-me">
        <img id="myPfP" class="header-me" src="../assets/images/JakePfP.jpg">
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
  background-image: linear-gradient(to bottom, #cbe6ed, #f8fcf7);
  /* font-family: 'Courier New', Courier, monospace; */
  /* background: #2b3d64; */
}

.nav-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  color: #6075ec;
}

.nav-link {
  padding: 30px;
  font-size: 1em;
}

.nav-link a {
  font-weight: bold;
  color: #6075ec;
  text-decoration: none;
}

.nav-link a.router-link-exact-active {
  color: #57d52d;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 2.5px;
}

.nav-me {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.header-me {
  margin: 5px;
  font-weight: bold;
}

#myPfP {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: .15rem #6075ec solid;
  transition: .5s;
}

#myPfP:hover {
  width: 10rem;
  height: 10rem;
}

/* #myPfP:active {
  border: .15rem red solid;
} */

#contactLink {
  text-decoration: none;
  color: #6075ec;
}
</style>