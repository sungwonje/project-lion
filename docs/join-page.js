// 전체동의
$('.checkbox-agree-all').change(function() {
  if ( this.checked ) {
    $('.checkbox-agree:not(:checked)').prop('checked', true);
  }
  else {
    $('.checkbox-agree:checked').prop('checked', false);
  }
});

$('.checkbox-agree').change(function() {
  let allChecked = $('.checkbox-agree:not(:checked)').length == 0;
  $('.checkbox-agree-all').prop('checked', allChecked);
});