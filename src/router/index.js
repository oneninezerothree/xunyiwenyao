import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import List from '../view/List.vue'
import Order from '../view/Order.vue'
import Me from '../view/Me.vue'
import Detail from '../view/detail.vue'
import Cart from '../view/Cart.vue'
import addCart from '../view/addtocart.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path:'/aqme',
      name:'Me',
      component:Me
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
