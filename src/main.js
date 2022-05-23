import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import mitt from 'mitt'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

library.add(fas)

const emitter = mitt()

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(router).component('fa',FontAwesomeIcon).mount('#app')

