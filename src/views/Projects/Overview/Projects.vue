<template>
    <TabMenu :model="items" :activeIndex="activeIndex" @tab-change="onTabChange" class="centered-tabs"></TabMenu>
    <component :is="currentTab"></component>
</template>

<style src="./Projects.css"></style>
<script lang="ts" src="./Projects"></script>