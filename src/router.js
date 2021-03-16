import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function (type) {
    const routerHistory = type === 'client' ? createWebHistory() : createMemoryHistory();

    return createRouter({
        history: routerHistory,
        routes: [
            { path: '/', component: () => import('./views/Home.vue'), props: true },
            { path: '/note', component: () => import('./views/SubPage.vue'), props: true },
            { path: '/photo', component: () => import('./views/SubPage.vue'), props: true },
            { path: '/project', component: () => import('./views/SubPage.vue'), props: true },
            { path: '/profile', component: () => import('./views/SubPage.vue'), props: true },
            { path: '/notedetail', component: () => import('./views/NoteDetail.vue'), props: true },
            { path: '/projectdetail', component: () => import('./views/ProjectDetail.vue'), props: true },
            { path: '/photodetail', component: () => import('./views/PhotoDetail.vue'), props: true },
            { path: '/profiledetail', component: () => import('./views/ProfileDetail.vue'), props: true },
        ],
    });
}
