import Vue from 'vue'
import VueRouter from 'vue-router'

/* import module routes  */
import loginRoutes from 'login/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/teste',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ 'login/App'),
    children: loginRoutes,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
