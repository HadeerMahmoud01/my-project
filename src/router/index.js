import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contactus from '../views/Contactus.vue'
import Services from '../views/Services.vue'
import Clients from '../views/Clients.vue'
import Pictures from '../views/Pictures.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Contact',
    name:'Contact',
    // component: () => import('../views/Contactus.vue')
    component:Contactus
  },
  {
    path:'/services',
    name:'Services',
    // component: () => import('../views/Contactus.vue')
    component:Services
  },
  {
    path:'/clients',
    name:'Clients',
    // component: () => import('../views/Contactus.vue')
    component:Clients
  },
  {
    path:'/pictures',
    name:'Pictures',
    // component: () => import('../views/Contactus.vue')
    component:Pictures
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
