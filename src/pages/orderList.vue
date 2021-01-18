<template>
  <div>
    <OrderHeader title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </OrderHeader>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'OrderList',
  components: {
    OrderHeader
  }
}
</script>