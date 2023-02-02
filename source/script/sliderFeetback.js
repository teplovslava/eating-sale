document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 70,

    breakpoints: {
      428: {
        slidesPerView: 'auto',
        spaceBetween: 20
      }
    }
  });
})