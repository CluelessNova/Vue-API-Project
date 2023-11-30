<template>
    <div id="allContent">
    <h1 class="titleWeather">What is the weather?</h1>
    <div id="inputForm" class="formGroup field">
        <div class="inputFormItem">
        <label id="labelField" for="townSearchField">Enter town: </label>
        </div>
        <div class="inputFormItem">
        <input type="text" placeholder="ex: Miami" v-model="townSearch" v-on:keyup.enter="fetchData" id="inputSearch"
            name="townSearchField">    
        </div>
        <div class="inputFormItem">
        <button @click="fetchData" id="searchButton">Enter</button>
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
<!-- 
        <div id="hourlyForecastDiv">
            <div id="hourlyForecast" v-for="(hourly, index) in filteredDateTime" :key="index">
                <h4> {{ timeOnly(hourly.time) }}</h4>

                <p>{{ hourly.temp_f }}</p>
                <p>{{ hourly.condition.text }}</p>
                <p>{{ hourly.humidity }}</p>
                <p>{{ hourly.chance_of_rain }}%</p>
            </div>
        </div> -->

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
