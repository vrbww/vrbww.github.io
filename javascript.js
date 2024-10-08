const scrollLinks = document.querySelectorAll('.s-link'); // якорение до стека

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offset = 250; // меняем иногда
    const targetTop = targetSection.offsetTop - offset;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});

const topHeader = document.querySelector('.top'); // для убирания шапки при скроллинге

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) { // менять
    topHeader.classList.add('hidden');
  } else {
    topHeader.classList.remove('hidden');
  }
});

const highDo = document.querySelector('.high-do'); //красивенько сделал смену цвета на бренде

highDo.addEventListener('mouseover', () => {
  highDo.classList.toggle('hovered');
});

const high = document.querySelector('.high'); // очень красивенько меняем цвет элемента QA на наведении мышкой и оставляем его при убирании курсора

let isHovered = false;

high.addEventListener('mouseover', () => {
  if (!isHovered) {
    high.style.backgroundColor = 'black';
    high.style.color = '#FFBA00';
    isHovered = true;
  } else {
    high.style.backgroundColor = '#FFCF48';
    high.style.color = 'black';
    isHovered = false;
  }
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

// функция, которая добавляет/удаляет класс к футеру - чтобы футер прыгал при скроллинге страницы
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

