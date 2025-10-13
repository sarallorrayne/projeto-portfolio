const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        grabCursor: true,
        // centeredSlides: true,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

window.addEventListener("load", () => swiper.update());