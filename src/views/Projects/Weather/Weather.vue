<template>
    <div id="allContent">

    <div class="flex align-items-center justify-content-center">
        <div class="m-2"><h1 class="">Forecast Search</h1></div>
        <div class="m-2">
            <Button class="center-icon" icon="pi pi-question" aria-label="Question" severity="info" rounded outlined @click="showDialogHelp = true"></Button>
        </div>
        <Dialog v-model:visible="showDialogHelp" modal header="Weather API" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <h3>What is this</h3>
            <p>
                Weather Forecast API that utilizates a free API from <a class="rapidApi_link" href="https://rapidapi.com/hub" target="_blank">RapidAPI</a> and 
                displays the data for the current and future forecasts. This API takes in a location as a paramater and gathers the conditions for the day as 
                well as other information such as longitute and latitude, UV strength, air pressure, and more that is not currently being displayed. The API is 
                on a backend server hosted on AWS and was developed using C#.
            </p>
        </Dialog>
    </div>

    <div class="flex md:flex-row flex-column justify-content-center p-5">
        <div class="flex flex-column md:flex-row gap-2 align-items-center">
            <label id="labelField" for="movieSearch">Enter Location or Zipcode: </label>
            <InputText class="w-6" id="weatherSearch" type="text" v-model="townSearch" v-on:keyup.enter="fetchData" placeholder="ex: Miami, Florida"></InputText>
        </div>
        <div class="m-2">
            <Button @click="fetchData" type="button" label="Search" :loading="isLoading" icon="pi pi-search"></Button>
        </div>
    </div>

    <div class="errorLoadDiv" v-if="!isloading && errorLoad">
        <h2>Looks like there was an error and nothing was found</h2>
        <h3> {{ errorMessage }}</h3>
    </div>
    
    <div v-if="weatherForecast && !isLoading">
        <Card class="w-9 lg:w-4 m-auto p-4 shadow-4 border-round-xl surface-100">
            <template #header>
                 <h2>
                    {{ weatherForecast.location.name }}, {{ weatherForecast.location.region }}, {{ weatherForecast.location.country }}
                </h2>
            </template>
            <template #content>
                <p>
                    Tempurature: {{ weatherForecast.current.temp_f }}°F but feels like {{ weatherForecast.current.feelslike_f }}°F
                </p>
                <p>
                    Humidity: {{ weatherForecast.current.humidity }}
                </p>
                <div class="flex justify-content-center align-items-center">
                    <div> <img :src="weatherForecast.current.condition.icon"> </div>
                    <div>{{ weatherForecast.current.condition.text }}</div>
                </div>
                <p> 
                    Windspeed: {{ weatherForecast.current.wind_mph }} mph - {{ weatherForecast.current.wind_dir }}
                </p>
            </template>
        </Card>

        <Card class="mx-auto my-4 lg:w-9 w-10 shadow-4 border-round-xl surface-200">
            <template #header>
                <h2 class="bg-gray-400 border-round-top-xl">3 Day Forecast</h2>
            </template>
            <template #content>
                <div class="flex flex-wrap justify-content-around">
                    <Card class="lg:w-3 sm:w-3 w-10 m-4 shadow-6 border-round-3xl surface-100" v-for="weatherDay in weatherForecast.forecast.forecastday">
                        <template #header> <h3> {{  weatherDay.date }} </h3> </template>
                        <template #content>
                            <p> Max Temp: {{ weatherDay.day.maxtemp_f }}°F </p>
                            <p> Min Temp: {{ weatherDay.day.mintemp_f }}°F </p>
                            <div>
                                <div> <img :src="weatherDay.day.condition.icon"></div>
                                <p> {{ weatherDay.day.condition.text }} </p>
                            </div>
                            <p> Chance of rain: {{ weatherDay.day.daily_chance_of_rain }}% </p>
                            <Divider class="my-3"></Divider>
                            <p> Sunrise: {{ weatherDay.astro.sunrise }} </p>
                            <p> Sunset: {{ weatherDay.astro.sunset }} </p>
                            <p> {{ weatherDay.astro.moon_phase }} </p>
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
    </div>

    <div class="loadingItems" v-if="isLoading">
        <div class="spinner-container">
            <ProgressSpinner></ProgressSpinner>
        </div>
        <div>
            <div class="flex justify-content-center">
                <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            </div>
            <div class="flex flex-wrap justify-content-around">
                <Skeleton size="15rem" class="skeletonItem"></Skeleton>
                <Skeleton size="15rem" class="skeletonItem"></Skeleton>
                <Skeleton size="15rem" class="skeletonItem"></Skeleton>
            </div>
        </div>
    </div>    
</div>
</template>

<script src="./Weather.ts" lang="ts"></script>
<style src="./Weather.css"></style>
