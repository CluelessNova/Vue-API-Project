<template>
  <div id="aboutMe">
    <div id="aboutMe-container">
      <div id="changingName">
        <transition name="fade" mode="out-in">
        <h1 class="text-4xl lg:text-7xl m-4"><span :key="displayText" style="font-weight: bold;">{{ this.displayText }}</span> Jake Levinsky</h1>
        </transition>
      </div>
      <h1 class="aboutMe-content" id="myDescription">
        <p id="myDescription-first" class="text-2xl md:text-4xl xl:text-5xl"></p>
        <br>
        <br>
        <p id="myDescription-second" class="text-2xl md:text-4xl xl:text-5xl"></p>
      </h1>
    </div>
  </div>
</template>

<style src="./HomeView.css"></style>
<script src="./HomeView.ts"></script>