<template>
    <div>
        <div class="conversation">
            <p v-for="message in messages" :key="message.id" :class="message.role">{{ message.text }}</p>
            <div v-if="isGenerating" class="loading-indicator"></div>
        </div>
        <input type="text" v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message..." />
    </div>
</template>

<script lang="ts" src="./ChatBot"></script>

<style src="./ChatBot.css"></style>