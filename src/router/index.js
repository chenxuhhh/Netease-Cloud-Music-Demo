import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/discovermusic/recommend'
  },
  {
    path:'/discovermusic',
    name:'discovermusic',
    component:()=>import('@/views/discovermusic'),
    children:[
      {
        path:'recommend',
        component:()=>import('@/views/recommend')
      },
      {
        path:'playList',
        component:()=>import('@/views/playList')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
