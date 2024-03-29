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

// ? --- Для модалок
// ? - Варианты закрытия модалки
function modalClosing(modal_class) {
  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector(`${modal_class}__close`)) {
      closeFormModal(modal_class);
    }
    else if (e.target !== e.currentTarget) {
      closeFormModal(modal_class);
    }
  })
}

// ? - Закрытие модалки
function closeFormModal(modal_class) {
  document.querySelector(`.${modal_class}`).classList.remove(`${modal_class}--active`);
  enableBodyScroll(modal_class);
}

// ? --- Модалка с формой
window.addEventListener('load', () => {
  if (!(document.querySelector('#modal_with_form') === null)) {

    // let modal_with_form = document.getElementById('modal-with-form');
    // let modal_with_form_close = document.getElementById('modal-with-form-close');
    // let modal_with_form_buttons = document.querySelectorAll('.page-button');
    // let modal_with_form_formset = document.getElementById('modal_with_form_formset');

    // ? - Открытие модалки на нажатие кнопки
    // modal_with_form_buttons.forEach((button) => {
    //   button.addEventListener('click', () => {
    //     modal_with_form.classList.add('modal-form--active');
    //     lock(modal_with_form);
    //   })
    // })

    // ? - Подтверждение отправки модалки
    // modal_with_form_formset.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   document.querySelector('.modal-form__inner').classList.add('modal-form__inner--hidden');
    //   document.querySelector('.modal-form__success').classList.add('modal-form__success--active');
    // })
  }
})

// ? --- Модалка без формы
window.addEventListener('load', () => {
  if (!(document.querySelector('#modal_without_form') === null) &&
    !(document.querySelector('.modal-without-form__formset') === null)) {

    let modal_without_form = document.getElementById('modal_without_form');
    let modal_without_form_formset = document.querySelector('.modal-without-form__formset');

    // ? - Открытие модалки с подтверждением отправки формы
    modal_without_form_formset.addEventListener('submit', (e) => {
      e.preventDefault();
      modal_without_form.classList.add('modal-without-form--active');
      disableBodyScroll(modal_without_form);

      modalClosing(`modal-without-form`);

      document.querySelector('.page-contacts__form-body-formset').querySelectorAll('input, textarea').forEach(item => {
        item.value = '';
      })
    })
  }
});

// ? --- Отключение подсветки ошибок в инпутах
window.addEventListener('load', () => {
  if (!(document.querySelectorAll('input') === null)) {
    document.querySelectorAll('input').forEach((input) => {
      input.setAttribute('spellcheck', 'false');
    })
  }
})

// ? --- Фон элементов на главной странице
window.addEventListener('load', () => {
  let brand_items = document.querySelectorAll('.brands__slider-slide');

  if (brand_items === null) {
    return;
  }
  else {
    brand_items.forEach(item => {
      item.addEventListener('mouseover', () => {
        brand_items.forEach(item_value => { item_value.classList.remove('brands__slider-slide--active') });
        item.classList.add('brands__slider-slide--active')
      })
    })
  }
})

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
// window.addEventListener('load', () => {
//   if (!(document.querySelector('.brands__slider-slide') === null)) {

//     let target_slides = document.querySelectorAll('.brands__slider-slide');
//     target_slides.forEach(slide => {
//       let target_show_button = slide.querySelector('.brands__slider-slide-showmore');
//       let target_text_block = slide.querySelector('.brands__slider-slide-text');

//       if (target_text_block.offsetHeight > 110) {
//         target_text_block.classList.add('brands__slider-slide-text--hidden');
//         target_show_button.classList.add('brands__slider-slide-showmore--active');

//         target_show_button.addEventListener('click', () => {
//           target_text_block.classList.toggle('brands__slider-slide-text--hidden');

//           target_text_block.classList.contains('brands__slider-slide-text--hidden') ?
//             target_show_button.textContent = 'Развернуть' :
//             target_show_button.textContent = 'Свернуть';
//         })
//       }
//     })
//   }
// })

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

// ? --- Анимация графических блоков на странице каталога товаров
// window.addEventListener('load', () => {
//   if (!(document.querySelectorAll('.catalogue__wrapper-item') === null)) {
//     Array.from(document.querySelectorAll('.catalogue__wrapper-item')).map((item, index) => {
//       item.setAttribute('data-aos', 'fade-up');
//       item.setAttribute('data-aos-duration', 1000);
//       item.setAttribute('data-aos-delay', index * 100);
//     })
//   }
// });

// ? --- Анимация блока описания
window.addEventListener('DOMContentLoaded', () => {
  if (!(document.querySelector('.description') === null)) {

    let options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelector('.description').classList.add('description--active');
        observer.disconnect();
      }
    }, options);

    observer.observe(document.querySelector('.description'));
  }
})

// ? --- Анимации блока производства
// ? - Хединг
window.addEventListener('DOMContentLoaded', () => {
  if (!(document.querySelector('.production__banner') === null)) {

    let options = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelector('.production__banner').classList.add('production__banner--active');
        observer.disconnect();
      }
    }, options);

    observer.observe(document.querySelector('.production__banner'));
  }
})

// ? - Основной контент
if (!(document.querySelector('.production__banner') === null)) {

  let production_items = [];

  document.querySelectorAll('.production__item-info').forEach(item => {
    Array.from(item.children).map(value => { production_items.push(value) });
  })

  production_items.map((item, index) => {
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-duration', '1000');
    item.setAttribute('data-aos-delay', index * 50);
  })
}

// ? - Изображения
window.addEventListener('DOMContentLoaded', () => {
  if (!(document.querySelectorAll('.production__item-image') === null)) {

    let options = {
      threshold: 0.7,
    };

    document.querySelectorAll('.production__item-image').forEach(item => {

      let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          item.classList.add('production__item-image--active');
          observer.disconnect();
        }
      }, options);

      observer.observe(item);
    })
  }
})

// ? --- Отображение нужного логотипа в зависимости от страницы
window.addEventListener('load', () => {
  document.body.setAttribute('id', document.querySelector('main').dataset.id)
})

// ? --- Передача значения выбранного радио-баттона в результирующий инпут на странице с формой обратной связи
window.addEventListener('load', () => {
  if (!(document.querySelector('.page-contacts__radio-brands-input-result') === null)) {
    let brand_inputs = document.querySelectorAll('.page-contacts__radio-input');
    let result_input = document.querySelector('.page-contacts__radio-brands-input-result');

    brand_inputs.forEach(input => {
      input.addEventListener('click', () => {
        result_input.value = input.value;
      })
    })
  }
})

// ? --- Переход на главную, если элемент для якорной ссылки отсутствует на странице
window.addEventListener('load', () => {
  let allLinks = document.querySelectorAll('a');
  Array.from(allLinks).map(item => {

    let hrefTarget = item.href.split('#')[1];

    if (item.href.includes('#') && hrefTarget.length > 0) {
      if (document.getElementById(hrefTarget) === null) {
        item.setAttribute('href', `${window.location.origin}#${hrefTarget}`);
      }
    }
  })
})

// ? --- Раскрывающийся блок на странице товара
window.addEventListener('load', () => {
  let spread_items = document.querySelectorAll('.single-goods__spread-item');
  if (spread_items === null) {
    return;
  }
  else {
    spread_items.forEach(item => {
      let item_content = item.querySelector('.single-goods__spread-item-content');

      item.addEventListener('click', () => {
        if (item.classList.contains('single-goods__spread-item--active')) {
          item.classList.remove('single-goods__spread-item--active');
          item.setAttribute('style', '');
        }
        else {
          item.classList.add('single-goods__spread-item--active');
          item.setAttribute(`style`, `height:${item_content.offsetHeight + 46}px; transition:height 0.3s;`);
        }
      })
    })
  }
})