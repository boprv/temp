import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'
import BuildingMaterials from "../views/buildingMaterials/BuildingMaterials.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buildingMaterials',
    name: 'BuildingMaterials',
    component: () => import('../views/buildingMaterials/BuildingMaterials.vue')
  },
  {
    path: '/community',
    name: 'Community',
    redirect:'/community/forum',
    component: () => import('../views/community/Community.vue'),
    children:[
      {path:'/community/question',component: () => import('../components/community/question')},
      {path:'/community/forum',component: () => import('../components/community/forum')}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
