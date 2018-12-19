import Vue from 'vue'
import App from './App.vue'
import './../node_modules/huleos.css/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
