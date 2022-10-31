import './bootstrap';


import { createApp } from 'vue'

import {router} from './router/index';
import App from './components/App';


const app = createApp({})

app.component('App', App)
app.use(router)
app.mount('#app')