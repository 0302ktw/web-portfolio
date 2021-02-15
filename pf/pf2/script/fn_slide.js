(function($){
	$.fn_slide = {
		version: "1.0.0",
		setDefaults: function(options){
			$.extend(defaults, options);
		}
	};
	$.fn.fn_slide = function(options) {
		var method = typeof arguments[0] == "string" && arguments[0];
		var args = method && Array.prototype.slice.call(arguments, 1) || arguments;
		var self = (this.length == 0) ? null : $.data(this[0], "fn_slide");
		if( self && method && this.length ){
			if( method.toLowerCase() == "object" ) return self;
			else if( self[method] ){
				var result;
				this.each(function (i){
					var r = $.data(this, "fn_slide")[method].apply(self, args);
					if( i == 0 && r ){
						if( !!r.jquery ){
							result = $([]).add(r);
						} else {
							result = r;
							return false;
						}
					} else if( !!r && !!r.jquery ){
						result = result.add(r);
					}
				});

				return result || this;
			} else return this;
		} else {
			return this.each(function (){
				new fn_slide(this, options, self);
			});
		};
	};
	
	var fn_slide = function (target ,options, mc){
		var self = this
		,timer = null
		,_target = $(target)
		,_div = $(target).find("> div")
		,_slide = $(target).find(".slide")
		,_slideUL = $(_slide).find("> ul")
		,_slideLI = $(_slide).find("> ul > li")
		,_slideLILength = _slideLI.length
		, options = $.extend({}, defaults, options, (!!$.metadata ? $input.metadata() : {}))
		
		_slide.css("width","auto");
		_slide.css("display","block");
		$(options.prevBtn).unbind();
		$(options.pauseBtn).unbind();
		$(options.nextBtn).unbind();
		clearTimeout(timer);
		
		if(! _target.is(".fn_slide")){
			_divPaddingLeft = _div.css("padding-left");
			_divPaddingRight = _div.css("padding-right");
		}
		
		_target.addClass("fn_slide");
		_slideWidth = _slide.outerWidth(true);
		_slideLIHeight = _slideLI.outerHeight(true);
		_slideLIWidth = _slideWidth/options.slidesView;
		_slide.width(_slideWidth);
		_slide.height(_slideLIHeight+12);
		_slide.css({"position":"relative","overflow":"hidden","display":"inline-block"});
		_slideUL.css("position", "absolute");
		_slideUL.width(_slideLILength*_slideLIWidth);
		_slideLI.width((100/_slideLILength)+"%");
		_div.css({"padding-left":0, "padding-right":0, "text-align":"center"});
		
		function slideMovePrev (){
			_slideLIWidth = _slideLI.outerWidth(true);
			if(!_slideUL.is(':animated')){
				_slideUL.css('left',-_slideLIWidth);
				_slideUL.children().last().prependTo(_slideUL);
				_slideUL.animate({left:'0'},options.duration,options.easing, function(){
					if(options.autoPlay)slideMoveDelay();
				});
			}
		}
		function slideMoveNext (){
			_slideLIWidth = _slideLI.outerWidth(true);
			if(!_slideUL.is(':animated')){
				_slideUL.animate({'left':-_slideLIWidth},options.duration,options.easing,function() {
					_slideUL.children().first().appendTo(_slideUL);
					_slideUL.css('left','0');
					if(options.autoPlay)slideMoveDelay();
				});
			}
		}
		function slideMoveDelay(){
			timer = setTimeout(function() {
				slideMoveNext();
			}, options.delay);
		}
		if(options.autoPlay)slideMoveDelay();
		
		$(options.prevBtn).on("click", function(){
			clearTimeout(timer);
			slideMovePrev();
		});
		$(options.pauseBtn).on("click", function(){
			clearTimeout(timer);
		});
		$(options.nextBtn).on("click", function(){
			clearTimeout(timer);
			slideMoveNext();
		});
		
		
		$(window).resize(function(){
			clearTimeout(timer);
			if(options.autoPlay)slideMoveDelay();
			_slideLI.hide();
			_div.css({"padding-left":_divPaddingLeft, "padding-right":_divPaddingRight});
			_slide.css("width","auto");
			_slide.css("display","block");
			
			_slideWidth = _slide.outerWidth(true);
			_slideLIWidth = _slideWidth/options.slidesView;
			_slide.width(_slideWidth);
			_slide.height(_slideLIHeight+12);
			_slideUL.width(_slideLILength*_slideLIWidth);
			_slideLI.show();
			_slideLI.width((100/_slideLILength)+"%");
		});
	}
	
	var defaults = {
		autoPlay:true
		,delay:3000
		,duration:500
		,easing:"swing"
		,prevBtn:null
		,nextBtn:null
		,pauseBtn:null
	}
	
})(jQuery);