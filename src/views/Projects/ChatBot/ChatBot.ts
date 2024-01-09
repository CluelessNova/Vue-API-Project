import axios from "axios";

export default {
    data() {
        return {
            messages: [],
            userInput: '',
            isGenerating: false
        };
    },
    methods: {
        async sendMessage() {
            if (this.userInput.trim() !== '') {
                const userMessage = { role: 'user', text: this.userInput, type: 'user-message' };
                this.messages.push(userMessage);
                this.isGenerating = true;

                try {
                    const response = await axios.post('https://localhost:44395/api/OpenAi/conversation', {
                        userPrompt: this.userInput,
                        conversationHistory: this.messages.filter(m => m.type === 'user-message').map(m => m.text)
                    });

                    const botMessage = { role: 'assistant', text: response.data, type: 'bot-message' };
                    this.messages.push(botMessage);
                    this.userInput = '';
                    this.isGenerating = false;
                } catch (error) {
                    console.error(error);
                    this.userInput = '';
                    this.isGenerating = false;
                }
            }
        }
    }
};