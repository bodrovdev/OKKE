import Swiper from 'swiper/bundle';

// ? Слайдер на главной странице
var brands_slider_init = false;

function brands_slider() {
  if (window.innerWidth <= 1024) {
    if (!brands_slider_init) {
      brands_slider_init = true;

      var brands_slider = new Swiper(".brands__slider", {
        direction: "horizontal",
        speed: 400,
        grabCursor: true,

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        },

        pagination: {
          el: ".brands__slider-pagination",
          type: 'progressbar',
          clickable: true,
        },

      });
    }
  } else if (brands_slider_init) {
    brands_slider.destroy();
    brands_slider_init = false;
  }
}

brands_slider();
window.addEventListener("resize", brands_slider);

// ? Слайдер товаров в блоке каталога
let catalogue_slider = new Swiper(".catalogue__slider", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 400,
  grabCursor: true,

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