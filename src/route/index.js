import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

import index from '../views/index/index.vue'
import login from "../views/login/login.vue";

const routes = [
  {
    path:'/',
    component:index
  },
  {
    path:'/login',
    component:login
  }
];

 const router = createRouter({
  history:createWebHistory(),
  routes
});

 export default router
