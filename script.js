'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//------------------------

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coorde = section1.getBoundingClientRect();

  // console.log(s1coorde);
  // console.log(e.target.getBoundingClientRect());
  // console.log(e.target.getBoundingClientRect());
  // console.log('currnt', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/with',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //modall 1 
  // window.scrollTo(s1coorde.left + window.pageXOffset, s1coorde.top + window.pageYOffset)
  //modall 2 
  window.scroll({
    left: s1coorde.left + window.pageXOffset,
    top: s1coorde.top + window.pageYOffset,
    behavior: 'smooth'
  })

})
document.querySelector('.nav__links').addEventListener('click' , function(e){
  e.preventDefault();
  //Matching stratrgy
  if(e.target.classList.contains('nav__link')) {
  const id = e.target.getAttribute('href')
  document.querySelector(id).scrollIntoView({
    //soft scroll
    behavior: 'smooth'           
  })
}
})

//
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb ${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)}`
//console.log(randomColor);

//-----------------
//---Tabbed component
//btn operations__tab operations__tab--2

tabsContainer.addEventListener('click', function(e) {
 const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//operations__content operations__content--2


// menu fade animation 
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
     // find nav and all nav__link & parent
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //fine logo
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => { 
      if (el !== link) { 
        el.style.opacity = opacity; 
      }
    });
    if (logo) { 
      logo.style.opacity = opacity; 
    }
  }
};

nav.addEventListener('mouseover', function(e) {
  handleHover(e, 0.5); 
});
nav.addEventListener('mouseout', function(e) {
  handleHover(e, 1);
});

//----sticky navigation 
//mpdal 1 
// const initialCoords= section1.getBoundingClientRect();

// window.addEventListener('scroll' , function(){
//   console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top)nav.classList.add('sticky')
//     else nav.classList.remove('sticky');  
// })


//---- api compiresectionObserver ----
//mpdal 2 the best 

const obsCallback = function(entries,observe){
  entries.forEach(entry => {
    console.log(entry);
  })
}
const obsOptions = {
  root : null , 
  threshold : 0.1 
}
const observe = new IntersectionObserver(obsCallback,obsOptions)
//Observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function(entries){
  const [entry] = entries;
  if (!entry.isIntersecting ) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver (stickyNav , 
  {root : null , 
  threshold : 0 ,
  rootMargin: `-${navHeight}px`
})
headerObserver.observe(header);


// Reveal sections----------------------------------------------------
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});




//slider
//slide--1
//slide slide--2
//slide slide--3