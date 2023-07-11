window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,

      slidesPerView: 3,
      spaceBetween: 20,

      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        500: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
})