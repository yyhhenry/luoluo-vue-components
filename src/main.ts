import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { useColorMode } from '@vueuse/core';

useColorMode();

const app = createApp(App);
app.mount('#app');
