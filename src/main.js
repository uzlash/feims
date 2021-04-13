import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueGoogleCharts from 'vue-google-charts'
import VueBreadcrumbs from 'vue-2-breadcrumbs';

 
Vue.use(VueGoogleCharts)
Vue.use(VueBreadcrumbs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
