import { createWebHashHistory, createRouter } from "vue-router";

// views:

import Home from './views/Home.vue'
import Colecciones from "./views/Colecciones.vue";
import Fasciculos from "./views/Fasciculos.vue";
import Autoras from "./views/Autoras.vue";
import Revista from "./views/Revista.vue";
import User from "./views/User.vue";
import NotFound from "./views/NotFound.vue";
import CardBooks from "./components/CardBooks.vue";
import CardSolo from "./components/CardSolo.vue"





const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/colecciones',
        name: 'Colecciones',
        component: Colecciones
    },
    {
        path:'/colecciones/:tema',
        name: 'Temas',
        component: CardBooks,

    },
    {
        path:'/colecciones/:tema/:bookId',
        name: 'Libro',
        component: CardSolo,

    },
    {
        path: '/fasciculos',
        name: 'Fasciculos',
        component: Fasciculos
    },
    {
        path: '/autoras',
        name: 'Autoras',
        component: Autoras
    },
    {
        path: '/revista',
        name: 'Revista',
        component: Revista
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/:path(.*)*',
        name: 'NotFound',
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router