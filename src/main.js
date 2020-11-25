import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
Vue.prototype.$http = Axios
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.config.productionTip = false
// 请求拦截
Axios.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
