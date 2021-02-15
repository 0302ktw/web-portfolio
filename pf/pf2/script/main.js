$(document).ready(function(){
	var winWidth = window.innerWidth || document.documentElement.clientWidth;
	var winHeight = window.innerHeight || document.documentElement.clientHeight;

	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		winHeight = window.innerHeight || document.documentElement.clientHeight;
		if(1024 < winWidth){
			$(".magazine").fn_slide({
				autoPlay:false
				,duration:400
				,easing:"swing"
				,slidesView:2
				,prevBtn:$(".magazine .prev_move_btn")
				,nextBtn:$(".magazine .next_move_btn")
			});
			
			$(".quickMenu .slide > ul > li").sort(sort_li).appendTo('.quickMenu .slide > ul');
			function sort_li(a, b) {
				return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
			}
		}else{
			$(".magazine").fn_slide({
				autoPlay:false
				,duration:400
				,easing:"swing"
				,slidesView:1
				,prevBtn:$(".magazine .prev_move_btn")
				,nextBtn:$(".magazine .next_move_btn")
			});
		}
	});
	$(window).resize();
	/*상단공지*/
	$('.topInfo .infoClose').click(function(){
		var divHeight = $('#divWrapper').height() - $('.topInfo').height();
		$('#wholeMenu div.menuWrap').css('height',divHeight);
		$('.topInfo').slideUp(400, 'easeInOutExpo');
	});
	
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
	
	//검색 탭버튼
	$(".searchTabMenu li").on("click", function(){
		if($(this).is(".on")) return;
		var _id = $(this).find("a").attr("href");
		var _set = $(this).closest(".tabSet");
		_set.find(".searchTabMenu li.on").removeClass("on");
		$(this).addClass("on");
		_set.find(".tabContent.on").removeClass("on");
		_set.find(_id+"View").addClass("on");
	});
	
	//메인상단인트로
	/* var mainVisualST;
	var mainVisualIndex = 0;
	function mainVisual(){
		mainVisualST = setTimeout(function() {
			$(".mainVisual .visualImg.on").removeClass("on");
			$(".mainVisual .visualImg").eq(mainVisualIndex).addClass("on");
			mainVisualIndex++;
			if(mainVisualIndex >= $(".mainVisual .visualImg").length){
				mainVisualIndex = 0;
			}
			mainVisual();
		}, 8000);
	}
	mainVisual(); */
	
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
	
	$("#divSearch .searchTabMenu li").on("click", function(){
		var _id = $(this).find("a").attr("href");
		var _set = $(this).closest(".tabSet");
		_set.find(".tabBtn li.on").removeClass("on");
		$(this).addClass("on");
		_set.find(".searchArea.on").removeClass("on");
		_set.find(_id+"View").addClass("on");
	});
	
	//퀵메뉴 슬라이드
	function quickSlideMovePrev (){
		var _slideUL = $(".quickMenu .slide > ul");
		var _slideLIWidth = $(".quickMenu .slide > ul > li").outerWidth(true);
		if(!_slideUL.is(':animated')){
			_slideUL.css('left',-_slideLIWidth);
			_slideUL.children().last().prependTo(_slideUL);
			_slideUL.animate({left:'0'},400);
		}
	}
	function quickSlideMoveNext (){
		var _slideUL = $(".quickMenu .slide > ul");
		var _slideLIWidth = $(".quickMenu .slide > ul > li").outerWidth(true);
		if(!_slideUL.is(':animated')){
			_slideUL.animate({'left':-_slideLIWidth},400,function() {
				_slideUL.children().first().appendTo(_slideUL);
				_slideUL.css('left','0');
			});
		}
	}
	$(".quickMenu .prev_btn").on("click", function(){
		quickSlideMovePrev();
	});
	$(".quickMenu .next_btn").on("click", function(){
		quickSlideMoveNext();
	});
	
	//전자정보원 더보기
	$(".dbInfo .more_btn").on("click", function(){
		if($(".dbInfo").is(".more")){
			$(".dbInfo").removeClass("more");
		}else{
			$(".dbInfo").addClass("more");
		}
	});
	
	//개관시간 selextbox
	$(".cst_select > a").on("click", function(){
		var _this = $(this);
		var _parent = $(this).closest(".cst_select");
		if(_parent.is(".on")){
			_parent.removeClass("on");
			return;
		}
		_parent.addClass("on");
		$(_parent).find("> ul > li").on("click", function(){
			$(this).siblings().removeClass("selected");
			$(this).addClass("selected")
			_this.text($(this).text());
			_parent.removeClass("on");
			_parent.find("> ul > li").unbind();
		});
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
});

