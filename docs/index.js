// top-bar
// 탑바 스크롤시 호버
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop == 0) {
    $('.top-bar').removeClass('hover');
  } else {
    $('.top-bar').addClass('hover');
  }
});

// 팝업 메뉴
$('.btn-top-bar--popup').click(function () {
  $('.top-bar__popup').addClass('active');
});

$('.btn-popup-close').click(function () {
  $('.top-bar__popup').removeClass('active');
});


// 슬라이더
const swiper = new Swiper('.slider-carousel .swiper-container', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",

  // 네비게이션 화살표
  navigation: {
    nextEl: '.slider-carousel .btn-swiper-right',
    prevEl: '.slider-carousel .btn-swiper-left',
  },
});