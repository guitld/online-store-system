import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router'
// import mitt from 'mitt'

const app = createApp(App)

// const bus = mitt()
// app.config.globalProperties.emitter = bus

app.use(store)
app.use(router)

app.mount('#app')

