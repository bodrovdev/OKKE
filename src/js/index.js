import { lock, unlock } from 'tua-body-scroll-lock'

// ? --- *Необычное* меню
let burger = document.getElementById('burger');
let page_header = document.querySelector('.page-header');

// ? - Открытие *необычного* меню по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  page_header.classList.toggle('page-header--active');
  document.body.classList.toggle('scrollbar-hidden');

  burger.classList.contains('main-nav__burger--active') ?
    (function () {
      lock(document.querySelector('.page-header__main-nav'));
    }()) :
    (function () {
      unlock(document.querySelector('.page-header__main-nav'));
    }())
})

// ? --- Модалка с формой
window.addEventListener('load', () => {
  if (!document.querySelector('#modal_with_form') === null) {

    let modal_with_form = document.getElementById('modal-with-form');
    let modal_with_form_close = document.getElementById('modal-with-form-close');
    let modal_with_form_buttons = document.querySelectorAll('.page-button');
    let modal_with_form_formset = document.getElementById('modal_with_form_formset');

    function closeFormModal() {
      modal_with_form.classList.remove('modal-form--active');
      unlock(modal_with_form);
    }

    // ? - Открытие модалки на нажатие кнопки
    modal_with_form_buttons.forEach((button) => {
      button.addEventListener('click', () => {
        modal_with_form.classList.add('modal-form--active');
        lock(modal_with_form);
      })
    })

    // ? - Варианты закрытия модалки
    window.addEventListener('click', (e) => {
      switch (e) {
        case (e.target === modal_with_form_close):
          closeFormModal();
          break;
        case (e.target !== e.currentTarget):
          closeFormModal();
          break;
      }
    })

    // ? - Подтверждение отправки модалки
    modal_with_form_formset.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector('.modal-form__inner').classList.add('modal-form__inner--hidden');
      document.querySelector('.modal-form__success').classList.add('modal-form__success--active');
    })
  }
})

// ? --- Отключение подсветки ошибок в инпутах
window.addEventListener('load', () => {
  if (!document.querySelectorAll('input') === null) {
    document.querySelectorAll('input').forEach((input) => {
      input.setAttribute('spellcheck', 'false');
    })
  }
})

// ? --- Анимация бекграунда на главной странице
document.querySelectorAll('.index-content__item').forEach((item) => item.addEventListener('mouseover', () => {
  item.classList.remove('index-content__item--hiddenbg');
}))