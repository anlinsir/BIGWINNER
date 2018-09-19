// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);


Vue.prototype.to  = function(next,query,id){
	if(!query){
		this.$router.push({path:`/${next}`})
	}else{
		this.$router.push({path:`/${next}`,query:{query}})

	}
} //跳转页面


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
