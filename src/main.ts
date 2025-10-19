import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { trace } from './directive/trace'
import { lazy } from './directive/lazy'

const app = createApp(App)
app.directive('trace', trace)
app.directive('lazy', lazy)


app.use(createPinia())
app.use(router)

app.mount('#app')
