$(function(){	

	/* **********************************************************************
	* window.innerWidth   <- 익스플로러9 이상 및 모던 브라우저 innerWidth 확인
      document.documentElement.clientWidth   <- 익스플로러 9 미만 innerWidth 확인
	********************************************************************** */	
	//윈도우 가로사이즈 확인
	var winWidth = window.innerWidth || document.documentElement.clientWidth;
	console.log(winWidth); 


	/* **********************************************************************
	* topInfo
	********************************************************************** */	
	$('.topInfo > div .topCloseBtn > a').click(function(){
	$('.topInfo').slideUp(300);
		return false;
    });	

	/* **********************************************************************
	* langBox
	********************************************************************** */
	$('#divGlobalMenu > ul > li.langBtn > a').click(function(){
		if($(this).next().css('display')=='none'){
			$(this).next().slideDown(200);
		}else{
			$(this).next().slideUp(200);
		}
		return false;
	});


	/* **********************************************************************
	* dim 처리
	*********************************************************************** */
	$('#dim').hide();


	/* **********************************************************************
	* subMenu 드롭다운
	*********************************************************************** */
	$('#divTopMenu > ul > li > a').on('mouseover focus', function(){
		if($('#divTopMenu > ul > li.on').length < 1){
			$('#divTopMenu > ul > li').removeClass('on');
			$(this).parent().addClass('on');
			$(this).next().slideDown(300);
			$('#dim').show();
		}else{
			$('#divTopMenu > ul > li').removeClass('on');
			$(this).parent().addClass('on');
			$('#divTopMenu > ul > li > div').hide();
			$(this).next().show();
			$('#dim').show();
		}
	});
	
	/* subMenu 닫기버튼 */
	$('#divTopMenu > div > ul > li > div .menuClose').click(function(){
		$('#divTopMenu > div > ul > li > div').slideUp(300);
		$('#divTopMenu > div > ul > li').removeClass('on');
		return false;
	});

	/* subMenu 자동 닫힘 */
	$('#divHeader').mouseleave(function(){
		$('#divTopMenu > ul > li > div').slideUp(300);
		$('#divTopMenu > ul > li').removeClass('on');
		$('#dim').hide();
	});

	

	/* **********************************************************************
	* wholeMenu 전체메뉴
	*********************************************************************** */
	/* 전체메뉴 오픈, 클로즈 버튼 */
 	$('#divTopMenu > .wholeMenuBtn > a').click(function(){
		$('.wholeMenu').fadeIn(500);
		$(this).fadeOut(500);
	});

	$('.wholeCloseBtn').click(function(){
		$('.wholeMenu').fadeOut(500);
	});
	
	/* 전체메뉴 버튼 재등장 (태블릿 ~ 모바일) */
	$('.wholeCloseBtn').click(function(){
		$('.wholeMenuBtn > a').fadeIn(500);
		return false;
	});

	/* 전체메뉴 꽉찬 디스플레이 높이 적용 */
	$('.wholeMenuBtn a').click(function(){		
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 1025){
			var bodyH = $('body').height();
			$('.wholeMenu').css('height',bodyH);
		}else{
			$('.wholeMenu').css('height','100%');
		}
		$('.wholeMenu').fadeIn(500);
		return false;
	});

	
	/* 태블릿 ~ 모바일 변경 전체메뉴 함수 */
	function miniWholeMenu(){
		$('.wholeMenu div > ul > li > ul').hide();
		$('.wholeMenu div > ul > li > ul > li > ul').hide();

		$('.wholeMenu div > ul > li > a').click(function(){
			if($(this).next().css('display') == 'none'){
				$(this).parent().siblings().removeClass('on');
				$(this).parent().addClass('on');
				$(this).parent().siblings().children('ul').slideUp();
				$(this).next().slideDown();
			}else {
				$(this).parent().removeClass('on');
				$(this).next().slideUp();
			}
			return false;			
		});

		$('.wholeMenu div > ul > li > ul > li > a').click(function(){
			if($(this).next().css('display') == 'none'){
				$(this).parent().siblings().removeClass('on');
				$(this).parent().addClass('on');
				$(this).parent().siblings().children('ul').slideUp();						
				$(this).next().slideDown();
			}else {
				$(this).parent().removeClass('on');
				$(this).next().slideUp();
			}
			return false;
		});		
	}
	
	/* 1024px부터 함수 실행 */
	winWidth = window.innerWidth || document.documentElement.clientWidth;
	if(winWidth < 1025){
		miniWholeMenu();
	}

	

	/* **********************************************************************
	* Search 탭메뉴
	*********************************************************************** */
	$('#divSearch > div .searchForm > li > a').click(function(){
		$('#divSearch > div .searchForm > li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});
	

	/* **********************************************************************
	* useHour 상하 롤링 배너
	*********************************************************************** */
	$('.useHour > div .hourControl > a.up').click(function(){
		var listH = $('.useHour > div .rollingHour > ul > li').outerHeight(true);
		if(!$('.useHour > div .rollingHour > ul').is(':animated')){
			$('.useHour > div .rollingHour > ul').animate({'top':-listH},1000,function(){
				$('.useHour > div .rollingHour > ul > li').first().appendTo('.useHour > div .rollingHour > ul');
				$('.useHour > div .rollingHour > ul').css('top','0');
			});
		}
		return false;
	});
	$('.useHour > div .hourControl > a.down').click(function(){
		var listH = $('.useHour > div .rollingHour > ul > li').outerHeight(true);
		if(!$('.useHour > div .rollingHour > ul').is(':animated')){
			$('.useHour > div .rollingHour > ul > li').last().prependTo('.useHour > div .rollingHour > ul');
			$('.useHour > div .rollingHour > ul').css('top',-listH);
			$('.useHour > div .rollingHour > ul').animate({'top':'0'},1000)
		}
		return false;
	});


	/* **********************************************************************
	* quickMenu (모바일에서만)
	*********************************************************************** */	
	$('.quickMenuW > .quickPrev').click(function(){
		var listW = $('.quickMenuW > div > ul > li').width();
		var listCnt = $('.quickMenuW > div > ul > li').length;	// 여기선 필요가 없음
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		
		if(!$('.quickMenuW > div > ul').is(':animated')){
			$('.quickMenuW > div > ul > li').last().prependTo('.quickMenuW > div > ul');
			$('.quickMenuW > div > ul').css('left',-listW);
			$('.quickMenuW > div > ul').animate({'left':'0'},400);
		}
		return false;
	});

	$('.quickMenuW > .quickNext').click(function(){
		var listW = $('.quickMenuW > div > ul > li').width();		

		if(!$('.quickMenuW > div > ul').is(':animated')){			
			$('.quickMenuW > div > ul').animate({'left':-listW},400,function(){
				$('.quickMenuW > div > ul').css('left','0');
				$('.quickMenuW > div > ul > li').first().appendTo('.quickMenuW > div > ul');
			});
		}
		return false;
	});


	/* **********************************************************************
	* event 말줄임
	*********************************************************************** */
	$('.eventDetail').dotdotdot({
		ellipsis:'...',
		watch:false,
		wrap:'letter',
		height:40,
		tolerance:20,
		
	});
	

	/* **********************************************************************
	* event 슬라이드 (태블릿부터)
	*********************************************************************** */
	$('.event > a.prev').click(function(){
		var listW = $('.event > div > ul > li').width();
		if(!$('.event > div > ul').is(':animated')){
			$('.event > div > ul > li').last().prependTo('.event > div > ul');
			$('.event > div > ul').css('left',-listW);
			$('.event > div > ul').animate({'left':'0'},400);
		}
		return false;
	});
	$('.event > a.next').click(function(){
		var listW = $('.event > div > ul > li').width();
		if(!$('.event > div > ul').is(':animated')){
			$('.event > div > ul').animate({'left':-listW},400,function(){
			$('.event > div > ul').css('left','0');
			$('.event > div > ul > li').first().appendTo('.event > div > ul');
			});
		}
		return false;
	});
	


	/* **********************************************************************
	* Book
	*********************************************************************** */
	/* 신착자료 | 인기자료 탭메뉴 */
	$('.book > ul > li > a.tab').click(function(){
		$('.book > ul > li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});
	
	/* Book 슬라이드 이전 버튼 클릭 */
	$('.book > ul > li.on > div > a.bookPrev').click(function(){
		var listW = $('.book > ul > li.on > div > div > ul > li').width();
		var listCnt = $('.book > ul > li.on > div > div > ul > li').length;		
		winWidth = window.innerWidth || document.documentElement.clientWidth;

		if(winWidth > 1024 && listCnt > 4){
			if(!$('.book > ul > li.on > div > div > ul').is(':animated')){
				$('.book > ul > li.on > div > div > ul > li').last().prependTo('.book > ul > li.on > div > div > ul');
				$('.book > ul > li.on > div > div > ul').css('left',-listW);
				$('.book > ul > li.on > div > div > ul').animate({'left':'0'},400);
			}
		}
		if(winWidth < 1025 && listCnt > 2){
			if(!$('.book > ul > li.on > div > div > ul').is(':animated')){
				$('.book > ul > li.on > div > div > ul > li').last().prependTo('.book > ul > li.on > div > div > ul');
				$('.book > ul > li.on > div > div > ul').css('left',-listW);
				$('.book > ul > li.on > div > div > ul').animate({'left':'0'},400);
			}
		}
		return false;
	});

	/* Book 슬라이드 다음버튼 클릭 */
	$('.book > ul > li.on > div > a.bookNext').click(function(){
		var listW = $('.book > ul > li.on > div > div > ul > li').width();
		var listCnt = $('.book > ul > li.on > div > div > ul > li').length;
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth > 1024 && listCnt > 4){
			if(!$('.book > ul > li.on > div > div > ul').is(':animated')){
				$('.book > ul > li.on > div > div > ul').animate({'left':-listW},400,function(){
					$('.book > ul > li.on > div > div > ul').css('left','0');
					$('.book > ul > li.on > div > div > ul > li').first().appendTo('.book > ul > li.on > div > div > ul');
				});
			}
		}
		if(winWidth < 1025 && listCnt > 2){
			if(!$('.book > ul > li.on > div > div > ul').is(':animated')){
				$('.book > ul > li.on > div > div > ul').animate({'left':-listW},400,function(){
					$('.book > ul > li.on > div > div > ul').css('left','0');
					$('.book > ul > li.on > div > div > ul > li').first().appendTo('.book > ul > li.on > div > div > ul');
				});
			}
		}
		return false;
	});



	/*********************************************************************** 

	/* eventZone 슬라이드 // append, prepend 방식 부적합 취소
	
	var $ezSlide = $('.eventZone > ul'),
		$firstSlide = $ezSlide.find('li').first().stop(true).animate({'opacity':1},200); 	//첫번째 슬라이드

	function prevEzSlide(){
		var $lastSlide = $ezSlide.find('li').last().prependTo($ezSlide); //마지막 슬라이드를 맨 앞으로 보내기
		$secondSlide = $ezSlide.find('li').eq(1).stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    	$firstSlide = $ezSlide.find('li').first().stop(true).animate({'opacity':1},400); //맨 처음 슬라이드 다시 구하기 //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
	}

	function nextEzSlide(){
		$firstSlide = $ezSlide.find('li').first().appendTo($ezSlide); //첫번째 슬라이드를 맨 마지막으로
		var $lastSlide = $ezSlide.find('li').last().stop(true).animate({'opacity':0},400);	//맨 마지막으로 보낸 슬라이드 fadeOut 시키기
		$firstSlide = $ezSlide.find('li').first().stop(true).animate({'opacity':1},400);	//맨 처음 슬라이드 fadeIn 시키기
	}
	
	/*************************************************************************
	


	/* **********************************************************************
	* eventZone 슬라이드
	*********************************************************************** */
	var num = $('.eventZone ul li').length;	
	var cnt = $('.eventZone > ul > li.on').length;
	console.log(num);	// 4개		index : 0, 1, 2, 3
	console.log(cnt);	// 1개		index : 0

	/* 슬라이드 인덱스번호에 따른 숫자 변화 */
	$('.controller .leftCnt').text(cnt);	// 최초 1 

	function banner () {
		$('.eventZone > ul > li').removeClass('on');
		$('.eventZone ul').find('li').eq(cnt).addClass('on');
		$('.controller .leftCnt').text(cnt+1);
	}	

	/* eventZone 이전버튼 클릭 */
	$('.eventZone .eventZonePrev').click(function(){	
		cnt = $('.eventZone > ul > li.on').index();	
		cnt--;
		if(cnt<0){cnt=num-1}
		banner();
		return false;
	});

	/* eventZone 다음버튼 클릭 */
	$('.eventZone .eventZoneNext').click(function(){
		cnt = $('.eventZone > ul > li.on').index();
		cnt++;		
		if(cnt>3){cnt=num-4}
		banner();
		return false;
	});


	/* **********************************************************************
	* banner
	*********************************************************************** */	
	/* 태블릿 ~ 모바일 오토배너 함수 */
	
	var cancel = false;	
	winWidth = window.innerWidth || document.documentElement.clientWidth;

	function autoBanner(){
		var auto = setInterval(function(){
			var listW = $('.banner .bannerList ul li').width();
			$('.banner .bannerList ul').animate({'left':-listW},1000,function(){
				$('.banner .bannerList ul li').first().appendTo('.banner .bannerList ul');
				$('.banner .bannerList ul').css('left','0');
			});
		},4000);
		$('.banner .controller a.pause').click(function(){
			$(this).hide();
			$('.banner .controller a.play').show();
			clearInterval(auto);
			return false;
		});
	}
	/* 	if(winWidth >= 1025){
			cancel = true;
		} */
	
		if(winWidth < 1024 && cancel === false){
			autoBanner();
			return false;
		}


	/* 배너 재생버튼 */
	$('.banner .controller a.play').click(function(){
		$(this).hide();
		$('.banner .controller a.pause').show();
		if(winWidth < 1025){
			autoBanner();
		}
		return false;
	});

	/* 배너 이전버튼 */
	$('.banner .controller a.prev').click(function(){
		var listW = $('.banner .bannerList ul li').width();
		if(!$('.banner .bannerList ul').is(':animated')){
			$('.banner .bannerList ul li').last().prependTo('.banner .bannerList ul');
			$('.banner .bannerList ul').css('left',-listW);
			$('.banner .bannerList ul').animate({'left':'0'},1000);
		}
		return false;
	});

	/* 배너 다음버튼 */
	$('.banner .controller a.next').click(function(){
		var listW = $('.banner .bannerList ul li').width();
		if(!$('.banner .bannerList ul').is(':animated')){
			$('.banner .bannerList ul').animate({'left':-listW},1000,function(){
				$('.banner .bannerList ul li').first().appendTo('.banner .bannerList ul');
				$('.banner .bannerList ul').css('left','0');
			});
		}
		return false;
	});



	/* **********************************************************************
	* footerTop 아코디언 메뉴
	*********************************************************************** */
	$('#divFooter .footerTop > div > ul > li > a').click(function(){
		if(!$(this).next().is(':animated')){
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
				$(this).next().slideUp(250);
			}else{
				$(this).parent().addClass('on');
				$(this).next().slideDown(250);
			}
		}
		return false;
	});
	


});