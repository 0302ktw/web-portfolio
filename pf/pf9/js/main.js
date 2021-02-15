$(function(){
	
	
	// "toggle 메소드" "css 컨트롤" 기능 구현을 위해 구버전 jQuery 프레임워크 사용
	
	
	
	$('.toggle').toggle(
		function(){
			$(this).siblings().css('bottom','-153vw');
			$(this).css('position','fixed');
			$(this).css('bottom','-12vw');
		},
		function(){
			//$(this).css('bottom','-60vw');
			$(this).css('position','absolute');
			$('.key3').css('bottom','-105vw');
			$('.key4').css('bottom','-118vw');
			$('.key5').css('bottom','-130.5vw');			
		});
	
	
	/* 기존 코드
	
	$('.key3 .client_header').click(function(){
		$('.key3').css('bottom','19vw');
		$('.key4').css('bottom','-153vw');
		$('.key5').css('bottom','-153vw');
	});
	
	$('.key4 .client_header2').click(function(){
		$('.key4').css('bottom','19vw');
		$('.key3').css('bottom','-150vw');
		$('.key5').css('bottom','-153vw');
	});
	
	$('.key5 .client_header3').click(function(){
		$('.key5').css('bottom','19vw');
		$('.key3').css('bottom','-150vw');
		$('.key4').css('bottom','-153vw');
	});*/
	
});