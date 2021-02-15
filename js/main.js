$(document).ready(function(){

$('.dim').hide();

/* ************************************************************************
* 로드 후 클래스 추가
************************************************************************ */
$(window).on('load', function(){
	setTimeout(function(){
      $('.main').addClass('view');      
	},0);
});



/* ************************************************************************
* .active 된 링크 막기
************************************************************************ */
$('.active a').click(function(event){
   event.preventDefault();
});


/* ************************************************************************
* sub-menu 버튼 클릭시 body 오픈 클래스 토글 및 dim 처리
************************************************************************ */
$('.menu-button button').on('click', function(){
   $('body').toggleClass('open');

   if($('body').hasClass('open')){
      $('.dim').fadeIn(400);
   } else{
      $('.dim').fadeOut(400);
   }
});

$('.dim').on('click', function(){
   $('body').removeClass('open');
   $(this).fadeOut(400);
});



/* ************************************************************************
* sub-menu 선택되지 않은 li클릭 시 body에 있던 open클래스 삭제
************************************************************************ */
$('.sub-menu__list li').not('.active').on('click', function(){
   $('body').removeClass('open');
   $('.dim').fadeOut(400);
});

/* ************************************************************************
* theme 변경 [dark mode]
************************************************************************ */
$('.theme-color-btn').on('click', function(){  
   if(!$('body').hasClass('dark')){      
      localStorage.setItem('darkMode', 'enabled');
      darkModeOn();
      isDarkModeMovie();
   }else{
      localStorage.setItem('darkMode', 'disabled');
      darkModeOff();
      isLightModeMovie();
   }
});

let mode = localStorage.getItem('darkMode');

if(mode == 'enabled'){
   darkModeOn();
   isDarkModeMovie();
} else if(mode == 'disabled'){
   isLightModeMovie();
}

function darkModeOn(){$('body').addClass('dark'); $('body').removeClass('light'); $('.theme-color-btn__text').text('라이트 모드로 보기');}
function darkModeOff(){$('body').removeClass('dark'); $('body').addClass('light'); $('.theme-color-btn__text').text('다크 모드로 보기');}
function isLightModeMovie(){$('.mbti-content__video--light').fadeIn(300); $('.mbti-content__video--dark').fadeOut(300);}
function isDarkModeMovie(){$('.mbti-content__video--light').fadeOut(300); $('.mbti-content__video--dark').fadeIn(300);}



/* ************************************************************************
* 스크롤 탑, 반응형 버튼 이동
************************************************************************ */   
$('.scroll-top-btn').click(function(){
   var htmlOffset = $('html, body').offset();
   $('html, body').animate({scrollTop : htmlOffset.top},500);
});

// (첫 로드 시) 750px 이하에서 scrollTop 버튼 사라고 -> theme 버튼 빈자리 채움
var hideBtn = window.matchMedia('screen and (max-width:750px)');
if(hideBtn.matches){
   $('.scroll-top-btn').hide();
   $('.theme-color-btn').css('right','20px');
}

// 창 크기 조절 시
$(window).resize(function(){
   if(hideBtn.matches){   
      $('.scroll-top-btn').fadeOut(500);
      if($('.scroll-top-btn').fadeOut()){
         //setTimeout(function(){
            $('.theme-color-btn').css('right','20px');
         //},350);
      }
   } else if(!hideBtn.matches){
      $('.scroll-top-btn').fadeIn(500);
      if($('.scroll-top-btn').fadeIn()){
         //setTimeout(function(){
            $('.theme-color-btn').css('right','78px');
         //},250);
      }
   }
});


/* ************************************************************************
* 디바이스 감지
************************************************************************ */
const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)

if(isMobile){
   $('.tab-index').css('outline','0');
   $('.scroll-top-btn').hide();
   $('.theme-color-btn').css('right','20px');
}

/* ************************************************************************
* 실시간 달력
************************************************************************ */

var mn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var nd = new Date();
var thisMonth = mn[nd.getMonth()];
var d = nd.getDate();

$('.mm-dd').html(thisMonth+''+d+'th');



});
/* -------------------------------------------------------------------------
-------------------- document.ready end  --------------------------------
------------------------------------------------------------------------- */




/* ************************************************************************
* sub-menu 링크 이동 지연 (500ms)
************************************************************************ */
function limitTimedLink(element,callback,timeout){
   setTimeout( function(){callback(element);}, timeout);
   return false;
};

function linkTime(element) { 
   window.location = element.href;
};


/* ************************************************************************
* pf9 모바일 사이즈 새창
************************************************************************ */
function windowopenPopup(){
   window.open('./pf/pf9/index.html', 'window팝업', 'width=450, height=800, top=100, left=500, menubar=no, status=no, toolbar=no');
}


/* ************************************************************************
* 실시간 시계
************************************************************************ */
function startTime(){
   var time = new Date();
   var h = time.getHours();
   var m = time.getMinutes();
   var s = time.getSeconds();
   h = checkTime(h);
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
   var t = setTimeout(startTime, 500);
}

function checkTime(i){
   if(i < 10) {i = "0" + i}; return i;
};



