<template>
    <div class="navbar-container">
      <!-- <h2>Projects</h2> <br> -->
        <div class="navbar-content">
            <a class="navbar-link"><router-link :to="{ name: 'projects' }">Overview</router-link></a> 
            <a class="navbar-link"><router-link :to="{ name: 'movies' }">Movies</router-link></a> 
            <a class="navbar-link"><router-link :to="{ name: 'weather' }">Weather</router-link></a>
            <a class="navbar-link"><router-link :to="{ name: 'dealcalc' }">Deal Calculator</router-link></a>
        </div>
    </div>
</template>

<style>
.navbar-container {
    /* border: 1px solid black; */
    width: 40em;
    margin-left: auto;
    margin-right: auto;
    color: #362a6c;
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
  color: #6075ec;
  text-decoration: none;
}

.navbar-link a.router-link-exact-active {
  color: #2b096c;
  padding: .25rem;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 2.5px;
}

</style>