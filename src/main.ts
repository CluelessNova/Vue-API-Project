import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primeflex/primeflex.css'
import Tooltip from 'primevue/tooltip';

const app = createApp(App)

app.use(router).use(PrimeVue, { ripple: true }).directive('tooltip', Tooltip).mount('#app')
