import { createApp } from 'vue'
import App from './App.vue'
import install from "../packages/index.js";
createApp(App).use(install).mount('#app')
