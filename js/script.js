"use strict";
/*----burger-----*/
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu-header');
const body = document.body;
const header = document.querySelector('.header')

function burgerFunc (event) {
    const targetElement = event.target;

    if (targetElement.closest('.header__burger')) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
        header.classList.toggle('active');
    };
};

document.addEventListener('click', burgerFunc);

/*----slider-----*/
const swiper = new Swiper('.slider-image', {
    /*  ------стрілки---------
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    */



    /*--------булети------*/

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets', 
        clickable : false,

        /*-----динамічні булети---*/
        dynamicBullets: false,
    },


    /*-----можливість перетягувати на ПК---*/
    simulateTouch: true,

    /*-----курсор перетягування------*/
    grabCursor: true,




    /* -----управління колесом миші----
        mousewheel: {
            /--в яку сторону--/
            invert: true,
        },
    */


    
    /*--кількість слайдів для показу---*/
    slidesPerView: 1,
    
    /*--кількість пролистуємих слайдів слайдів---*/
    slidesPerGroup: 1,



    /*-----відступ між слайдами-----*/
    spaceBetween: 30,




    /*-----безкінечний слайер-----*/
    loop: true,

    /*------вільний режим--------*/
    freeMode: false,




    /*--------брекпоінти---------*/
    breakpoints: {
        450: {
            slidesPerView: 2,
        },

        767: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 4,
        },

        1100: {
            slidesPerView: 5,
        },
    },  
})

/*--------------зменшення висоти шапки при скроллі-----------------*/
const headerConteiner = document.querySelector('.header__conteiner');
const stiki = headerConteiner.clientHeight;

function myFunction () {
    if (window.scrollY > stiki) {
        headerConteiner.classList.add('scroll');
    } else {
        headerConteiner.classList.remove('scroll');
    };
}


document.addEventListener('scroll', myFunction);




























