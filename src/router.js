import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function (type) {
    const routerHistory = type === 'client' ? createWebHistory() : createMemoryHistory();

    return createRouter({
        history: routerHistory,
        routes: [
            { path: '/', component: () => import('./views/Home.vue'), props: true },
            { path: '/notes', component: () => import('./views/PageA.vue'), props: true },
            { path: '/photos', component: () => import('./views/PageB.vue'), props: true },
            { path: '/projects', component: () => import('./views/PageA.vue'), props: true },
            { path: '/profile', component: () => import('./views/PageB.vue'), props: true },
        ],
    });
}
