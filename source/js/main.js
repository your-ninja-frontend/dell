// MENU

const buttonMenu = document.querySelector('.button-menu');
const listMenu = document.querySelector('.menu');
const body = document.body;

function toggleMenu() {
  listMenu.classList.toggle('menu--open');
  buttonMenu.classList.toggle('button-menu--open');
  buttonMenu.classList.toggle('button-menu--close');
  body.classList.toggle('overflow-hidden');
}

buttonMenu.addEventListener('click', toggleMenu);


// SLIDER

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});


// TEL VALIDATE

const inputTel = document.getElementById('form-tel');
const form = document.getElementById('form-callback');
const formButton = document.getElementById('form-button');
const spanError = document.getElementById('form-callback-error');

const reg = /[\d][\d]{10}/g;

function validateTel(e) {
  e.preventDefault();
  let validate = reg.test(inputTel.value);
  if (validate) {
    spanError.textContent = '';
    form.submit();
  } else {
    spanError.textContent = 'Необходимо указать номер телефона в формате 79999999999 или 89999999999';
  }
}

form.addEventListener('submit', validateTel);
