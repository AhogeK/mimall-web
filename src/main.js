import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

// 定义mockjs开关 方便开关
const mock = true;
if (mock) {
  // import 预编译 require() 执行编译
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 错误接口拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status ==0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
