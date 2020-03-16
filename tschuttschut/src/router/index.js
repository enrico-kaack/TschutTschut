import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JoinGame from '../views/JoinGame'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateSession',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "createSession" */ '../views/CreateSession.vue')
  },
  {
    path: '/join',
    name: 'JoinGame',
    component: JoinGame
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
