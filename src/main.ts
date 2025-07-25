import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
import PrimeVue from 'primevue/config';

import './styles/settings.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.mount('#app')
