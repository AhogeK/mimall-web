<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                  <li
                    v-for="(sub, subIndex) in item"
                    :key="subIndex"
                  >
                    <a :href="'/#/product/'+sub.id">
                      <img
                        :src="sub.img"
                        :alt="sub.name"
                      >
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in slideList"
            :key="index"
          >
            <a :href="'/#/product/' + item.id"><img :src="item.img"></a>
          </swiper-slide>
          <div
            slot="pagination"
            class="swiper-pagination"
          />
          <div
            slot="button-prev"
            class="swiper-button-prev"
          />
          <div
            slot="button-next"
            class="swiper-button-next"
          />
          <div class="swiper-scrollbar" />
        </swiper>
      </div>
      <div class="ads-box">
        <a
          v-for="(item,index) in adsList"
          :key="index"
          :href="'/#/product/'+item.id"
        >
          <img
            v-lazy="item.img"
            alt=""
          >
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img
            v-lazy="'/imgs/banner-1.png'"
            alt=""
          >
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img
              v-lazy="'/imgs/mix-alpha.jpg'"
              alt=""
            ></a>
          </div>
          <div class="list-box">
            <div
              v-for="(arr,i) in phoneList"
              :key="i"
              class="list"
            >
              <div
                v-for="(item,j) in arr"
                :key="j"
                class="item"
              >
                <span :class="{'new-pro' : j % 2 == 0}">新品</span>
                <div class="item-img">
                  <img
                    v-lazy="item.mainImage"
                    alt="item.name"
                  >
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p
                    class="price"
                    @click="addCart(item.id)"
                  >
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
    <Modal
      title="提示"
      sure-text="查看购物车"
      btn-type="1"
      modal-type="middle"
      :show-modal="showModal"
      @submit="goToCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </Modal>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import ServiceBar from './../components/ServiceBar'
  import Modal from './../components/Modal'
  import 'swiper/css/swiper.css'

  export default {
    name: 'Index',
    components: {
      Swiper,
      SwiperSlide,
      ServiceBar,
      Modal
    },
    data() {
      return {
        swiperOptions: {
          autoplay: true,
          loop: true,
          effect: 'cube',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        slideList: [
          {
            id: '42',
            img: '/imgs/slider/slide-1.jpg'
          },
          {
            id: '45',
            img: '/imgs/slider/slide-2.jpg'
          },
          {
            id: '46',
            img: '/imgs/slider/slide-3.jpg'
          },
          {
            id: '',
            img: '/imgs/slider/slide-4.jpg'
          },
          {
            id: '',
            img: '/imgs/slider/slide-5.jpg'
          }
        ],
        menuList: [
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: 'imgs/item-box-3.jpg',
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: 'imgs/item-box-4.jpg',
              name: '移动4G专区'
            }
          ],
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: 'imgs/item-box-3.jpg',
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: 'imgs/item-box-4.jpg',
              name: '移动4G专区'
            }
          ],
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: 'imgs/item-box-3.jpg',
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: 'imgs/item-box-4.jpg',
              name: '移动4G专区'
            }
          ],
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: 'imgs/item-box-3.jpg',
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: 'imgs/item-box-4.jpg',
              name: '移动4G专区'
            }
          ],
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: 'imgs/item-box-3.jpg',
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: 'imgs/item-box-4.jpg',
              name: '移动4G专区'
            }
          ],
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: 'imgs/item-box-3.jpg',
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: 'imgs/item-box-4.jpg',
              name: '移动4G专区'
            }
          ]
        ],
        adsList: [
          {
            id: 33,
            img: '/imgs/ads/ads-1.png'
          },
          {
            id: 48,
            img: '/imgs/ads/ads-2.jpg'
          },
          {
            id: 45,
            img: '/imgs/ads/ads-3.png'
          },
          {
            id: 47,
            img: '/imgs/ads/ads-4.jpg'
          }
        ],
        phoneList: [],
        showModal: false
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.axios.get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        }).then((res) => {
          this.phoneList = [res.list.slice(0,4), res.list.slice(4, 8)]
        })
      },
      addCart(productId) {
        this.axios.post('/carts', {
          productId: productId,
          selected: true
        }).then((res) => {
          this.showModal = true;
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        }).catch((res) => {
          this.showModal = false
        })
      },
      goToCart() {
        this.$router.push('/cart')
      }
    }
  }
</script>
<style lang="scss" scope>
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';

  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: $fontD 0;
        background-color:#55585a7a;
        box-sizing: border-box;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              position: relative;
              display: block;
              font-size: $fontI;
              color: $colorG;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: ' ';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              }
            }
            &:hover{
              background-color: $colorA;
              .children{
                display: block;
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid $colorH;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a{
                  color: $colorB;
                  font-size: $fontJ;
                }
                img{
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }  
    }
    .ads-box{
      @include flex();
      margin-top: $fontJ;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: $fontG;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 16px;
          img{
            width: 224px;
            height: 619px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: $fontJ;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span{
                display: inline-block;
                width: 67px;
                height: $fontE;
                font-size: $fontJ;
                line-height: 24px;
                color: $colorG;
                &.new-pro {
                  background-color: #7ECF68;
                }
                &.kill-pro {
                  background-color: #E82626;
                }
              }
              .item-img{
                img{
                  width: 100%;
                  height: 195px;
                  object-fit: cover;
                }
              }
              .item-info{
                h3{
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p{
                  color:$colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price{
                  color: #F20A0A;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &:after{
                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                    content: ' ';
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>