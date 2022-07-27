import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Desafio_1 from '../components/Desafio_1.vue'
import Desafio_2 from '../components/Desafio_2.vue'
import Desafio_3 from '../components/Desafio_3.vue'
import Desafio_4 from '../components/Desafio_4.vue'
import Desafio_5 from '../components/Desafio_5.vue'
import Projeto_1 from '../components/Projeto_1.vue'
import Game from '../components/Game.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/desafio1',
        name: 'Desafio_1',
        component: Desafio_1
    },
    {
        path: '/desafio2',
        name: 'Desafio_2',
        component: Desafio_2
    },
    {
        path: '/desafio3',
        name: 'Desafio_3',
        component: Desafio_3
    },
    {
        path: '/desafio4',
        name: 'Desafio_4',
        component: Desafio_4
    },
    {
        path: '/desafio5',
        name: 'Desafio_5',
        component: Desafio_5
    },
    {
        path: '/projeto1',
        name: 'Projeto_1',
        component: Projeto_1
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

