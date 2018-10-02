$(document).ready(function() { 

  $('.header_menu').click(function() {
    $('.header_menu_ul').slideToggle(500);
  });

  $(window).resize(function() {		
		if (  $(window).width() > 1024 ) {			
			$('.header_menu_ul').removeAttr('style');
		 }
	});

  $('.show_popup').click(function() {    
    	$('.popup').show(500);
    	$('.overlay_popup').show(500);
	});

	$('.overlay_popup').click(function() {
    	$('.overlay_popup').hide(500);
    	$('.popup').hide(500);
	});
 
	$('.popup_button').click(function() {
    	$('.overlay_popup').hide(500);
    	$('.popup').hide(500);
	});
});  