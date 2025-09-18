// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/exercice',
            name: 'exercice',
            component: () => import('../views/Exercice.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../components/Contact.vue')
        }

    ]
});

export default router;
