import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.slider', {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: false,
  // slidesPerView: 4,
  speed: 800,
  initialSlide:0,
    spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: {
        enabled: true,
        invert: false,
      },
      pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
     breakpoints: {
      0:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      991:{
        slidesPerView: 3,
      },
      1300:{
        slidesPerView: 4,
      }
  },
});

const swiperCorghi = new Swiper('.sliderCorghi', {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  speed: 1000,
  initialSlide:0,
    spaceBetween: 1000,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-corghi',
    prevEl: '.swiper-button-prev-corghi',
  },
  mousewheel: {
        enabled: true,
        invert: false,
      },
      pagination: {
                el: '.swiper-pagination-corghi',
                dragSize:2,
                type:'progressbar',
                clickable: true,
                draggable:true,
                snapOnRelease:'true',
              },
});


const swiperTariff = new Swiper('.sliders', {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: false,
  slidesPerView: 3,
  speed: 800,
  initialSlide:0,
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  mousewheel: {
        enabled: true,
        invert: false,
      },
      // pagination: {
      //           el: '.swiper-pagination',
      //           clickable: true,
      //         },
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      991:{
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      1300:{
        slidesPerView: 3,
      }
  },
});

const swiperDelivery = new Swiper('.delivery__swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  speed: 400,
  initialSlide:0,

  mousewheel: {
        enabled: true,
        invert: false,
      },
      navigation: {
        nextEl: '.swiper-button-next-delivery',
        prevEl: '.swiper-button-prev-delivery',
      },
    //  breakpoints: {
      // 0:{
      //   slidesPerView: 1,
      // },
      // 991:{
      //   slidesPerView: 2,
      // },
      // 1300:{
      //   slidesPerView: 3,
      // }
  // },
});


// const Slider = new Swiper('.swiper', {  
//   init:'true',
//   speed: 1000,
//   initialSlide:0,
//   spaceBetween: 10,
//     direction: 'horizontal',
//     slidesPerGroup:2,
//   slidesPerView: 4,
//   effect:'slide',
//   // slideActiveClass:'.swiper-slide-active',
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   observer: true,
// observeParents: true,
// simulateTouch:true,
// parallax:true,
//   mousewheel: {
//     enabled: true,
//     invert: false,
//   },
//   // slidesPerGroup: 2,
//   // watchSlidesVisibility: true,
//   // watchSlidesProgress: true,
//   // modules: [Navigation, Thumbs],
// // pagination: {
// //     el: '.swiper-pagination',
// //     clickable: true,
// //   },
//   loop:false,
//   navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//   // thumbs: {
//   //       swiper: thumbsSlider,
//   //     },
//   // breakpoints: {
//   //   575: {
//   //     slidesPerView: 6,
//   //   },
//   //   0: {
//   //     slidesPerView: 3,
//   //   },
//   // },
  
  
// cssMode: true,
// // effect: 'swipeHandler',
//   simulateTouch: false,
// });
// // const innerSlider = new Swiper('.innerSlider', {
// //   slidesPerView: 1,
// //   slidesPerGroup: 1,
// //   modules: [Navigation, Thumbs],
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },
// //   thumbs: {
// //     swiper: thumbsSlider,
// //   },
// // });


