import axios from "axios";
import InputText from 'primevue/inputtext';

export default {
    components: {
        InputText
    },
    data() {
        return {
            messages: [
                { Role: 'assistant', Text: "Hello! I'm MovieChat, your friendly movie guessing game partner." +
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
                const userMessage = { Role: 'user', Text: this.userInput, type: 'user-message' };
                this.messages.push(userMessage);
                this.isGenerating = true;
                this.userInput = '';

                try {
                        const response = await axios.post('https://api.jacoblevinsky.com/api/OpenAi/conversation', {
                        conversationHistory: this.messages.filter(m => m.type === 'user-message').map(m => ({ Role:m.Role, Text: m.Text }))
                    });
                    const botMessage = { Role: 'assistant', Text: response.data, type: 'bot-message' };
                    this.messages.push(botMessage);
                    console.log(response.data);
                    this.isGenerating = false;
                } catch (error) {
                    console.error(error.response.data);
                    this.userInput = '';
                    this.isGenerating = false;
                }
            }
            console.log(this.messages); 
        },
        scrollToBottom() {
            const container = this.$refs.conversationContainer;
            container.scrollTop = container.scrollHeight;
        }
    }
};