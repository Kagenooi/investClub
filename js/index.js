import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive() });


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
    slidesPerView: 3,
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
});