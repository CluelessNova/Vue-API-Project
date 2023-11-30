<template>
  <div id="aboutMe">
    <div id="aboutMe-container">
      <div id="changingName">
        <transition name="fade" mode="out-in">
        <h1 class="text-lg lg:text-7xl"><span :key="displayText" style="font-weight: bold;">{{ this.displayText }}</span> Jake Levinsky</h1>
        </transition>
      </div>
      <h1 class="aboutMe-content" id="myDescription">
        <p id="myDescription-first" class="text-base xl:text-6xl"></p>
        <br>
        <br>
        <p id="myDescription-second" class="text-base xl:text-6xl"></p>
      </h1>
    </div>
  </div>
</template>

<style src="./HomeView.css"></style>
<script src="./HomeView.ts"></script>