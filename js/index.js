import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();


import {
    toggleActive,
    tabs
} from "./module.js";

window.toggleActive = toggleActive;
window.tabs = tabs;
document.querySelector('#defaultProduct').click();


const resident = new Swiper(".resident__slider", {
    cssMode: true,
    loop: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".resident__slider_btn.next",
        prevEl: ".resident__slider_btn.prev",
    },
    pagination: {
        el: ".resident__slider_pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});


const productContent = new Swiper(".productContent", {
    cssMode: false,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".product__slider_btn.next",
        prevEl: ".product__slider_btn.prev",
    },
    pagination: {
        el: ".product__slider_pagination",
    }
});


function sliderMobile() {
    if (document.body.clientWidth < 576) {
        const result = new Swiper(".resultSlider", {
            cssMode: false,
            spaceBetween: 20,
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: ".result__slider_btn.next",
                prevEl: ".result__slider_btn.prev",
            },
            pagination: {
                el: ".result__slider_pagination",
            }
        });
        const tarif = new Swiper(".tarifSlider", {
            cssMode: false,
            spaceBetween: 20,
            loop: true,
            allowTouchMove: false,
            slidesPerView: 1,
            navigation: {
                nextEl: ".tarif__slider_btn.next",
                prevEl: ".tarif__slider_btn.prev",
            },
            pagination: {
                el: ".tarif__slider_pagination",
            }
        });

        let slide = document.querySelector('.tarifSlider .swiper-slide-active');
        document.querySelector('.tarif__elems').style.height = slide.clientHeight + 'px';

        let btns = document.querySelectorAll('.tarif__slider_btn');
        btns.forEach(element => {
            element.addEventListener('click', function () {
                slide = document.querySelector('.tarifSlider .swiper-slide-active');
                document.querySelector('.tarif__elems').style.height = slide.clientHeight + 'px';
            })
        });
    }
}
sliderMobile();

window.addEventListener('resize', function () {
    adaptive();
    sliderMobile();
});