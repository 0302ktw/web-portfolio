;$(function(){	
	
	//서브메뉴 up/down
	$('.subMenu').slideUp(0);
	$('.lnb li a').click(function(){
		$('.subMenu').slideDown(450);		
	});
	
	/*$('.subMenu').mouseleave(function(){
		$('.subMenu').slideUp(450);
	}); */
	
	$('.closeBtn').click(function(){
		$('.subMenu').slideUp(450);
	});
	
	//bxSlider 1
	var slide1 = $('#slider1 .slider').bxSlider({
				  mode : 'vertical',
				  auto : true,
				  speed : 700,
				  autoControls : true,
				  pause : 5000,
				  slideHeight : 606,
				  nextText : '',
				  prevText : '',
				  startText : '',
				  stopText : '',
				  nextSelector : '.mainBtnBox .downBtn',
				  prevSelector : '.mainBtnBox .upBtn',
				});
	
	//bxslider 2
	var slide2 = $('#slider2 .slider').bxSlider({
				  auto : true,				
				  pause : 5000,
				  minSlides : 1,
				  maxSlides : 8,
				  moveSlides : 1,
				  slideWidth : 250,
				  pager : false,
				  nextText : '',
				  prevText : '',
				  startText : '',
				  stopText : '',
				  nextSelector : '.bestLRBtn .bestRightBtn',
				  prevSelector : '.bestLeftBtn',
				});
	
	
	
	//bxslider 3
	
	$('#slider3 .slider').bxSlider({
		nextText : '',
		prevText : '',
		startText : '',
		stopText : '',
		pager : true,
		nextSelector : '.eventBtn_Box .eventRight_Btn',
	    prevSelector : '.eventBtn_Box .eventLeft_Btn',
	});
	
	
	
	
	//slider1 start & pause Btn
	$('.mainStopStart_Btn .mainPause_Btn').on('click', function(){
		slide1.stopAuto();
		$('.mainStopStart_Btn .mainPause_Btn').hide();
	});	
	
	$('.mainStopStart_Btn .mainStart_Btn').on('click', function(){
		slide1.startAuto();
		$('.mainStopStart_Btn .mainPause_Btn').show();
	});
	
	//slider2 start & pause Btn
	$('.bestLRBtn .bestPauseBtn').on('click', function(){
		slide2.stopAuto();
		$('.bestLRBtn .bestPauseBtn').hide();
	});	
	
	$('.bestLRBtn .bestStartBtn').on('click', function(){
		slide2.startAuto();
		$('.bestLRBtn .bestPauseBtn').show();
	});
	
	//midTab_Nav tabMenu
	$(".tab_content").hide();
	$(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("on").css("color", "#333");
        //$(this).addClass("on").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("on").css("color", "#fff");
		$(this).css('background','#4790e6 url(images/) no-repeat left center');
		
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
	
	
	
});