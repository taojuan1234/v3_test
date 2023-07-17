
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import templateDetail from '@/components/detail-template/index.vue'

import "normalize.css"
import "./assets/css/index.css"

const app = createApp(App);
app.component('TemplateDetail', templateDetail)
app.use(router);
app.use(pinia);
app.mount('#app')

// createApp(App).use(router).use(pinia).mount('#app')
