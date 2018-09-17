import Vue from 'vue'
import Router from 'vue-router'




const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const Register = r => require.ensure([], () => r(require('@/pages/register')), 'register')

//      const Property = r =>require.ensure([],() => r(require('@/components/account/property')),'property')
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
