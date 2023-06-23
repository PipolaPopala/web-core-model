'use strict'

// секция с брендами

const brandWrapper = document.querySelector('.swiper-wrapper-brand');
const brandBtnShow = document.querySelector('.btn-show-brand');
const brandSwiper = document.querySelector('.swiper-brand');

document.addEventListener('DOMContentLoaded', () => {
const width = window.innerWidth
if (width < 426){
    const slider = new Swiper('.swiper-brand', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1.15,
        spaceBetween: 16,
        freeMode: true,
        keyboard: {
            enabled: true,
        }
    });
} else {
    brandWrapper.classList.add('brand-wrapper');
    brandBtnShow.classList.remove('visually-hidden');
    brandSwiper.classList.remove('swiper-container');
}
});

const brandShowIcDown = document.querySelector('.brand-show-ic-down');
const brandShowText = document.querySelector('.brand-show-btn-text');

brandBtnShow.addEventListener('click', brandBtnShowClickRotate);
brandBtnShow.addEventListener('click', brandBtnShowClickText);
brandBtnShow.addEventListener('click', brandBtnShowClickHeigth);

function brandBtnShowClickRotate() {
    // console.log('clickRotate'); // для проверки работы функции
    if (brandShowIcDown.style.transform == "rotate(0deg)") {
        return brandShowIcDown.style.transform = "rotate(180deg)"
    };
    if (brandShowIcDown.style.transform == "rotate(180deg)") {
        return brandShowIcDown.style.transform = "rotate(0deg)"
    };
}
function brandBtnShowClickText() {
    // console.log('clickText'); // для проверки работы функции
    if (brandShowText.textContent == "Показать все") {
        return brandShowText.textContent = "Скрыть"
    };
    if (brandShowText.textContent == "Скрыть") {
        return brandShowText.textContent = "Показать все"
    }
}
function brandBtnShowClickHeigth() {
    // console.log('clickHeigth'); // для проверки работы функции
    if (brandWrapper.style.maxHeight == "170px") {
        return brandWrapper.style.maxHeight = "100%"
    };
    if (brandWrapper.style.maxHeight == "100%") {
        return brandWrapper.style.maxHeight = "170px"
    };
}

// секция с видами техники

const typeWrapper = document.querySelector('.swiper-wrapper-type');
const typeBtnShow = document.querySelector('.btn-show-type');
const typeSwiper = document.querySelector('.swiper-type');

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 426){
        const slider = new Swiper('.swiper-type', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1.15,
            spaceBetween: 16,
            freeMode: true,
            keyboard: {
                enabled: true,
            }
        });
    } else {
        typeWrapper.classList.add('type-wrapper');
        typeBtnShow.classList.remove('visually-hidden');
        typeSwiper.classList.remove('swiper-container');
    }
    });

const typeShowIcDown = document.querySelector('.type-show-ic-down');
const typeShowText = document.querySelector('.type-show-btn-text');

typeBtnShow.addEventListener('click', typeBtnShowClickRotate);
typeBtnShow.addEventListener('click', typeBtnShowClickText);
typeBtnShow.addEventListener('click', typeBtnShowClickHeigth);

function typeBtnShowClickRotate() {
    // console.log('clickRotate'); // для проверки работы функции
    if (typeShowIcDown.style.transform == "rotate(0deg)") {
        return typeShowIcDown.style.transform = "rotate(180deg)"
    };
    if (typeShowIcDown.style.transform == "rotate(180deg)") {
        return typeShowIcDown.style.transform = "rotate(0deg)"
    };
}
function typeBtnShowClickText() {
    // console.log('clickText'); // для проверки работы функции
    if (typeShowText.textContent == "Показать все") {
        return typeShowText.textContent = "Скрыть"
    };
    if (typeShowText.textContent == "Скрыть") {
        return typeShowText.textContent = "Показать все"
    }
}
function typeBtnShowClickHeigth() {
    // console.log('clickHeigth'); // для проверки работы функции
    if (typeWrapper.style.maxHeight == "170px") {
        return typeWrapper.style.maxHeight = "100%"
    };
    if (typeWrapper.style.maxHeight == "100%") {
        return typeWrapper.style.maxHeight = "170px"
    };
}

// секция с сервисом

const serviceContainer = document.querySelector('.swiper-service');
const serviceDesctop = document.querySelector('.service-desctop');

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 700){
        const slider = new Swiper('.swiper-service', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            spaceBetween: 16,
            freeMode: true,
            keyboard: {
                enabled: true,
            }
        });
    } else {
        serviceContainer.classList.add('service-nonedisplay');
        serviceDesctop.classList.remove('visually-hidden');
    }
    });

// логика всплывающих окон

