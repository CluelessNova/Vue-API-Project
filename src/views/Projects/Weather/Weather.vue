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
        <div class="inputFormItem">
            <Button @click="fetchData" type="button" label="Search" :loading="isLoading" icon="pi pi-search"></Button>
        </div>
    </div>

    <div class="errorLoadDiv" v-if="!isloading && errorLoad">
        <h2>Looks like there was an error and nothing was found</h2>
        <h3> {{ errorMessage }}</h3>
    </div>
    
    <div v-if="weatherForecast && !isLoading">
        <div id="location" class="weatherResults">
            <!-- City, State/Region, Country -->
            <h2>
                {{ weatherForecast.location.name }}, {{ weatherForecast.location.region }}, {{
                    weatherForecast.location.country
                }}
            </h2>
        </div>
        <div id="currentWeather" class="weatherResults">
            <!-- Temp and feelslike -->
            <div id="tempurature">
                Tempurature: {{ weatherForecast.current.temp_f }}°F but feels like {{
                    weatherForecast.current.feelslike_f
                }}°F
            </div>
            <!-- Humidity -->
            <div id="humidity">
                Humidity: {{ weatherForecast.current.humidity }}
            </div>
            <!-- Condition icon -->
            <div class="image">
                <div> <img :src="weatherForecast.current.condition.icon"> </div>
                <div>{{ weatherForecast.current.condition.text }}</div>
            </div>

            <!-- Windspeed and direction -->
            <div id="wind" class="weatherResults">
                Windspeed: {{ weatherForecast.current.wind_mph }} mph - {{ weatherForecast.current.wind_dir }}
            </div>
        </div>

        <hr class="divider" id="weatherDivider">

        <div id="weatherForecast">
            <h2 class="titleWeather">3-Day Forecast</h2>
            <div id="forecastDiv">
                <div v-for="weatherDay in weatherForecast.forecast.forecastday" 
                id="weatherDiv" 
                >
                    <!-- Date -->
                    <h3> {{ weatherDay.date }}</h3>

                    <!-- Max Temp -->
                    <p> Max Temp: {{ weatherDay.day.maxtemp_f }}°F</p>

                    <!-- Min Temp -->
                    <p> Min Temp: {{ weatherDay.day.mintemp_f }}°F</p>

                    <!-- Condition and icon -->
                    <div class="image">
                        <div> <img :src="weatherDay.day.condition.icon"></div>
                        <p> {{ weatherDay.day.condition.text }}</p>
                    </div>

                    <!-- Chance of rain rain -->
                    <p> Chance of rain: {{ weatherDay.day.daily_chance_of_rain }}%</p>

                    <hr class="divider" id="forecastDivider">

                    <!-- Sunrise -->
                    <p> Sunrise: {{ weatherDay.astro.sunrise }}</p>

                    <!-- Sunset -->
                    <p> Sunset: {{ weatherDay.astro.sunset }}</p>

                    <!-- Moon phase -->
                    <p> {{ weatherDay.astro.moon_phase }}</p>
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
        </div>
    </div>    
</div>
</template>

<script src="./Weather.ts" lang="ts"></script>
<style src="./Weather.css"></style>
