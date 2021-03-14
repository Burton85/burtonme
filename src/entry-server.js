import { createSSRApp } from 'vue';
import './style/main.scss';
import renderer from '@vue/server-renderer';
import App from './App.vue';
import com from './js/common.js';
import createRouter from './router';
import store from './store';
import config from './config';
const express = require('express');
const path = require('path');
const server = express();

server.use('/_assets', express.static(path.join(__dirname, '../client/_assets')));

server.get('*', (req, res) => {
    const router = createRouter();
    const app = createSSRApp(App);
    app.config.globalProperties.$com = com;
    app.use(router).use(store);
    router.push(req.url);
    router.isReady().then(() => {
        if (router.currentRoute.value.matched.length === 0) {
            res.end();
            return;
        }
        (async () => {
            const html = await renderer.renderToString(app);
            res.end(`__HTML__`);
        })();
    });
});

console.log(`started server on port ${config.port}`);
server.listen(config.port);
