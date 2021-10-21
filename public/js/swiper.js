const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

});
const swiperComment = new Swiper('.swiperComment', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
});