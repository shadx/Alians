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
  
  
  
  
  
  jQuery("#slider_price").slider({
  	min: 70000,
  	max: 150000,
  	values: [110000,130000],
  	range: true,
  	stop: function(event, ui) {
  		jQuery("input#minCost").val(jQuery("#slider_price").slider("values",0));
  		jQuery("input#maxCost").val(jQuery("#slider_price").slider("values",1));
      
      jQuery("#minCostText, #maxCostText").empty();
      jQuery("#minCostText").append(jQuery("#slider_price").slider("values",0));
      jQuery("#maxCostText").append(jQuery("#slider_price").slider("values",1));
    },
    
    slide: function(event, ui){
  		jQuery("input#minCost").val(jQuery("#slider_price").slider("values",0));
  		jQuery("input#maxCost").val(jQuery("#slider_price").slider("values",1));
      
      jQuery("#minCostText, #maxCostText").empty();
      jQuery("#minCostText").append(jQuery("#slider_price").slider("values",0));
      jQuery("#maxCostText").append(jQuery("#slider_price").slider("values",1));
    }
  });
  
  
  
  
  
  
  jQuery("#slider_age").slider({
  	min: 3,
  	max: 14,
  	values: [7,11],
  	range: true,
  	stop: function(event, ui) {
  		jQuery("input#minAge").val(jQuery("#slider_age").slider("values",0));
  		jQuery("input#maxAge").val(jQuery("#slider_age").slider("values",1));
      
      jQuery("#minAgeText, #maxAgeText").empty();
      jQuery("#minAgeText").append(jQuery("#slider_age").slider("values",0));
      jQuery("#maxAgeText").append(jQuery("#slider_age").slider("values",1));
    },
    
    slide: function(event, ui){
  		jQuery("input#minAge").val(jQuery("#slider_age").slider("values",0));
  		jQuery("input#maxAge").val(jQuery("#slider_age").slider("values",1));
      
      jQuery("#minAgeText, #maxAgeText").empty();
      jQuery("#minAgeText").append(jQuery("#slider_age").slider("values",0));
      jQuery("#maxAgeText").append(jQuery("#slider_age").slider("values",1));
    }
  });
});