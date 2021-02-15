
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var section_end = $('#section_end').offset().top;
		
		
		
		
		if(scroll < 600){
			$('#side_nav ul li a.menu1').addClass('active');
			
		} else {
			$('#side_nav ul li a.menu1').removeClass('active');			
		}
		
		if(scroll >= 600){
			$('#side_nav ul li a.menu2').addClass('active');
		} else {
			$('#side_nav ul li a.menu2').removeClass('active');
		}
		
		if(scroll >= 2400){
			$('#side_nav ul li a.menu2').removeClass('active');
			$('#side_nav ul li a.menu3').addClass('active');
		} else {
			$('#side_nav ul li a.menu3').removeClass('active');
		}
		
		if(scroll >= 4100){
			$('#side_nav ul li a.menu3').removeClass('active');
			$('#side_nav ul li a.menu4').addClass('active');
		} else {
			$('#side_nav ul li a.menu4').removeClass('active');
		}
		
		if(scroll >= 6000){
			$('#side_nav ul li a.menu4').removeClass('active');
			$('#side_nav ul li a.menu5').addClass('active');
			
		} else {
			$('#side_nav ul li a.menu5').removeClass('active');
			
		}
		
		if(scroll > section_end-600){
			$('#side_nav ul li a.menu5').removeClass('active');
			$('#side_nav ul li a.menu6').addClass('active');
			//alert('위치 값'+section_end);
		} else {
			$('#side_nav ul li a.menu6').removeClass('active');
		}
		
	});