<template>
  <div id="aboutMe">
    <div id="aboutMe-container">
      <h1 class="aboutMe-content" id="myName">Hello, I am Jake Levinsky</h1>
      <h1 class="aboutMe-content" id="myDescription">
        A back-end focused software engineer building APIs and server-side applicaitons
        <br>
        <br>
        Experience with front-end development and web application development
      </h1>
    </div>
  </div>

  <div>
    
  </div>
</template>

<style>
.aboutMe-container {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.aboutMe-content {
  margin: 1 auto;
  /* border: 1px solid black; */
}

#myName {
  font-size: 3em;
}

#myDescription {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

#aboutMe {
  display:flex;
  justify-content: space-around;
  /* border: 1px solid black; */
}
</style>

<script lang="ts">

</script>