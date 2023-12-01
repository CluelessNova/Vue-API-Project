<template>
  <h1>Deal Calculator</h1>
  <h5>*Images are from sandbox and not real data/companies</h5>

  <div class="slideshow-container">    
      <div v-for="(slide, index) in slides" :key="index" class="mySlides fade" v-show="slideIndex === index">
        <div class="text">{{ slide.caption }}</div>
        <img :src="slide.src" style="width:100%">
        <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
  <br>

  <div style="text-align:center">
      <span v-for="(dot, index) in slides.length" :key="index" class="dot" @click="currentSlide(index + 1)"></span>
  </div>
</template>

<script lang="ts" src="./DealCalc.ts"></script>
<style src="./DealCalc.css"></style>
