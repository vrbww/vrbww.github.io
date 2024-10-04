const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offset = 100; // измените это значение на необходимое для вашего сайта
    const targetTop = targetSection.offsetTop - offset;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});
const topHeader = document.querySelector('.top'); // для шапки и убирании при скроллинге

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) { // измените значение 200 на необходимое для вашего сайта
    topHeader.classList.add('hidden');
  } else {
    topHeader.classList.remove('hidden');
  }
});

const highDo = document.querySelector('.high-do');

highDo.addEventListener('mouseover', () => {
  highDo.classList.toggle('hovered');
});

// функция, которая проверяет, находится ли футер в нижней части страницы
function isFooterAtBottom() {
  var footer = $('.footer');
  var footerHeight = footer.outerHeight();
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var documentHeight = $(document).height();
  var bodyHeight = $('body').height();

  return bodyHeight <= windowHeight + scrollTop;
}

// функция, которая добавляет/удаляет класс к футеру
function toggleFooterClass() {
  var footer = $('.footer');
  var footerHeight = footer.outerHeight();
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var documentHeight = $(document).height();

  if (scrollTop + windowHeight >= documentHeight - footerHeight) {
    footer.addClass('fixed');
  } else {
    footer.removeClass('fixed');
  }
}

// вызываем функцию при прокрутке страницы
$(window).scroll(function() {
  toggleFooterClass();
});

$(document).ready(function() {
  toggleFooterClass();
});