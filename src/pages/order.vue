<template>
  <div>
    order
    <order-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'

export default {
    name: 'Order',
    components: {
        OrderHeader,
        NavFooter
    }
}
</script>