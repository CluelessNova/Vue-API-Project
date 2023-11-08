<template>
    <div id="allContent">
    <ProjectsNavBarVue></ProjectsNavBarVue>
    <h1>Movies</h1>

    <div id="inputForm" class="formGroup field">
        <div id="inputFormLabel" class="inputFormItem">
        <label id="labelField" for="movieSearchField">Enter movie name: </label>
        </div>
        <div class="inputFormItem">
        <input type="text" placeholder="ex: King Kong" v-model="movieSearch" v-on:keyup.enter="searchMovie" id="inputSearch" name="movieSearchField">
        </div>
        <div class="inputFormItem">
        <button @click="searchMovie" id="searchButton">Enter</button>
        </div>
    </div>

    <div class="loader" v-if="isLoading"></div>

    <div v-if="movieResults && !isLoading" id="allMovies">
        <div v-for="movies in movieResults">
            <b-card>
                <b-card-text>
                    <h3>{{ movies.title }}</h3>
                    <p>{{ movies.release_date }}</p>
                </b-card-text>
                <div>
                    <img id="moviePoster" :src="movies.poster_path">
                </div>
            </b-card>
        </div>
    </div>
    </div>
</template>

<script src="./Movie.ts" lang="ts"></script>
<style src="./Movies.css"></style>