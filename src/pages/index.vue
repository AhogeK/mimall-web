<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
  .index {
    .swiper-box {
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>