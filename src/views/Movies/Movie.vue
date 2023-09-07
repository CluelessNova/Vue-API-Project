<template>
    <h1>Movies</h1>

    <div id="form" class="formGroup field">
        <label id="labelField" for="movieSearchField">Enter movie name: </label>
        <input type="text" placeholder="ex: King Kong" v-model="movieSearch" v-on:keyup.enter="searchMovie" id="inputSearch"
            name="movieSearchField">
        <button @click="searchMovie" id="searchButton">Enter</button>
    </div>

    <div v-if="responseAvailable == true" id="allMovies">
        <div v-for="movies in movieResults">
            <div>
                <h3>{{ movies.title }}</h3>
                <p>{{ movies.release_date }}</p>
            </div>
            <div>
                <img id="moviePoster" :src="movies.poster_path">
            </div>
        </div>
    </div>
</template>

<script src="./Movie.ts" lang="ts"></script>
<style src="./Movies.css"></style>