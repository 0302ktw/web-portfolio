$(function(){
var didScroll;
var lastScrollTop = 0;
var delta = 5; //동작의 구현이 시작되는 위치
var navbarHeight = $('header').outerHeight(); //영향을 받을 요소를 선택

// 사용자의 스크롤 감지
$(window).scroll(function(event){
	didScroll = true;
	
});


// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function(){
	if(didScroll){
		hasScrolled();
		didScroll = false;
	}		
}, 200);

//동작 구현
function hasScrolled(){
	// 현재 스크롤의 위치 저장
	var st = $(this).scrollTop();
	
	// 설정한 delta 값보다 더 스크롤되었는지 확인
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	
	//헤더의 높이보다 더 스크롤되었는지 확인 후 스크롤의 방향(위 or 아래) 확인
	if(st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$('header').removeClass('nav-down').addClass('nav-up');
	}else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	
	// lastScrollTop 에 현재 스크롤 위치를 지정한다.
	lastScrollTop = st;
}	
});