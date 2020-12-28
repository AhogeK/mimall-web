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

### Vuex实战应用

添加 actions
``actions.js``
```js
/**
 * 商城Vuex-actions
 */
export default {
  saveUserName(context, username) {
      context.commit('saveUserName', username)
  },
  saveCartCount(context, cartCount) {
    context.commit('saveCartCount', cartCount)
  }
}
```

mutations

``mutations.js``
```js
/**
 * 商城Vuex-mutations
 */
export default {
  saveUserName(state, username) {
    state.username = username
  },
  saveCartCount(state, cartCount) {
    state.cartCount = cartCount
  }
}
```

主页通过vuex获取用户信息

``App.vue``
```js
methods: {
  getUser() {
    this.axios.get('/user').then((res) => {
      // 保存到Vuex中
      this.$store.dispatch('saveUserName', res.username)
    })
  },
  getCartCount() {
    this.axios.get('/carts/products/sum').then((res) => {
      this.$store.dispatch('saveCartCount', res)
    })
  }
}
```

通过Vuex的mapstate来获取存储的数据

``NavHeader.vue``
```html
<a 
  href="javascript:;" 
  class="my-cart"
  @click="goToCart"
>
  <span class="icon-cart" />
  购物车({{ cartCount }})
</a>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavHeader',
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  data() {
    return {
      phoneList: []
    }
  },
  computed: {
    // username() {
    //   return this.$store.state.username
    // },
    // cartCount() {
    //   return this.$store.state.cartCount
    // }
    ...mapState(['username', 'cartCount'])
  },
```

在登录页通过Vuex的Mapaction来存储用户名

``login.vue``
```html
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login() {
      let { username, password } = this;
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        this.$cookie.set('useerId', res.id, {expires: '1M'});
        // 利用Vuex保存用户名
        // this.$store.dispatch('saveUserName', res.username)
        this.saveUserName(res.username)
        this.$router.push('/index')
      })
    },
    ...mapActions(['saveUserName']),
```

**[返回](https://github.com/AhogeK/mimall-web)**