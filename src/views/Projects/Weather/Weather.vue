<template>
    <div id="allContent">

    <div class="flex align-items-center justify-content-center">
        <div class="m-2"><h1 class="">Forecast Search</h1></div>
        <div class="m-2">
            <Button v-tooltip="'More information'" class="center-icon" icon="pi pi-question" aria-label="Question" severity="info" rounded outlined @click="showDialogHelp = true"></Button>
        </div>
        <Dialog v-model:visible="showDialogHelp" modal header="Weather API" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <h3 class="font-medium">What is this</h3>
            <p>
                Weather Forecast API that utilizes a free API from <a v-tooltip.top="'Link to website'" class="rapidApi_link" href="https://rapidapi.com/hub" target="_blank">RapidAPI</a> and 
                displays the data for the current and future forecasts. This API takes in a location as a parameter and gathers the conditions for the day as 
                well as other information such as longitude and latitude, UV strength, air pressure, and more that is not currently being displayed. The API is 
                on a backend server hosted on AWS and was developed using C#. The API is called using a GET request and the data is returned in JSON format.
            </p>
            <br>
            <h3 class="font-medium">How to use</h3>
            <p>
                Enter a location or zipcode in the search bar and click the search button or press enter. When entering a location name, make sure you are percise with the name
                otherwise you may not get the location you want. The weather forecast will populate with the current conditions and the forecast for the next 3 days.
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
        <Card class="w-11 md:w-9 xl:w-5 m-auto p-4 shadow-4 border-round-xl surface-300">
            <template #header>
                 <h2>
                    {{ weatherForecast.location.name }}, {{ weatherForecast.location.region }}, {{ weatherForecast.location.country }}
                </h2>
            </template>
            <template #content>
                <p>
                    <span class="font-medium underline">Tempurature:</span> {{ weatherForecast.current.temp_f }}°F ({{ weatherForecast.current.temp_c }}°C) but feels like {{ weatherForecast.current.feelslike_f }}°F ({{ weatherForecast.current.feelslike_c }}°C)
                </p>
                <p>
                    <span class="font-medium underline">Humidity:</span> {{ weatherForecast.current.humidity }}%
                </p>
                <div class="flex justify-content-center align-items-center">
                    <div> <img :src="weatherForecast.current.condition.icon"> </div>
                    <div class="font-bold">{{ weatherForecast.current.condition.text }} </div>
                </div>
                <p> 
                    <span class="font-medium underline">Windspeed:</span> {{ weatherForecast.current.wind_mph }} mph ({{ weatherForecast.current.wind_kph }} kph) - {{ weatherForecast.current.wind_dir }}
                </p>
                <br>
                <Accordion>
                    <AccordionTab header="Hourly Forecast">
                        <div class="flex flex-row overflow-x-auto">
                            <div class="border-1 border-round-sm m-2 p-2 surface-300" v-for="forecast in weatherHourly" >
                                <p class="underline font-bold">{{ forecast.time }} </p>
                                <p> <span class="font-medium underline">Tempurature:</span> {{ forecast.temp_f }}°F  ({{ forecast.temp_c }}°C)</p>
                                <p> <span class="font-medium underline">Feels like:</span> {{ forecast.feelslike_f }}°F ({{ forecast.feelslike_c }}°C) </p>
                                <div class="flex justify-content-center align-items-center m-3 xl:mx-6">
                                    <div> <img :src="forecast.condition.icon"></div>
                                    <p class="font-bold"> {{ forecast.condition.text }} </p>
                                </div>
                                <p> <span class="font-medium underline">Wind:</span> {{ forecast.wind_mph }} mph ({{ forecast.wind_kph }} kph) - {{ forecast.wind_dir }} </p>
                                <p> <span class="font-medium underline">Chance of rain:</span> {{ forecast.chance_of_rain }}% </p>
                                <p> <span class="font-medium underline">Precipitation amount:</span> {{ forecast.precip_in }}" </p>
                                <p> <span class="font-medium underline">Chance of snow:</span> {{ forecast.chance_of_snow }}% </p>
                            </div>
                        </div>
                    </AccordionTab>
                </Accordion>
            </template>
        </Card>

        <Card class="mx-auto my-4 lg:w-9 w-10 shadow-4 border-round-xl surface-300">
            <template #header>
                <h2 class="bg-gray-400 border-round-top-xl">3 Day Forecast</h2>
            </template>
            <template #content>
                <div class="flex flex-wrap justify-content-around">
                    <Card class="lg:w-3 sm:w-3 w-10 m-4 shadow-6 border-round-3xl surface-200" v-for="weatherDay in weatherForecast.forecast.forecastday">
                        <template #header> <h3 class="font-bold"> {{  weatherDay.date }} </h3> </template>
                        <template #content>
                            <p> <span class="font-medium underline">Max Temp:</span> {{ weatherDay.day.maxtemp_f }}°F ({{ weatherDay.day.maxtemp_c }}°C)</p>
                            <p> <span class="font-medium underline">Min Temp:</span> {{ weatherDay.day.mintemp_f }}°F ({{ weatherDay.day.mintemp_c }}°C)</p>
                            <div class="flex justify-content-center align-items-center">
                                <div> <img :src="weatherDay.day.condition.icon"></div>
                                <p class="font-bold"> {{ weatherDay.day.condition.text }} </p>
                            </div>
                            <p> <span class="font-medium underline">Chance of rain:</span> {{ weatherDay.day.daily_chance_of_rain }}% </p>
                            <p> <span class="font-medium underline">Chance of snow:</span> {{ weatherDay.day.daily_chance_of_snow }}% </p>
                            <Divider class="my-3"></Divider>
                            <p> <span class="font-medium underline">Sunrise:</span> {{ weatherDay.astro.sunrise }} </p>
                            <p> <span class="font-medium underline">Sunset:</span> {{ weatherDay.astro.sunset }} </p>
                            <p class="font-medium"> {{ weatherDay.astro.moon_phase }} </p>
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
