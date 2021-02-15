$(function(){
	
	/* 탑 메뉴 */
	$('#sub_menu, .sub_container').hide();

	$('.gnb_title1').mouseenter(function(){
		$('#sub_menu, .sub_container').hide();
		$('#sub_menu, .sbc1').show();
		
	});
	
	$('.gnb_title2').mouseenter(function(){	
		$('#sub_menu, .sub_container').hide();
		$('#sub_menu, .sbc2').show();
		
	});
	
	$('.gnb_title3').mouseenter(function(){	
		$('#sub_menu, .sub_container').hide();
		$('#sub_menu, .sbc3').show();
	});
	
	$('.gnb_title4').mouseenter(function(){
		$('#sub_menu, .sub_container').hide();
		$('#sub_menu, .sbc4').show();
	});
	
	$('.gnb_title5').mouseenter(function(){
		$('#sub_menu, .sub_container').hide();
		$('#sub_menu, .sbc5').show();
	});
	
	$('.gnb_title6').mouseenter(function(){
		$('#sub_menu, .sub_container').hide();
		$('#sub_menu, .sbc6').show();
		
	});
	
	
	$('.sub_container').mouseleave(function(){
		$('#sub_menu, .sub_container').hide();
	});
	
	
	/* PC 전체 메뉴 버튼 */
	$('#all_sub_menu').hide();
	
	$('#all_menu_btn').click(function(){
		$('#sub_menu, .sub_container').hide();
		$('#all_sub_menu').show();
	});
	
	$('#all_sub_menu').mouseleave(function(){
		$('#all_sub_menu').hide();
	});
	
	/* 모바일 전체 메뉴 버튼 & dim 처리 */
	$('.dim').hide();
	$('#all_mobile_btn').on('click',function(){
		$('#all_mobile_container').addClass('on');
		$('.dim').show();
	});
	
	$('.all_close,.dim').on('click',function(){
		$('#all_mobile_container').removeClass('on');
		$('.dim').hide();
	});
	
	/* 하단 knav 텍스트박스 초기값 */
	$('.ktb').hide();
	$('.k_text_box1').show();
	/* 하단 knav 탭메뉴 */	
	$('.k_visual_nav li').on('click',function(){
		$('.ktb').hide();
		$('.k_text_box1').show();		
		$('.k_visual_nav li').removeClass('knav_on');
		$(this).addClass('knav_on');		
	});
	
	$('.knav_item1').on('click',function(){		
		$('.ktb').hide();
		$('.k_text_box1').show();
		$('#k_visual').css('background','url(images/key_visual.png) no-repeat center center/cover');
	});
	
	$('.knav_item2').on('click',function(){
		$('.ktb').hide();
		$('.k_text_box2').show();
		$('#k_visual').css('background','url(images/key_visual2.jpg) no-repeat 0% 50px/cover');
	});
	
	$('.knav_item3').on('click',function(){
		$('.ktb').hide();
		$('.k_text_box3').show();		
		$('#k_visual').css('background','url(images/key_visual3.jpg) no-repeat center center/cover');
	});
	
	$('.knav_item4').on('click',function(){
		$('.ktb').hide();
		$('.k_text_box4').show();
		$('#k_visual').css('background','url(images/key_visual4.jpg) no-repeat center center/cover');
	});
	
	$('.knav_item5').on('click',function(){
		$('.ktb').hide();
		$('.k_text_box5').show();
		$('#k_visual').css('background','url(images/key_visual5.jpg) no-repeat center center/cover');
	});
	

});