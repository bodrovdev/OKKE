import Swiper from 'swiper/bundle';

// ? Слайдер на главной странице
let index_slider = new Swiper(".brands__slider", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 400,
  grabCursor: true,

  breakpoints: {
    320: {
      effect: "creative",
    },
    768: {
      effect: "slide",
    },
  },

  creativeEffect: {
    prev: {
      shadow: true,
      scale: 0.8,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  pagination: {
    el: ".brands__slider-pagination",
    type: 'progressbar',
    clickable: true,
  },

  navigation: {
    nextEl: '.brands__slider-navigation-arrow--next',
    prevEl: '.brands__slider-navigation-arrow--prev',
  },

});

// ? Слайдер товаров в блоке каталога
let catalogue_slider = new Swiper(".catalogue__slider", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 400,
  grabCursor: true,

  breakpoints: {
    320: {
      effect: "creative",
    },
    768: {
      effect: "slide",
    },
  },

  creativeEffect: {
    prev: {
      shadow: true,
      scale: 0.8,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  pagination: {
    el: ".catalogue__slider-pagination",
    type: 'progressbar',
    clickable: true,
  },

  navigation: {
    nextEl: '.catalogue__slider-navigation-arrow--next',
    prevEl: '.catalogue__slider-navigation-arrow--prev',
  },
});

// ? Мобильный слайдер
// var mobile_slider_init = false;

// function mobile_slider() {
//   if (window.innerWidth <= 1024) {
//     if (!mobile_slider_init) {
//       mobile_slider_init = true;

//       var mobile_slider = new Swiper(".mobile-slider-class", {
//         direction: "horizontal",
//         spaceBetween: 25,

//         breakpoints: {
//           320: {
//             slidesPerView: 1
//           },
//           768: {
//             slidesPerView: "auto"
//           },
//         },

//         pagination: {
//           el: ".mobile-slider-class__pagination",
//           clickable: true,
//         },

//       });
//     }
//   } else if (mobile_slider_init) {
//     mobile_slider.destroy();
//     mobile_slider_init = false;
//   }
// }
// mobile_slider();
// window.addEventListener("resize", mobile_slider);

// ? Обычный слайдер
// let regular_slider = new Swiper(".regular-slider-class", {
//   direction: "horizontal",
//   spaceBetween: 25,

//   breakpoints: {
//     320: {
//       slidesPerView: 1
//     },
//     768: {
//       slidesPerView: "auto",
//     },
//   },

//   navigation: {
//     nextEl: '.regular-slider-class__arrow--next',
//     prevEl: '.regular-slider-class__arrow--prev',
//   },

//   pagination: {
//     el: ".regular-slider-class__pagination",
//     clickable: true,
//   },
// });