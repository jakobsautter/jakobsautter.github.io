import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

//eslint-disable-next-line
import styles from './assets/sass/style.scss';

const app = createApp(App);
app.mount('#app');
