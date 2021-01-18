<template>
  <div class="order-list">
    <OrderHeader title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </OrderHeader>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div
            v-for="(order, index) in list"
            :key="index"
            class="order"
          >
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }}
                <span>|</span>
                {{ order.receiverName }}
                <span>|</span>
                订单号：{{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div
                  v-for="(item, i) in order.orderItemVoList"
                  :key="i"
                  class="good-list"
                >
                  <div class="good-img">
                    <img v-lazy="item.productImage">
                  </div>
                  <div class="good-name">
                    <div class="p-name">
                      {{ item.productName }}
                    </div>
                    <div class="p-money">
                      {{ item.totalPrice + 'X' + item.quantity }}元
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="order.status == 20"
                class="good-state fr"
              >
                <a href="javascript:;">{{ order.statusDesc }}</a>
              </div>
              <div
                v-else
                class="good-state fr"
              >
                <a
                  href="javascript:;"
                  @click="goPay(order.orderNo)"
                >{{ order.statusDesc }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'OrderList',
  components: {
    OrderHeader
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getOrderList()
  },
  methods: {
    getOrderList() {
      this.axios.get('/orders').then((res) => {
        this.list = res.list
      })
    },
    goPay(orderNo) {
      // 三种路由跳转方式
      // this.$router.push('/order/pay')
      // this.$router.push({
      //   name: 'order-pay',
      //   query: {
      //     orderNo
      //   }
      // })
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';

  .order-list {
    .wrapper {
      background-color: $colorJ;
      padding-top: 33px;
      padding-bottom: 110px;
      .order-box {
        .order {
          @include border();
          background-color: $colorG;
          margin-bottom: 31px;
          &:last-child {
            margin-bottom: 0;
          }
          .order-title {
            @include height(74px);
            background-color: $colorK;
            padding: 0 43px;
            font-size: 16px;
            color: $colorC;
            .item-info {
              span {
                margin: 0 9px;
              }
            }
            .money {
              font-size: 26px;
              color: $colorB;
            }
          }
          .order-content {
            padding: 0 43px;
            .good-box {
              width: 88%;
              .good-list {
                display: flex;
                align-items: center;
                height: 145px;
                .good-img {
                  width: 112px;
                  img {
                    width: 100%;
                  }
                }
                .good-name {
                  font-size: 20px;
                  color: $colorB;
                }
              }
            }
            .good-state {
              @include height(145px);
              font-size: 20px;
              color: $colorA;
              a {
                color: $colorA;
              }
            }
          }
        }
      }
    }
  }
</style>