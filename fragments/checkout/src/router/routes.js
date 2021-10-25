const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index')
  },
  {
    path: '/teste',
    name: 'RecoverPassword',
    component: () => import('../views/RecoverPassword')
  }
]

export default routes