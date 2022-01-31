$('.btn-eye').click(function() {
  if ( $('.btn-eye-off').hasClass('hidden') ) {
    $('.btn-eye-off').removeClass('hidden');
    $('.btn-eye-on').addClass('hidden');
  }
  else {
    $('.btn-eye-on').removeClass('hidden');
    $('.btn-eye-off').addClass('hidden');
  }
});