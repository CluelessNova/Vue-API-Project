<template>
    <div class="navbar-container">
        <div class="navbar-content">
            <a class="navbar-link"><router-link :to="{ name: 'movies' }">Movies</router-link></a>
            <a class="navbar-link"><router-link :to="{ name: 'weather' }">Weather</router-link></a>
        </div>
    </div>
</template>

<style>
.navbar-container {
    /* border: 1px solid black; */
    width: 30em;
    margin-left: auto;
    margin-right: auto;
}

.navbar-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly
}

.navbar-link {
  font-size: 1.5rem;
}

.navbar-link a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.navbar-link a.router-link-exact-active {
  color: #42b983;
}

</style>