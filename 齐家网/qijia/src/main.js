import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import Axios from "axios"
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.prototype.$axios = Axios
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
