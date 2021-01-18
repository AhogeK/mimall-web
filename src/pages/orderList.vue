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
          <Loading v-if="loading" />
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
          <!-- <el-pagination
            v-if="false"
            class="pagination"
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total" 
            @current-change="handleChange"
          /> -->
          <!-- <div
            v-if="showNextPage"
            class="load-more"
          >
            <el-button
              type="primary"
              :loading="loading"
              @click="loadMore"
            >
              加载更多
            </el-button>
          </div> -->
          <div
            v-infinite-scroll="scrollMore"
            class="scroll-more"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="410"
          >
            <img
              v-if="!busy && !loading"
              src="/imgs/loading-svg/loading-spinning-bubbles.svg"
              alt="loading"
            >
          </div>
          <NoData v-if="!loading && list.length==0" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import Loading from './../components/Loading'
import NoData from './../components/NoData'
import { Pagination, Button } from 'element-ui'
import InfiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'OrderList',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: {
    InfiniteScroll
  },
  data() {
    return {
      list: [],
      loading: false,
      pageSize: 10,
      pageNum: 1,
      total: 0,
      // 加载更多：是否显示按钮
      showNextPage: false, 
      // 滚动加载，是否触发
      busy: false
    }
  },
  mounted() {
    this.getOrderList()
  },
  methods: {
    getOrderList() {
      this.loading = true
      this.axios.get('/orders', {
        params: {
          pageNum: this.pageNum
        }
      }).then((res) => {
        this.list = this.list.concat(res.list)
        this.loading = false
        this.total = res.total
        // this.showNextPage = res.hasNextPage
        this.busy = false
      }).catch(() => {
        this.loading = false
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
    },
    // 分页器
    // handleChange(pageNum) {
    //   this.pageNum = pageNum
    //   this.getOrderList()
    // },
    // 加载更多按钮
    // loadMore() {
    //   this.pageNum++
    //   this.getOrderList()
    // },
    // 滚动加载 插件实现
    scrollMore() {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getList()
      }, 500)
    },
    // 专门给scrollMore使用
    getList() {
      this.axios.get('/orders', {
        params: {
          pageSize: 10,
          pageNum: this.pageNum
        }
      }).then((res) => {
        this.list = this.list.concat(res.list)
        if (res.hasNextPage) {
          this.busy = false
        } else {
          this.busy = true
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
          .pagination {
            text-align: right;
          }
          .el-pagination .is-background .el-pager li:not(.disabled) .active {
            background-color: #FF6600;
          }
          .el-button--primary {
            background-color: #FF6600;
            border-color: #FF6600;
          }
          .load-more, .scroll-more {
            text-align: center;
          }
        }
      }
    }
  }
</style>