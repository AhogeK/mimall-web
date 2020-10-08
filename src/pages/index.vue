<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
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
      <div class="ads-box" />
      <div class="banner" />
      <div class="product-box" />
    </div>
    <ServiceBar />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ServiceBar from './../components/ServiceBar'
import 'swiper/css/swiper.css'
export default {
  name: 'Index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
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
      ] 
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';

  .index {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451;
        z-index: 9;
        padding: $fontD 0;
        background-color: #55585A7A;
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              position: relative;
              display: block;
              font-size: $fontI;
              color: $colorG;
              padding-left: 30px;
              &:after {
                content: '';
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                position: absolute;
                right: 30px;
                top: 17.5px;
              }
            }
            &:hover {
              background-color: $colorA;
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 274px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>