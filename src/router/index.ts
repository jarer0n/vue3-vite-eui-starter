import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import Home from '~/views/Home.vue';
import About from '~/views/About.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            layout: 'another-lyaout',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
