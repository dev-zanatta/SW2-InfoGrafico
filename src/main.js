import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueAwesomeSidebar)

app.mount('#app')
