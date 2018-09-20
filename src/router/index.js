import Vue from 'vue'
import Router from 'vue-router'




const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const Register = r => require.ensure([], () => r(require('@/pages/register')), 'register')
const Attestation = r => require.ensure([], () => r(require('@/pages/attestation')), 'attestation')
const Invitation = r => require.ensure([], () => r(require('@/pages/invitation')), 'invitation')
const Investment = r => require.ensure([], () => r(require('@/pages/investment')), 'investment')
const Pip = r => require.ensure([], () => r(require('@/pages/pip')), 'pip')






//      const Property = r =>require.ensure([],() => r(require('@/components/account/property')),'property')
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
     {
      path: '/attestation',
      name: 'attestation',
      component: Attestation
    },
     {
      path: '/invitation',
      name: 'invitation',
      component: Invitation
    },
     {
      path: '/investment',
      name: 'investment',
      component: Investment
    },
    {
      path: '/pip',
      name: 'pip',
      component: Pip
    },
    { path: '*', redirect: "/register"}
  ]
})
