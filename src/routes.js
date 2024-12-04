import { createWebHashHistory, createRouter } from "vue-router";

import Home from './views/Home.vue'
import Colecciones from "./views/Colecciones.vue";
import Fasciculos from "./views/Fasciculos.vue";
import User from "./views/User.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/colecciones',
        name: Colecciones,
        component: Colecciones
    },
    {
        path: '/fasciculos',
        name: Fasciculos,
        component: Fasciculos
    },
    {
        path: '/user',
        name: User,
        component: User
    },
    {
        path: '/:path(.*)',
        name: NotFound,
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router