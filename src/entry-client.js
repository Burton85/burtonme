import { createSSRApp, createRenderer } from 'vue';
import App from './App.vue';
import './style/main.scss';
import com from './js/common.js';
import createRouter from './router';
import store from './store';

// // const { FontCtl } = com;

const router = createRouter('client');

const app = createSSRApp(App);
app.config.globalProperties.$com = com;

app.use(router).use(store);

router.isReady().then(() => {
    app.mount('#app', true);
});

// it is possible to debug differences of SSR / Hydrated app state
// by adding a timeout between rendering the SSR version and hydrating it later
// window.setTimeout(() => {
//   console.log('The app has now hydrated');
//   router.isReady().then(() => {
//     app.mount('#app', true);
//   });
// }, 5000);
