<template>
  <div>
    <NavHeader />
    <RouterView />
    <NavFooter />
  </div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'

export default {
  name: 'NavHome',
  components: {
    NavHeader,
    NavFooter,
  },
}
</script>