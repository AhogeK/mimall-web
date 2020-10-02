<template>
  <div>
    cart
    <order-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'

export default {
    name: 'Cart',
    components: {
        OrderHeader,
        NavFooter
    }
}
</script>