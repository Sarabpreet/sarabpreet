import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'

import './registerServiceWorker'

require('buefy/dist/buefy.css')
require('./assets/css/image.css')
require('./assets/css/litti.css')
require('./assets/css/custom.css')
// require('./assets/js/typed.js')

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }

// var typed = new Typed(".element", options);
