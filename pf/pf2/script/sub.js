$(document).ready(function(){
	var winWidth = window.innerWidth || document.documentElement.clientWidth;
	var winHeight = window.innerHeight || document.documentElement.clientHeight;
	
	//topMenu
	$("#divTopMenu > ul > li > a").on('mouseover focus', function(){
		$("#divTopMenu ul > li.on").removeClass("on");
		$("#divTopMenu ul > li > ul.on").removeClass("on");
		$(this).parent().addClass("on");
		$(this).parent().find("> ul").addClass("on");
	});
	var searchTabIndex;
	$("#divTopMenu > ul").on('mouseover', function(){
		$("#divHeader").addClass("menu_open");
		$("#divHeader ul > li .sub_menu").hide();
		$("#divHeader ul > li .sub_menu").stop().slideDown(500);
		if($(".searchTabMenu li").is(".on")){
			searchTabIndex = $(".searchTabMenu li.on").index();
		}
		$(".searchTabMenu li.on").removeClass("on");
	});
	$("#divTopMenu > ul").on("mouseout", function(){
		var _this = $(this);
		$("#divHeader ul > li .sub_menu").show();
		$("#divHeader ul > li .sub_menu").stop().slideUp(500 ,function(){
			$("#divTopMenu ul > li.on").removeClass("on");
			$("#divTopMenu ul > li > ul.on").removeClass("on");
		});
		$("#divHeader").removeClass("menu_open");
		$(".searchTabMenu li").eq(searchTabIndex).addClass("on");
	});
	//Placeholder
	$('input, textarea').placeholder();
	
	//홀메뉴 버튼
	$("#wholeMenu .close_btn").on("click", function(){
		$("#wholeMenu").removeClass("open");
		$("#divHeader #wholeMenu .menuWrap .inner > ul").removeClass("on");
		$("#divHeader #wholeMenu .menuWrap .inner > ul > li").removeClass("on");
	});
	$(".wholeMenuBtn").on("click", function(){
		$("#wholeMenu").addClass("open");
	});
	
	//모바일 홀 메뉴
	$("#divHeader #wholeMenu .menuWrap .inner > ul > li > a").on("click", function(){
		if(1024 >= winWidth){
			var _li = $(this).closest("li");
			var _ul = $(this).closest("ul");
			_li.siblings().removeClass("on");
			_li.addClass("on");
			_ul.addClass("on");
		}
	});
	$("#divHeader #wholeMenu .menuWrap .inner > ul > li > ul > li.sub > a").on("click", function(){
		if(1024 >= winWidth){
			var _li = $(this).closest("li");
			_li.siblings().find("> ul").slideUp(400);
			_li.siblings().removeClass("on");
			if(_li.hasClass("on")){
				_li.removeClass("on");
				_li.find("> ul").slideUp(400);
				return;
			}
			_li.addClass("on");
			_li.find("> ul").slideDown(400);
		}
	});
	
	//탭메뉴 
	if($('#divTabMenu').length > 0){
		$("#divTabMenu").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-out"
		});
		$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));
		
		$(window).resize(function(){
			winWidth = window.innerWidth || document.documentElement.clientWidth;
			$("#divTabMenu").mThumbnailScroller({
				type:"click-50",
				theme:"buttons-out"
			});
			$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));
		});
	}
	
	/* Quick Menu */
	$('.quickMenu .quickClose').click(function(){
		$(".quickMenu").removeClass("open");
		$('.quickMenu .quickOpen').focus();
	});
	$('.quickMenu .quickOpen').click(function(){
		$(".quickMenu").addClass("open");
		$('.quickMenu .quickClose').focus();
	});

	var fixPosition2 = $('.headerTop').height();
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		fixPosition2 = $('.headerTop').height();
			if(scroll > fixPosition2){
				$('#divHeader' ).addClass( 'fixed' );
			}else{
				$('#divHeader').removeClass('fixed')
			}

	});

	/* 층별안내 아코디언 메뉴 */
	function floorGuide(){
		var accMenu = $('.guideAccordion > .accMenuList > li > a');
		$('.guideAccordion .accMenuList li .floorImgBox').hide();
		$('.guideAccordion .accMenuList li:nth-child(1) .floorImgBox').show();

		$(accMenu).click(function(){

			if($(this).next().css('display') == 'none'){
				$(this).parent().siblings().removeClass('open');
				$(this).parent().addClass('open');
				/* $(this).parent().siblings().children('.floorImgBox').slideUp(); */
				$(this).next().slideDown();
			}else {
				$(this).parent().removeClass('open');
				$(this).next().slideUp();
			}
			return false;
		});

	}

	floorGuide();

});

