import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { trace } from './directive/trace'

const app = createApp(App)
app.directive('trace',trace)

app.use(createPinia())
app.use(router)

app.mount('#app')
