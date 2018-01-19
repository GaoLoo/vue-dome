const home = () => Promise.resolve(import('../page/home/index'))
const error = () => Promise.resolve(import('../components/error/404.vue'))

export default [
  {
    path: '',
    component: home,
    children: []
  }, {
    path: '/home',
    component: home,
    children: []
  }, {
    path: '/*',
    component: error,
    children: []
  }
]
