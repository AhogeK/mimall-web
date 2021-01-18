<template>
  <div>
    <RouterView />
    <ServiceBar />
    <NavFooter />
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'

export default {
  name: 'Order',
  components: {
      ServiceBar,
      NavFooter
  },
  data() {
    return {
      title: '',
      tip: ''
    }
  }
}
</script>