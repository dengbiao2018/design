$(function(){
	var ul = $('#carFocus ul');
	var li = $('.foImg');
	var order = $('.order');
	var span = $('.order span');
	var elementNum = li.length;
	var imgArray = ['images/1.jpg' , 'images/2.jpg' , 'images/3.jpg' , 'images/4.jpg'];
	var pageNum = 1;
	var moveBool = true;
	var ww = $(window).width();
    var arrayLen = imgArray.length;
     //自适应
	ul.css({width : elementNum * ww});
	li.css({width : ww});
	var wh = ww/572;
	var orderOldTop = order.offset().top;
	order.css({top:parseInt(orderOldTop*wh)});
    
    //缩放自适应
	$(window).resize(function(){   
		var ww = $(window).width();
        var wh = ww/572;
	    order.css({top:parseInt(orderOldTop*wh)});	 
	    ul.css({width : elementNum * ww});
	    var aLi = $('#carFocus ul li');
	    	aLi.css({width : ww});        
	});

	var liW = li.eq(0).width();
	var ulW = ul.width();
	var now = 0;
    var StartX,
        EndX , curX;
	var moveLength = 5;
	if( device.iphone() ){
		moveLength = 40
	}
	
	var start = function(ev){  //触屏开始函数
		var oEv = ev||event;
		StartX = oEv.targetTouches[0].pageX;  
	}
		
	var touchMove = function(event){
		curX = event.targetTouches[0].pageX - StartX;
		//document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
		if(curX > moveLength)  //左滑
        {		
			if( !moveBool ){
				return;
			}
			
			moveBool = false;
			
			now--;
			pageNum--;
			if(now < 0)
			{   
				now = arrayLen - 1;          
			}	
			var nowPage = 0;			
			nowPage = now - 1;
			if( nowPage < 0)
			{
				nowPage = arrayLen - 1;
			}	
			var newLi = '<li class="newLi" style="width:0"><img src="'+ imgArray[nowPage] +'"/></li>';
			ul.prepend(newLi);
		    var ww = $(window).width();
			TweenMax.to($('.newLi') ,0.5,{width: ww , onComplete:function(){
				//alert(now);		
				ul.find('li').last().remove();
				$('.newLi').removeClass("newLi");
				moveBool = true;
				//document.removeEventListener('touchmove', function(e) { e.preventDefault(); }, false);
			}});
			span.removeClass('active');

			span.eq(now).addClass('active');    	   	    	  	
        }
        else if( curX < -moveLength)  //右滑
        {   
			if( !moveBool ){
				return;
			}
			moveBool = false;
			now++;
			pageNum++;
			if(now > arrayLen -1 )
			{
				now = 0;          
			}	
			var nowPage = 0;	
			nowPage = now + 1;
			if( nowPage > arrayLen -1 )
			{
				nowPage = 0;
			}
		    var ww = $(window).width();
			var newLi = '<li style="width:'+ ww +'px"><img src="'+ imgArray[nowPage] +'"/></li>';
			ul.append(newLi);
			TweenMax.to( ul.find('li').first() ,.5,{width: 0 , onComplete:function(){
				ul.find('li').first().remove();
				moveBool = true;		
				document.removeEventListener('touchmove', function(e) { e.preventDefault(); }, false);		
			}});
			span.removeClass('active');
			span.eq(now).addClass('active');
        }

	}
  	document.body.addEventListener('touchstart',start);  //触屏开始事件绑定
	document.body.addEventListener('touchmove',touchMove);//触屏结束事件绑定	
});
