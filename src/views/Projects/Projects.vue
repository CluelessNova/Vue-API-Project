<template>
    <projects-nav-bar></projects-nav-bar>
    <div class="container">
        <div class="content-title">
            <h1>I have worked on different projects for both companies and for myself</h1>
        </div>
        <div class="content-desc">
            <p class="desc">My focus is back-end development but I have practiced and have some experience with front-end work.</p>
            <p class="desc">I have worked on APIs, algorithm design, database managment, and security</p>
            <p class="desc">Some front-end work I have worked on is with frameworks such as Blazor, raw HTML/CSS, and Vue.js</p>
        </div>
        <div class="content-proj">
            <div class="proj-desc">
                <h2>Weather API</h2>
                <p class="desc">Basic weather forecast API that takes in a location and will display the current and 3-day forecast.</p>
                <p class="desc">Free API from <a class="rapidApi_link" href="https://rapidapi.com/hub" target="_blank">RapidAPI</a> 
                    that takes in paramters and exports the data into a Json file. The file is then parsed and data is shown in a comprehensive
                    view for the user.
                </p>
            </div>
            <div class="proj-desc">
                <h2>Movie API</h2>
                <p class="desc">Baisc movie lookup API that takes in a movie name and will display movies with those names.</p>
                <p class="desc">Free API from <a class="rapidApi_link" href="https://rapidapi.com/hub" target="_blank">RapidAPI</a> 
                    that takes in paramters and exports the data into a Json file. The file is then parsed and data is shown in a comprehensive
                    view for the user.
                </p>
            </div>
            <div class="proj-desc">
                <h2>Opportunity Deal Calculator</h2>
                <p class="desc">Web Application for calculating company's possible opportunity deals.</p>
                <p class="desc">UI framework built with Blazor and back-end designed in C#. 
                    Inputs and calculations tailored for company's needs and database 
                    designed for data collecion and consistency between deals.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    padding: 2em;
}

.desc {
    font-size: 1.25rem;
    padding: .25rem;
}

.content-proj {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.proj-desc {
    /* border: 1px solid black; */
    width: 30vw;
    padding: 1em;
}

.rapidApi_link {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    transition: .2s;
}

.rapidApi_link:hover {
    color: #eb3361;
}
</style>

<script lang="ts">
import ProjectsNavBar from '@/components/ProjectsNavBar.vue';

export default {
    components: {
        ProjectsNavBar
    }
}
</script>