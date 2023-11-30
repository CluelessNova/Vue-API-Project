<template>
    <div id="allContent">
        <div class="flex align-items-center justify-content-center">
            <div class="m-2"><h1 class="">Movie Lookup</h1></div>
            <div class="m-2">
                <Button class="center-icon" icon="pi pi-question" aria-label="Question" severity="info" rounded outlined @click="showDialogHelp = true"></Button>
            </div>

            <Dialog v-model:visible="showDialogHelp" modal header="Movie API" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <h3>What is this</h3>
                <p>
                    Movie Search API that utilizates a free API from <a class="rapidApi_link" href="https://rapidapi.com/hub" target="_blank">RapidAPI</a> and 
                    displays movie posters, movie name, and year the movie was released that is similar to the original search. This API takes in a name for the paramater and 
                    displays the data shown and other data such as the popularity, language, other other information not displayed. The API is on a backend server hosted on 
                    AWS and was developed using C#.
                </p>
        </Dialog>
    </div>

    <div id="inputForm" class="justify-content-center flex md:flex-row flex-column p-5">
        <div class="flex flex-column md:flex-row gap-2 align-items-center">
            <label id="labelField" for="movieSearch">Enter movie name: </label>
            <InputText id="movieSearch" type="text" v-model="movieSearch" v-on:keyup.enter="searchMovie" placeholder="ex: King Kong"></InputText>
        </div>
        <div class="inputFormItem">
            <Button @click="searchMovie" type="button" label="Search" :loading="isLoading" icon="pi pi-search"></Button>
        </div>
    </div>
        
    <div class="errorLoadDiv" v-if="!isloading && errorLoad">
        <h2>Looks like there was an error and nothing was found</h2>
        <h3> {{ errorMessage }}</h3>
    </div>

    <div v-if="movieResults && !isLoading" id="allMovies">
        <div v-for="movies in movieResults">
            <div>
                <div>
                    <h3>{{ movies.title }}</h3>
                    <p>{{ movies.release_date }}</p>
                </div>
                <div>
                    <img id="moviePoster" :src="movies.poster_path">
                </div>
            </div>
        </div>
    </div>
    <div class="loadingItems" v-if="isLoading">
        <div class="spinner-container">
            <ProgressSpinner></ProgressSpinner>
        </div>
        <div class="loading-skeletons">
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            <Skeleton size="15rem" class="skeletonItem"></Skeleton>
        </div>
    </div>    
</div>
</template>

<script src="./Movie.ts" lang="ts"></script>
<style src="./Movies.css"></style>