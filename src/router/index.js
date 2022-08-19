import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyMenu from '../components/template/MyMenu.vue'

const HelloWorld = () => import('@/components/HelloWorld.vue')
// import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   redirect: '/'
  // },
  {
    path: '/',
    name: 'home',
    components: {
      page: HomeView,
      MyMenu: MyMenu
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      page: () => import('../views/AboutView.vue'),
      MyMenu: MyMenu
    }
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    components: {
      page: HelloWorld,
      MyMenu: MyMenu
    }
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
