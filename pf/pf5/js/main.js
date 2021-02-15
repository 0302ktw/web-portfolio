$(function(){
	//AOS animation 
	AOS.init({easing:'ease-out-back',duration: 1300});
	
	
	//easyPieChart
	function fgraph(){
		$('.chart').easyPieChart({
			barColor: '#555', //차트가 그려질 색 
			trackColor: '#ccc', // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분) 
			scaleColor: '', // 차트 테두리에 그려지는 기준선 (chart2 의 테두리 선) 
			lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square 
			lineWidth: 17, // 차트 선의 두께 
			size: 130, // 차트크기 
			animate: 1000, // 그려지는 시간 
			onStart: $.noop, 
			onStop: $.noop		
		});		
	}
	
	$(window).scroll(function(){
		if($(this).scrollTop()>3885){
			fgraph();
		}
		
	});
	
	
	//링크 스크롤 애니메이션
	 $(".a1,.a2,.a3,.a4,.a5,.a6").click(function(event){            
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
		return false;
	 });	 
	
	
	 
	 
});



