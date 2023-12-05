<template>
  <div id="allContent">
  <div>
    <h1 class="text-3xl lg:text-6xl">Who am I?</h1>
  </div>

  <div class=" flex flex-column lg:flex-row">
    <div class="col lg:col-6 lg:w-6">
      <h2 class="aboutme-title text-base lg:text-5xl flex justify-content-center m-2">Get to know me</h2>
      <div>
        <p class="aboutme-description text-sm xl:text-4xl">I am a <strong>software engineer</strong> that works on the <strong>back-end</strong> of web and application development.</p>
        <p class="aboutme-description text-sm xl:text-4xl">I'm an <strong>Eagle Scout</strong> since 2018 and I volunteer at my home town ambulance agency as an EMT.</p>
        <p class="aboutme-description text-sm xl:text-4xl">I am open for any opportunity to learn and expand my knowledge and experience. If you'd like to connect through my <a id="linkedIn" href="https://www.linkedin.com/in/jakelevinsky/">LinkedIn</a>, feel free to reach out. </p>
      </div>
    </div>

    <div class="col lg:col-6 lg:w-6">
      <h2 class="aboutme-title text-base lg:text-5xl flex justify-content-center m-2">Skills</h2>
      <div id="skills" class="flex flex-wrap justify-content-center">
        <div class="aboutme-skills p-3 lg:p-4 text-xs lg:text-2xl" v-for="skill in skills"> {{ skill }} </div>
      </div>
    </div>
  </div>

  <h2 class="text-base lg:text-5xl flex justify-content-center mt-5">Timeline of me</h2>
  <Timeline :value="events" align="alternate" class="lg:w-8 lg:m-auto">
    <template #content="slotProps">
      <div class="text-xs lg:text-base">
        <h3 class="">{{ slotProps.item.status }}</h3>
        <h5>{{ slotProps.item.title }} - {{ slotProps.item.subtitle }}</h5>
        <p>{{ slotProps.item.content }}</p>
      </div>
    </template>
  </Timeline>
</div>
</template>

<style src="./AboutView.css"></style>
<script lang="ts" src="./AboutView.ts"></script>