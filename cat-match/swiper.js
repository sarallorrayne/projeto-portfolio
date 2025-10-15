const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 6,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });