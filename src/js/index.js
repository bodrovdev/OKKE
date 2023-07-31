// import { lock, unlock } from 'tua-body-scroll-lock';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// ? Мобильное меню
const burger = document.getElementById('burger');
const mobile_menu = document.getElementById('mobile_menu');
const main_nav = document.querySelector('.main-nav');
const nav_nav_list = document.querySelector('.main-nav__mobile-menu-list');

function openMobileMenu() {
  burger.classList.add('main-nav__burger--active');
  mobile_menu.classList.add('main-nav__mobile-menu--active');
  document.body.classList.add('body-cover');

  disableBodyScroll(mobile_menu);
}
function closeMobileMenu() {
  burger.classList.remove('main-nav__burger--active');
  mobile_menu.classList.remove('main-nav__mobile-menu--active');
  document.body.classList.remove('body-cover');

  enableBodyScroll(mobile_menu);
}

// ? Открытие / закрытие меню по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.contains('main-nav__burger--active') ? closeMobileMenu() : openMobileMenu();
})

// ? Варианты закрытия меню
document.addEventListener('click', (e) => {

  !(main_nav.contains(e.target)) || nav_nav_list.contains(e.target) && e.target.tagName === 'A' ?
    closeMobileMenu() :
    main_nav;

});

// ? --- Модалка с формой
// window.addEventListener('load', () => {
//   if (!(document.querySelector('#modal_with_form') === null)) {

//     let modal_with_form = document.getElementById('modal-with-form');
//     let modal_with_form_close = document.getElementById('modal-with-form-close');
//     let modal_with_form_buttons = document.querySelectorAll('.page-button');
//     let modal_with_form_formset = document.getElementById('modal_with_form_formset');

//     function closeFormModal() {
//       modal_with_form.classList.remove('modal-form--active');
//       unlock(modal_with_form);
//     }

// ? - Открытие модалки на нажатие кнопки
// modal_with_form_buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     modal_with_form.classList.add('modal-form--active');
//     lock(modal_with_form);
//   })
// })

// ? - Варианты закрытия модалки
// window.addEventListener('click', (e) => {
//   switch (e) {
//     case (e.target === modal_with_form_close):
//       closeFormModal();
//       break;
//     case (e.target !== e.currentTarget):
//       closeFormModal();
//       break;
//   }
// })

// ? - Подтверждение отправки модалки
//     modal_with_form_formset.addEventListener('submit', (e) => {
//       e.preventDefault();
//       document.querySelector('.modal-form__inner').classList.add('modal-form__inner--hidden');
//       document.querySelector('.modal-form__success').classList.add('modal-form__success--active');
//     })
//   }
// })

// ? --- Отключение подсветки ошибок в инпутах
window.addEventListener('load', () => {
  if (!(document.querySelectorAll('input') === null)) {
    document.querySelectorAll('input').forEach((input) => {
      input.setAttribute('spellcheck', 'false');
    })
  }
})

// ? --- Анимация фона элементов на главной странице
window.addEventListener('load', () => {
  if (!(document.querySelectorAll('.index-content__item') === null)) {

    window.innerWidth >= 1024 ?
      (function () {
        document.querySelectorAll('.index-content__item').forEach((item) => {
          item.addEventListener('mouseover', () => {
            item.classList.remove('index-content__item--bg-hidden');
          })
          item.addEventListener('mouseleave', () => {
            item.classList.add('index-content__item--bg-hidden');
          })
        })
      }()) :

      Array.from(document.querySelectorAll('.index-content__item')).map((item, index) => {
        setTimeout(() => {
          item.classList.remove('index-content__item--bg-hidden');
        }, index * 900);
      })
  }
});

// ? --- Скругление текста вокруг ссылки
window.addEventListener('load', () => {
  if (document.querySelector('.round-link') === null) {
    return;
  }
  else {
    let round_link = document.querySelector('.round-link');
    new CircleType(round_link.querySelector('.round-text'));

    // ? - Ховер для свг-изображения внутри скруглённого текста
    let play_img = round_link.querySelector('.heading__round-img');
    play_img.querySelector('path').classList.add('svg-default');
    play_img.querySelector('rect').classList.add('svg-default');

    round_link.addEventListener('mouseover', () => {
      play_img.querySelector('path').classList.add('svg-default--active');
      play_img.querySelector('rect').classList.add('svg-default--active');
    })
    round_link.addEventListener('mouseleave', () => {
      play_img.querySelector('path').classList.remove('svg-default--active');
      play_img.querySelector('rect').classList.remove('svg-default--active');
    })
  }
})

// ? --- Рейтинг в блоке отзывов и выбор источника
window.addEventListener('load', () => {
  if (!(document.querySelector('.catalogue__reviews-item') === null)) {
    let slides = document.querySelectorAll('.catalogue__reviews-item');

    slides.forEach((slide) => {

      slide.querySelectorAll('.catalogue__reviews-item-market-img').forEach((img) => {
        slide.dataset.market === img.dataset.market ? img.classList.add('catalogue__reviews-item-market-img--active') : img;
      })

      for (let i = 0; i < slide.dataset.rating; i++) {

        slide.querySelectorAll('.catalogue__reviews-item-stars').forEach(item => {
          item.innerHTML +=
            `<svg width="16" height="16" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z" fill="#EFE373"/>
          </svg>`
        })
      }
    })
  }
})

// ? --- Показать страницу только после загрузки
window.addEventListener('load', () => {
  document.body.removeAttribute('style');
})

// ? --- Кнопка "показать ещё" на главной странице
window.addEventListener('load', () => {
  if (!(document.querySelector('.brands__slider-slide') === null)) {

    let target_slides = document.querySelectorAll('.brands__slider-slide');
    target_slides.forEach(slide => {
      let target_show_button = slide.querySelector('.brands__slider-slide-showmore');
      let target_text_block = slide.querySelector('.brands__slider-slide-text');

      if (target_text_block.offsetHeight > 110) {
        target_text_block.classList.add('brands__slider-slide-text--hidden');
        target_show_button.classList.add('brands__slider-slide-showmore--active');

        target_show_button.addEventListener('click', () => {
          target_text_block.classList.toggle('brands__slider-slide-text--hidden');

          target_text_block.classList.contains('brands__slider-slide-text--hidden') ?
            target_show_button.textContent = 'Развернуть' :
            target_show_button.textContent = 'Свернуть';
        })
      }
    })
  }
})

// ? --- Отображение варианта навигации в зависимости от страницы
window.addEventListener('load', () => {
  if (!(document.querySelector('#catalogue') === null)) {
    document.querySelector('.main-nav__main-navigation').classList.add('main-nav__main-navigation--hidden');
    document.querySelector('.main-nav__catalogue-navigation').classList.add('main-nav__catalogue-navigation--active');
  }
});

// ? --- Анимация графических блоков на странице новостей
window.addEventListener('load', () => {
  if (!(document.querySelector('.news__graphic-block-img') === null)) {
    Array.from(document.querySelectorAll('.news__graphic-block-img')).map((item, index) => {
      setTimeout(() => {
        item.classList.add('news__graphic-block-img--active');
      }, index * 300)
    })
  }
})

if (!(document.querySelectorAll('.news__catalogue-item') === null)) {
  Array.from(document.querySelectorAll('.news__catalogue-item')).map((item, index) => {
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-duration', 1000);
    item.setAttribute('data-aos-delay', index * 100);
  })
}