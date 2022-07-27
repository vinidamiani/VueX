import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Desafio_2 from '../components/Desafio_2.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/desafio2',
        name: 'Desafio_2',
        component: Desafio_2
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

