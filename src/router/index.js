import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import {routerMode} from '../config/env'

Vue.use(Router)
let routers = new Router({
  routes,
  mode: routerMode
})

/** 全局钩子
routers.beforeEach(({path}, from, next) => {
  console.log(path)
})
**/

export default routers
