<template>
  <div id="aboutMe">
    <div id="aboutMe-container">
      <div id="changingName">
        <transition name="fade" mode="out-in">
        <h1 class="aboutMe-content myName"><span :key="displayText" style="font-weight: bold;">{{ this.displayText }}</span> Jake Levinsky</h1>
        </transition>
      </div>
      <h1 class="aboutMe-content" id="myDescription">
        <p id="myDescription-first"></p>
        <br>
        <br>
        <p id="myDescription-second"></p>
      </h1>
    </div>
  </div>
</template>

<style src="./HomeView.css"></style>
<script src="./HomeView.ts"></script>