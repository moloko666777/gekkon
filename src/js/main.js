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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

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
        console.log(document.querySelector('.toggle-icon.active'))
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

    // for (var i = 0; i < toggleIcon.length; i++) {
    //     toggleIcon[i].classList.remove('active');
    // }
    // toggleIcon.classList.toggle("active");

})

// document.addEventListener('click', function (event){
//
//     event.preventDefault();
//
//
//     let toggleIcon = document.querySelector(".toggle-icon");
//
//     for (var i = 0; i < toggleIcon.length; i++) {
//         toggleIcon[i].classList.remove('active');
//     }
//     toggleIcon.classList.toggle("active");
// })

document.getElementById('year').innerHTML = new Date().getFullYear();