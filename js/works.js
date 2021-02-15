$(document).ready(function(){

/* ************************************************************************
* 요소 fade in out
************************************************************************ */
$(window).on('load scroll resize', function(){
    var $scrollTop = $(window).scrollTop();   
    var $winH = $(window).height();      
    var $contact = $scrollTop + $winH - 100;
    
    var $wlist1 = $('.wlist1').offset().top;
    var $wlist2 = $('.wlist2').offset().top;
    var $wlist3 = $('.wlist3').offset().top;
    var $wlist4 = $('.wlist4').offset().top;
    var $wlist5 = $('.wlist5').offset().top;
    var $wlist6 = $('.wlist6').offset().top;
    var $wlist7 = $('.wlist7').offset().top;
    var $wlist8 = $('.wlist8').offset().top;
    var $wlist9 = $('.wlist9').offset().top;

    
    
    if($contact >= $wlist1){if($('.wlist1').hasClass('view2')){$('.wlist1').addClass('viewed');}}else{$('.wlist1').removeClass('viewed');}
    if($contact >= $wlist2){if($('.wlist2').hasClass('view2')){$('.wlist2').addClass('viewed');}}else{$('.wlist2').removeClass('viewed');}
    if($contact >= $wlist3){if($('.wlist3').hasClass('view2')){$('.wlist3').addClass('viewed');}}else{$('.wlist3').removeClass('viewed');}
    if($contact >= $wlist4){if($('.wlist4').hasClass('view2')){$('.wlist4').addClass('viewed');}}else{$('.wlist4').removeClass('viewed');}
    if($contact >= $wlist5){if($('.wlist5').hasClass('view2')){$('.wlist5').addClass('viewed');}}else{$('.wlist5').removeClass('viewed');}
    if($contact >= $wlist6){if($('.wlist6').hasClass('view2')){$('.wlist6').addClass('viewed');}}else{$('.wlist6').removeClass('viewed');}
    if($contact >= $wlist7){if($('.wlist7').hasClass('view2')){$('.wlist7').addClass('viewed');}}else{$('.wlist7').removeClass('viewed');}
    if($contact >= $wlist8){if($('.wlist8').hasClass('view2')){$('.wlist8').addClass('viewed');}}else{$('.wlist8').removeClass('viewed');}
    if($contact >= $wlist9){if($('.wlist9').hasClass('view2')){$('.wlist9').addClass('viewed');}}else{$('.wlist9').removeClass('viewed');}
    
    
});
    
     
    
});