import axios from "axios";
import InputText from 'primevue/inputtext';

export default {
    components: {
        InputText
    },
    data() {
        return {
            messages: [
                { role: 'assistant', text: "Hello! I'm MovieChat, your friendly movie guessing game partner." +
                " Ask me about any movie or let's play a guessing game!", type: 'bot-message' }
            ],
            userInput: '',
            isGenerating: false
        };
    },
    updated() {
        this.scrollToBottom();
    },
    methods: {
        async sendMessage() {
            if (this.userInput.trim() !== '') {
                const userMessage = { role: 'user', text: this.userInput, type: 'user-message' };
                this.messages.push(userMessage);
                this.isGenerating = true;
                this.userInput = '';

                try {
                    const response = await axios.post('https://api.jacoblevinsky.com/api/OpenAi/conversation', {
                        userPrompt: userMessage.text,
                        conversationHistory: this.messages.filter(m => m.type === 'user-message').map(m => m.text)
                    });
                    const botMessage = { role: 'assistant', text: response.data, type: 'bot-message' };
                    this.messages.push(botMessage);
                    this.isGenerating = false;
                } catch (error) {
                    console.error(error);
                    this.userInput = '';
                    this.isGenerating = false;
                }
            }
        },
        scrollToBottom() {
            const container = this.$refs.conversationContainer;
            container.scrollTop = container.scrollHeight;
        }
    }
};