<script setup >
// Create 10 slides

</script>

<template>
  <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class=" md:w-[40%] sm:w-[98%] h-[300px]"
    thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </swiper-slide>
  </swiper-container>

  <swiper-container class="mySwiper2 md:w-[40%] sm:w-[98%]" space-between="10" slides-per-view="10" free-mode="true"
    watch-slides-progress="true">
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </swiper-slide>
  </swiper-container>
</template>
<style>


  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }




  swiper-slide {
    background-size: cover;
    background-position: center;

  }

 

  .mySwiper2 {
    height: 30%;
    box-sizing: border-box;
    padding: 10px 0px ;
  
  }

  .mySwiper2 swiper-slide {
    cursor: pointer;
    width: 25%;
    height: 100%;
    opacity: 0.4;
    margin-bottom: 5px;
  }

  .mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>