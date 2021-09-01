import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Search from '../views/Search/index.vue'
import Play from '../views/Play/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/search',
        component: Search,
        meta: {
          title: '搜索'
        }
      }
    ]

  },
  {
    path: '/play/:id',
    component: Play
  }
]

const router = new VueRouter({
  routes
})

export default router
