import {createRouter,createWebHistory} from 'vue-router';

const Register = () => import('../components/user/register.vue')

const routes = [
    {   
        name: 'registro',
        path:'/registro',
        component: Register
    }
];


export const router = createRouter({
    history: createWebHistory(),
    routes 
});