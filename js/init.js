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
  
  
  $("#sort_block-item_1").click(function () {
    $("#sort_block LI").removeClass("act");
    $("#sort_block-item_1").addClass("act");
  });
  
  $("#sort_block-item_2").click(function () {
    $("#sort_block LI").removeClass("act");
    $("#sort_block-item_2").addClass("act");
  });
  
  $("#sort_block-item_3").click(function () {
    $("#sort_block LI").removeClass("act");
    $("#sort_block-item_3").addClass("act");
  });
});