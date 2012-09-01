$(document).ready(function(){
  $("#scroll-1").jcarousel({
    wrap: 'circular',
    auto: 0
  });
  
  $("#scroll-2").jcarousel({
    wrap: 'circular',
    auto: 0
  });
  
  $("#scroll-3").jcarousel({
    wrap: 'circular',
    auto: 0
  });
  
  $("#scroll-4").jcarousel({
    wrap: 'circular',
    auto: 0
  });
  
  $("#scroll-5").jcarousel({
    wrap: 'circular',
    vertical: true,
    scroll: 2
  });
  
  $('#big_slider').bxSlider({
    auto: true,
    autoControls: true,
    captions: true,
    pager: true,
    stopText: 'Слайд шоу',
    startText: 'Слайд шоу'
    // mode: 'fade'
  });
});