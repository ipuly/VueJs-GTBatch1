import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import VueRouter from "vue-router";
import Router from "./routes";

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
