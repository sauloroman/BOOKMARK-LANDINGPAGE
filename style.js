// #############################
// SLIDER
// #############################
const sliderButtonsCon = document.querySelector('.features__buttons');
const sliderButtons = document.querySelectorAll('.feature__button');
const sliderItems = document.querySelectorAll('.slider__item');
let position;
const btnOpenMenu = document.querySelector('.mobile__menu');
const btnCloseMenu = document.querySelector('.mobile__close');
const menuMobile = document.querySelector('.menu__mobile');
const menuMobileLinks = document.querySelectorAll('.menumobile__link');


// #############################
// SLICE
// #############################

const changeSlide = e => {

  sliderButtons.forEach( button => button.classList.remove('active'));

  const targetButton = e.target;

  // Agregar la clase de activo
  targetButton.classList.add('active');


  sliderMovement( targetButton.id );

}

const sliderMovement = sliderId => {

  position = 100;
  
  sliderItems.forEach( (sliderEl) => {
    
    const id = sliderEl.getAttribute('id');
    
    if ( id === sliderId ) {
      sliderEl.style.opacity = 1;
      sliderEl.style.transform = 'translateX(0)';
    } else {
      sliderEl.style.opacity = 0;
      sliderEl.style.transform = `translateX(${position}%)`;
      position += 100;
    }

  });

}

sliderButtonsCon.addEventListener('click', changeSlide );

// #############################
// QUESTIONS
// #############################

const questionsEl = document.querySelectorAll('.question');

questionsEl.forEach( question => {
  question.addEventListener('click', () => {
    question.classList.toggle('show-question');

    question.querySelector('.question__icon[name="chevron-down-outline"]').classList.toggle('invisible');
    question.querySelector('.question__icon[name="chevron-up-outline"]').classList.toggle('invisible');

  });
});

// #############################
// MENU
// #############################

btnOpenMenu.addEventListener('click', () => {
  menuMobile.classList.add('show');
});

btnCloseMenu.addEventListener('click', () => {
  menuMobile.classList.remove('show');
});

menuMobileLinks.forEach( link => {

  link.addEventListener('click', () => {
    menuMobile.classList.remove('show');
  });

});