$(document).ready(function(){

/* ************************************************************************
* 요소 fade in out
************************************************************************ */
$(window).on('load scroll resize', function(){
    var $scrollTop = $(window).scrollTop();   
    var $winH = $(window).height();      
    var $contact = $scrollTop + $winH - 100;
 
    var $textCard1H = $('.introduce1 .text-card').offset().top;
    var $textCard2H = $('.introduce2 .text-card').offset().top;
    var $textCon2H = $('.introduce2 .text-content1').offset().top;
    var $textCon3H = $('.introduce3 .text-content1').offset().top;
    var $textCon4H1 = $('.introduce4 .text-content1__title').offset().top;
    var $textCon4H2 = $('.introduce4 .text-content1__capability--L').offset().top;
    var $textCon4H3 = $('.introduce4 .text-content1__capability--R').offset().top;
    var $svg1 = $('.text-board').offset().top;
    var $svg2 = $('.cg__content').offset().top;
    var $svg3 = $('.skill-content').offset().top;
    var $bannerT = $('.bg-banner__text').offset().top;    
    var $mbR = $('.mbti-content__detail--R').offset().top;
    var $fooT = $('.footer-top__content').offset().top;
 
    
    /* console.log($scrollTop);   
       console.log($textCard1H);*/
    
 
    if($contact >= $svg1 - 100){
       if($('.text-board').hasClass('view2')){
          $('.text-board').addClass('viewed');
       }
    }else {
       $('.text-board').removeClass('viewed');
    }
 
    if($contact >= $textCard1H + 150){
       if($('.introduce1 .text-card').hasClass('view2')){
          $('.introduce1 .text-card').addClass('viewed');
       }
    }else {
       $('.introduce1 .text-card').removeClass('viewed');
    }
 
    if($contact >= $textCon2H){
       if($('.introduce2 .text-content1').hasClass('view2')){
          $('.introduce2 .text-content1').addClass('viewed');
       }
    }else {
       $('.introduce2 .text-content1').removeClass('viewed');
    }
 
    if($contact >= $svg2 + 80){
       if($('.cg__content').hasClass('view2')){
          $('.cg__content').addClass('viewed');
       }
    }else {
       $('.cg__content').removeClass('viewed');
    }
 
    if($contact >= $textCard2H + 120){
       if($('.introduce2 .text-card').hasClass('view2')){
          $('.introduce2 .text-card').addClass('viewed');
       }
    }else {
       $('.introduce2 .text-card').removeClass('viewed');
    }
 
    if($contact >= $textCon3H){
       if($('.introduce3 .text-content1').hasClass('view2')){
          $('.introduce3 .text-content1').addClass('viewed');
       }
    }else {
       $('.introduce3 .text-content1').removeClass('viewed');
    }
 
    if($contact >= $svg3 + 50){
       if($('.skill-content').hasClass('view2')){
          $('.skill-content').addClass('viewed');
       }
    }else {
       $('.skill-content').removeClass('viewed');
    }
 
    if($contact >= $bannerT){
       if($('.bg-banner__text').hasClass('view2')){
          $('.bg-banner__text').addClass('viewed');
       }
    }else {
       $('.bg-banner__text').removeClass('viewed');
    }
 
    if($contact >= $textCon4H1){
       if($('.introduce4 .text-content1__title').hasClass('view2')){
          $('.introduce4 .text-content1__title').addClass('viewed');
       }
    }else {
       $('.introduce4 .text-content1__title').removeClass('viewed');
    }
 
    if($contact >= $textCon4H2){
       if($('.introduce4 .text-content1__capability--L').hasClass('view2')){
          $('.introduce4 .text-content1__capability--L').addClass('viewed');
       }
    }else {
       $('.introduce4 .text-content1__capability--L').removeClass('viewed');
    }
 
    if($contact >= $textCon4H3 + 140){
       if($('.introduce4 .text-content1__capability--R').hasClass('view3')){
          $('.introduce4 .text-content1__capability--R').addClass('viewed');
       }
    }else {
       $('.introduce4 .text-content1__capability--R').removeClass('viewed');
    }
 
    if($contact >= $mbR){
       if($('.mbti-content__detail--R').hasClass('view2')){
          $('.mbti-content__detail--R').addClass('viewed');
       }
    }else {
       $('.mbti-content__detail--R').removeClass('viewed');
    }
 
    if($contact >= $fooT){
       if($('.footer-top__content').hasClass('view2')){
          $('.footer-top__content').addClass('viewed');
       }
    }else {
       $('.footer-top__content').removeClass('viewed');
    }
    
 
 });
 
 

});