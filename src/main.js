import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/common.css";
import axios from 'axios';
import QS from 'qs'


//axios.defaults.baseURL='http://193.168.11.186';
Vue.prototype.$axios=axios;
Vue.prototype.qs = QS;

Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



