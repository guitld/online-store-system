import { Vue, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

const bus = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = bus
app.use(router)
app.mount('#app')

