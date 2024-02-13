<template>
    <div class="p-3">
        <div class="conversation mx-auto p-3 w-9 lg:w-7 xl:w-4 h-30rem overflow-y-auto border-1 border-round" ref="conversationContainer">
            <p class="p-3 my-2 border-round" v-for="message in messages" :key="message.id" :class="message.Role">{{ message.Text }}</p>
            <div v-if="isGenerating" class="loading-indicator"></div>
        </div>
        <InputText class="w-6 lg:w-4 xl:w-2 m-2" size="small" type="text" v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message..." />
    </div>
</template>

<script lang="ts" src="./ChatBot"></script>
<style src="./ChatBot.css"></style>