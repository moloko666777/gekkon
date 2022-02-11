//main.js file


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.main-swiper-button-next',
        prevEl: '.main-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

new Swiper('.guarantees-slider',{
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});

document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('accordion-toggle')) return;

    var content = document.querySelector(event.target.hash);
    if (!content) return;

    event.preventDefault();

    let toggleIcon
    if (content) toggleIcon = event.target.querySelector(".toggle-icon");

    if (toggleIcon.classList.contains('active')) {
        toggleIcon.classList.remove('active')
    } else {
        let activeIcon = document.querySelector('.toggle-icon.active')

        activeIcon ? activeIcon.classList.remove('active') : false

        toggleIcon.classList.add('active')
    }

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }

    content.classList.toggle('active');


})

document.getElementById('readMoreButton').onclick = function () {
    document.getElementById('readMore').classList.toggle('active');
    document.getElementById('rotate-icon').classList.toggle('active')
}

let openMenu = document.querySelector('#openMenu');
let activeMenu = document.querySelector('#activeMenu');
let menu = document.querySelector('#menu');
let closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', function (){
    activeMenu.classList.add('active');
    menu.classList.toggle('active');
    closeMenu.classList.remove('active');
})


document.getElementById('year').innerHTML = new Date().getFullYear();