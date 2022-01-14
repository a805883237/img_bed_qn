import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../pages/home/index.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;