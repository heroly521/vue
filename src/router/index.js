import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import daohang from '../views/index.vue'
import zhuce from '../views/zhuce'
import denglu from '../views/denglu'
import aa from '../views/updata'
import store from "../store/index"
import Cookie from "js-cookie"
import page from "../views/page"

import page1 from "../components/plan1-1"
import page2 from "../components/plan1-2"
import page3 from "../components/plan1-3"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page',
    name: 'page',
    component: page,
    children:[
      {
        path: 'plan1-1',
        name: 'plan1',
        component: page1
      },
      {
        path: 'plan1-2',
        name: 'plan2',
        component: page2
      },
      {
        path: 'plan1-3',
        name: 'plan3',
        component: page3
      },
    ]
  },
  {
    path: '/updata',
    name: 'updata',
    component: aa,
    meta:{
      requireAuth:true//true表示为页面添加登录权限
    }
  },
  {
    path: '/zhuce',
    name:'zhuce',
    component: zhuce
  },
  {
    path: '/denglu',
    name:'denglu',
    component: denglu
  },
  {
    path: '/index',
    name: 'index',
    component: daohang
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  store.commit("setToken",Cookie.get("token"))
  // if(store.state.token){
  //   store.commit("chengIsgnIn",1)
  // }
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({path:'/denglu'})
    }
  }else{
    next()
  }
})
export default router
