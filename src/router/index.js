import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home.vue'
import Reslogin from '../views/Reslogin.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import List from '../views/List.vue'
import Order from '../views/Order.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/Cart.vue'
import addCart from '../views/addtocart.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reslogin',
      name: 'reslogin',
      component: Reslogin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/aqlist',
      name:'List',
      component:List
    },
    {
      path:'/aqorder',
      name:'Order',
      component:Order
    },
    {
      path:'/detail',
      query: 11,
      name:'Detail',
      component:Detail
    },
    {
      path:'/aqcart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/addtocart',
      name:'addCart',
      component:addCart
    }
  ]
})
