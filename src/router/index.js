import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CreateCV from '../views/CreateCv.vue';
import Contact from '../views/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/about',
        name: 'about',
        component: About,
    },
    { 
        path: '/create-cv',
        name: 'create-cv', 
        component: CreateCV, 
    },
    { 
        path: '/contact', 
        name: 'contact',
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active', 
})

export default router;