### 初步了解Vuex

[Vuex 介绍](https://vuex.vuejs.org/zh/)

### Vuex框架搭建

新建 ``store`` 文件夹 在文件夹中创建Vuex所需要的js文件

Vuex 主js

``index.js``
```js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  // 登录用户名
  username: '',
  // 购物车商品数量
  cartCount: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
```

``mutations.js``
```js
/**
 * 商城Vuex-mutations
 */
export default {
  
}
```

``actions.js``
```js
/**
 * 商城Vuex-actions
 */
export default {
  
}
```

``main.js``中使用
```js
import store from './store'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
```

**[返回](https://github.com/AhogeK/mimall-web)**