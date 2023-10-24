<template>
  <ProjectsNavBarVue></ProjectsNavBarVue>
  <h1>Deal Calculator</h1>
  <h5>*Images are from sandbox and not real data/companies</h5>

  <!-- Slideshow container -->
  <div class="slideshow-container">
    
      <!-- Loop through slides -->
      <div v-for="(slide, index) in slides" :key="index" class="mySlides fade" v-show="slideIndex === index">
        <div class="text">{{ slide.caption }}</div>
        <img :src="slide.src" style="width:100%">
        <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
      </div>


      <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
  <br>

  <!-- The dots/circles -->
  <div style="text-align:center">
      <span v-for="(dot, index) in slides.length" :key="index" class="dot" @click="currentSlide(index + 1)"></span>
  </div>
</template>

<script lang="ts" src="./DealCalc.ts"></script>
<style src="./DealCalc.css"></style>
