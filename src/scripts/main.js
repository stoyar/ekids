var daysInYear = 365;
let hoursInDay = 24;
const minutesInHour = 60;

const minutesInDay = hoursInDay * minutesInHour;

let age = 18;
let Dmitro = 14;

function checkAge(userAge, allowedAge) {
  if (userAge < allowedAge) {
    console.log('Доступ запрещен');

    alert('Доступ запрещен для возраста ' + userAge + ' лет');
  } else if (userAge < 100) {
    console.log('Добро пожаловать!');

    alert('Добро пожаловать!');
  } else {
    console.log('ВЫ РОБОТ???');
    
    alert('ВЫ РОБОТ???');
  }
}

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
