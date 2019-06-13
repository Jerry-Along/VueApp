import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/home/home'
import listPage from '@/pages/list/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
