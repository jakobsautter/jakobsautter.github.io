import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import '@/assets/sass/style.scss';

const app = createApp(App);
app.mount('#app');
