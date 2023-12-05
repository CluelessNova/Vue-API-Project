<template>
    <div>
        <div class="flex align-items-center justify-content-center">
            <div class="m-2"><h1 class="">Movie Lookup</h1></div>
            <div class="m-2">
                <Button v-tooltip="'More information'" class="center-icon" icon="pi pi-question" aria-label="Question" severity="info" rounded outlined @click="showDialogHelp = true"></Button>
            </div>

            <Dialog v-model:visible="showDialogHelp" modal header="Movie API" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <h3 class="font-medium">What is this</h3>
                <p>
                    Movie Search API that utilizes a free API from <a v-tooltip.top="'Link to website'" class="rapidApi_link" href="https://rapidapi.com/hub" target="_blank">RapidAPI</a> and 
                    displays movie posters, movie name, and year the movie was released that is similar to the original search. This API takes in a name for the parameter and 
                    displays the data shown and other data such as the popularity, language, other information not displayed. The API is on a backend server hosted on 
                    AWS and was developed using C#. The API is called using a GET request and the data is returned in JSON format. The data is then parsed and displayed on the front-end using Vue.js.
                </p>
                <br>
                <h3 class="font-medium">How to use</h3>
                <p>
                    Enter a movie name in the search bar and click the search button or press enter. The movie cards will populate with the movie name, release date, and poster. If you'd like to get more information
                    about the movie, click on the movie card and it will display more information about the movie such as the production companies, rating, and genres.
                </p>
            </Dialog>
        </div>

    <div id="inputForm" class="justify-content-center flex md:flex-row flex-column p-5">
        <div class="flex flex-column md:flex-row gap-2 align-items-center">
            <label id="labelField" for="movieSearch">Enter movie name: </label>
            <InputText id="movieSearch" type="text" v-model="movieSearch" v-on:keyup.enter="searchMovie" placeholder="ex: King Kong"></InputText>
        </div>
        <div class="inputFormItem">
            <Button @click="searchMovie" type="button" label="Search" :loading="loadingMovies" icon="pi pi-search"></Button>
        </div>
    </div>
        
    <div class="errorLoadDiv" v-if="!loadingMovies && errorLoad">
        <h2>Looks like there was an error and nothing was found</h2>
        <h3> {{ errorMessage }}</h3>
    </div>

    <div class="flex flex-wrap justify-content-around" v-if="movieResults && !loadingMovies">
        <Card class="lg:w-2 md:w-4 m-4 shadow-6 border-round-3xl relative" v-for="movie in movieResults" @click="getDetails(movie.id)">
            <template #title> <p class="text-base font-bold underline"> {{ movie.title }} </p> </template>
            <template #content>
                <h4 class="font-medium"> {{ movie.release_date }} </h4>
                <img class="w-9 border-round-xl select-none" :src="movie.poster_path">
                <div class="movie-card-loader" v-if="loadingMovieId === movie.id && loadingDetails">
                    <ProgressSpinner></ProgressSpinner>
                </div>
            </template>
        </Card>

        <div v-if="showDetails" class="movie-details flex justify-content-center">
            <Card class="absolute m-4 shadow-8 border-round-3xl scalein animation-duration-400 movie-details-card animation-iteration-1 lg:w-6 xl:w-4 md:w-9 w-10" v-model="movieDetails">
                <template #title> 
                    <div class="flex">
                        <h3 class="mx-auto w-9 underline font-bold"> {{ movieDetails.title }} </h3> 
                        <Button class="center-icon absolute movie-detail-exit" v-tooltip="'Exit'" icon="pi pi-times" aria-label="Cancel" severity="secondary" text rounded @click="closeDetails"></Button>
                    </div>
                </template>
                <template #content>
                    <p class="font-medium"> Popularity Rating: {{ movieDetails.popularity }} </p>
                    <p class="font-medium">Rating: {{ movieDetails.vote_average }} </p>
                    <p class="font-medium">Votes: {{ movieDetails.vote_count }} </p>
                    <Divider class="w-9 mx-auto border-1 border-dashed"></Divider>
                    <div>
                        <h3 class="font-bold underline">Production by:</h3>
                        <p class="font-medium" v-for="company in movieDetails.production_companies"> {{ company.name }} </p>
                    </div>
                    <img class="w-6 border-round-xl" :src="movieDetails.poster_path">
                    <p class="font-medium"> {{ movieDetails.tagline }} </p>
                    <p class="font-italic"> "{{ movieDetails.overview }}" </p>
                    <br>
                    <div>
                        <h3 class="text-left underline font-medium">Genres:</h3>
                        <ul class="flex flex-column">
                            <li class="font-medium text-left" v-for="genre in movieDetails.genres">{{ genre.name }} </li>
                        </ul>
                    </div>
                    <!-- <Accordion>
                        <AccordionTab header="Genres">
                            <p class="font-medium my-2" v-for="genre in movieDetails.genres"> {{ genre.name }} </p>
                        </AccordionTab>
                    </Accordion> -->
                </template>
            </Card>
        </div>
    </div>


    <div class="loadingItems" v-if="loadingMovies">
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