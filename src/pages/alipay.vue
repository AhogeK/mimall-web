<template>
  <div class="ali-pay">
    <Loading v-if="loading" />
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="form"
      v-html="content"
    />
  </div>
</template>
<script>
  import Loading from './../components/Loading'
  export default {
    name: 'Alipay',
    components: {
      Loading
    },
    data() {
      return {
        orderId: this.$route.query.orderId,
        content: '',
        loading: true
      }
    },
    mounted() {
      this.paySubmit()
    },
    methods: {
      paySubmit() {
        console.log('1111')
        this.axios.post('/pay', {
          orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          amount: 0.01,
          payType: 1
        }).then((res) => {
          this.content = res.content
          setTimeout(() => {
            document.forms[0].submit()
          }, 100)
        })
      }
    }
  }
</script>