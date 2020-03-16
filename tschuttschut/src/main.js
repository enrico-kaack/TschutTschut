import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VuePeerJS from 'vue-peerjs';
import Peer from 'peerjs';

Vue.config.productionTip = false
Vue.use(VuePeerJS, new Peer({debug: 4}), {store})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
