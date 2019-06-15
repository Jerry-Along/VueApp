import Vue from 'vue'
import Router from 'vue-router'
import splashPage from '@/pages/splashPage'
import homePage from '@/pages/home/home'
import listPage from '@/pages/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splashPage',
      component: splashPage
    },
		{
		  path: '/home',
		  name: 'homePage',
		  component: homePage
		},
		{
		  path: '/list',
		  name: 'listPage',
		  component: listPage
		}
  ]
})
