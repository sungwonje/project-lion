// top-bar
// 팝업 메뉴
$('.btn-top-bar--popup').click(function () {
  $('.top-bar__popup').addClass('active');
});

$('.btn-popup-close').click(function () {
  $('.top-bar__popup').removeClass('active');
});


// section-body
// 서브메뉴 팝업
$('.btn-popup').click(function () {
  let $this = $(this);

  if ($this.hasClass('active')) {
    $this.removeClass('active');
  } else {
    $this.addClass('active');
  }
});

// 모든 챕터 확장 / 축소
$('.btn-expand').click(function () {
  $('.section-body__curriculum' + ' .btn-popup').addClass('active');
  $('.btn-expand').addClass('hidden');
  $('.btn-reduce').removeClass('hidden');
});

$('.btn-reduce').click(function () {
  $('.section-body__curriculum' + ' .btn-popup').removeClass('active');
  $('.btn-expand').removeClass('hidden');
  $('.btn-reduce').addClass('hidden');
});

// 강의소개 메뉴
$('.btn-top-sticky-menu').click(function () {
  let $this = $(this);

  $this.siblings().removeClass('pressed');
  $this.addClass('pressed');
});