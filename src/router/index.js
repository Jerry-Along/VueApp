import Vue from 'vue'
import Router from 'vue-router'

const homePage =h => require.ensure([],  h(require('../pages/home/home')), 'homePage')
const listPage =h => require.ensure([],  h(require('../pages/list/list')), 'listPage')

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
