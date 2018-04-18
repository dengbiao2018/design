
$(function(){
    var redCar = $('.car_red');
	var whiteCar = $('.car_white');
	var blueCar = $('.car_blue'); 
    var btn = $('.btn');
    var order = $('.order');
    var btn1 = $('.btn_redCar .btn');
    var btn2 = $('.btn_whiteCar .btn');
    var btn3 = $('.btn_blueCar .btn');
    var bg = $('.bg');
    var car = $('.car');
    var btnRedCar = $('.btn_redCar');
    var btnWhiteCar = $('.btn_whiteCar');
    var btnBlueCar = $('.btn_blueCar');
    var shade = $('.shade');
    var shade_b = $('.shade_b');
    var swf_a = $('.swf_a');
    var swf_b = $('.swf_b');
    var swf_c = $('.swf_c');
    var redCar_text = $('.redCar_text');
    var whiteCar_text = $('.whiteCar_text');
    var blueCar_text = $('.blueCar_text');
    var loadNum = 0;
    var imgObj = null;
    var span_a = $('.shade_b span').eq(0);
    var span_b = $('.shade_b span').eq(1);
    var span_c = $('.shade_b span').eq(2);

    var imgArray = [
       'images/blueCar_bg.jpg',
       'images/blueText_1.png',
       'images/blueText_2.png',
       'images/btn.jpg',
       'images/order.png',
       'images/xx.png',
       'images/btn_blueCar.jpg',
       'images/btn_redCar.jpg',
       'images/btn_whiteCar.jpg',
       'images/car_blue.png',
       'images/car_red.png',
       'images/car_whiter.png',    
       'images/mask.jpg',
       'images/order.jpg',
       'images/redCar_bg.jpg',
       'images/redText_1.png',
       'images/redText_2.png',
       'images/whiteCar_bg.jpg',
       'images/whiteText_1.png'
    ];

    //预加载
    var img_a = new Image();
    var img_b = new Image();

     img_a.onload = function()
    {
       img_a.src = 'images/shade.jpg';
       img_b.src = 'images/loading.jpg';
    }

    loadImg();

    function loadImg()
    {   
        var len = imgArray.length;
        var lenB = 100/len;
        var a,b,c;
        for(var i =0 ; i< len ; i++){
            imgObj = new Image();          
            imgObj.onload = function(){
                loadNum ++;
                var r = parseInt(lenB*loadNum);
                a =parseInt(r/100);
                b = parseInt((r-a*100)/10);
                c = r-a*100-b*10; 
              
                if(r < 10)
                {  
                    span_a.hide();
                    span_b.hide();      
                    span_c.removeClass();  
                    span_c.addClass('num_'+c);  
                }
                else if(r >= 10 && r<100)
                {  
                   span_a.hide();
                   span_b.show();
                   span_b.removeClass();  
                   span_c.removeClass();  
                   span_b.addClass('num_'+b);
                   span_c.addClass('num_'+c);
                }
                else if(r >= 100)
                {   
                    span_a.show();
                    span_b.show();
                    span_a.removeClass();
                    span_b.removeClass();  
                    span_c.removeClass(); 
                    span_a.addClass('num_'+a);
                    span_b.addClass('num_'+b);
                    span_c.addClass('num_'+c);
                }                      
                if( loadNum >= len )
                {
                    shade.hide();        
                }
            }           
            imgObj.src = imgArray[i];
        }
    }
    
	btnRedCar.css({zIndex:12});
    btnWhiteCar.css({zIndex:12});
    btnBlueCar.css({zIndex:12});
     
    var oTime = 3;
    var Timer = 0.5;
    //蓝色移入
    blueCar.hover(function(){
        //bg.css({backgroundImage:'url('+'images/blueCar_bg.jpg'+')',opacity:0});
        TweenMax.to(bg ,0,{backgroundImage:'url('+'images/blueCar_bg.jpg'+')',alpha:0,ease:Strong.easeOut});	
        TweenMax.to(whiteCar ,oTime,{width:'49px',ease:Strong.easeOut});
		TweenMax.to(redCar ,oTime,{width:'98px',ease:Strong.easeOut});		
		TweenMax.to(bg,oTime,{alpha:1,onComplete:function(){
            swf_c.show();
			swf_a.hide();  
            swf_b.hide();  
        },ease:Strong.easeOut});        
    },function(){
        TweenMax.to(bg,oTime,{alpha:0,ease:Strong.easeOut}); 
        TweenMax.to(whiteCar ,oTime,{width:'136px',ease:Strong.easeOut});
	    TweenMax.to(redCar ,oTime,{width:'291px',ease:Strong.easeOut});    
        swf_c.hide(); 
    });
	
    //白色移入
	whiteCar.hover(function(){
        //bg.css({backgroundImage:'url('+'images/whiteCar_bg.jpg'+')',opacity:0});
        TweenMax.to(bg ,0,{backgroundImage:'url('+'images/whiteCar_bg.jpg'+')',alpha:0,ease:Strong.easeOut});    
        TweenMax.to(whiteCar,oTime,{width:'340px',ease:Strong.easeOut});
        TweenMax.to(redCar ,oTime,{width:'380px',ease:Strong.easeOut});
        TweenMax.to(bg,oTime,{alpha:1,onComplete:function(){
            swf_b.show(); 
			swf_a.hide();  
            swf_c.hide();
        },ease:Strong.easeOut});         
    },function(){
        TweenMax.to(whiteCar ,oTime,{width:'136px',ease:Strong.easeOut});
        TweenMax.to(redCar ,oTime,{width:'291px',ease:Strong.easeOut});
        TweenMax.to(bg,oTime,{alpha:0,ease:Strong.easeOut});
        swf_b.hide();   
    });
    
    //红色移入
    redCar.hover(function(){
        //bg.css({backgroundImage:'url('+'images/redCar_bg.jpg'+')',opacity:0});
        TweenMax.to(bg ,0,{backgroundImage:'url('+'images/redCar_bg.jpg'+')',alpha:0,ease:Strong.easeOut});    
        TweenMax.to(redCar,oTime,{width:'380px',ease:Strong.easeOut});
        TweenMax.to(whiteCar ,oTime,{width:'49px',ease:Strong.easeOut});    
        TweenMax.to(bg,oTime,{alpha:1,onComplete:function(){
            swf_a.show();
			swf_b.hide();  
            swf_c.hide();
        },ease:Strong.easeOut});      
    },function(){
        TweenMax.to( whiteCar ,oTime,{width:'136px',ease:Strong.easeOut});
        TweenMax.to( redCar ,oTime,{width:'291px',ease:Strong.easeOut});
        TweenMax.to(bg,oTime,{alpha:0,ease:Strong.easeOut});
        swf_a.hide();    
    });

    //红色点击
    redCar.click(function(){
        TweenMax.to(btnRedCar,Timer,{clip:"rect(0px 940px 498px 0px", onComplete :function(){
            order.css({display:'block'});
        	TweenMax.to(order,Timer,{alpha:1});
        	TweenMax.to(btn,Timer,{alpha:1});
            TweenMax.to(redCar_text,Timer,{alpha:1});
        }});
        bg.hide();
        car.hide();
    });

    //白色点击
    whiteCar.click(function(){
        TweenMax.to(btnWhiteCar,Timer,{clip:"rect(0px 940px 498px 0px", onComplete :function(){
            order.css({display:'block'});
        	TweenMax.to(order,Timer,{alpha:1});
        	TweenMax.to(btn,Timer,{alpha:1});
            TweenMax.to(whiteCar_text,Timer,{alpha:1});
        }});
        bg.hide();
        car.hide();
    });

    //蓝色点击
    blueCar.click(function(){
        TweenMax.to(btnBlueCar,Timer,{clip:"rect(0px 940px 498px 0px", onComplete :function(){
            order.css({display:'block'});
        	TweenMax.to(order,Timer,{alpha:1});
        	TweenMax.to(btn,Timer,{alpha:1});
            TweenMax.to(blueCar_text,Timer,{alpha:1});          	
        }});
        bg.hide();
        car.hide();
    });
  
     //红色XX点击
     btn1.click(function(){
        bg.show();
        car.show();
        TweenMax.to(order,Timer,{alpha:0,onComplete:function(){
            order.hide();
        }});
        TweenMax.to(btn,Timer,{alpha:0});
            TweenMax.to(redCar_text,Timer,{alpha:0,onComplete:function(){
            	TweenMax.to(btnRedCar,Timer,{clip:"rect(0 498px 498px 498px"});
            }});         
     });

     //白色XX点击
     btn2.click(function(){
     	bg.show();
        car.show();
        TweenMax.to(order,Timer,{alpha:0,onComplete:function(){
            order.hide();
        }});
        TweenMax.to(btn,Timer,{alpha:0});
        TweenMax.to(whiteCar_text,Timer,{alpha:0,onComplete:function(){
            TweenMax.to(btnWhiteCar,Timer,{clip:"rect(0 498px 498px 498px"});
        }});   
     });

     //蓝色XX点击
     btn3.click(function(){
     	bg.show();
        car.show();
        TweenMax.to(order,Timer,{alpha:0,onComplete:function(){
            order.hide();
        }});
        TweenMax.to(btn,Timer,{alpha:0});
        TweenMax.to(blueCar_text,Timer,{alpha:0,onComplete:function(){
            TweenMax.to(btnBlueCar,Timer,{clip:"rect(0 498px 498px 498px"});
        }});   
     });
	 
	if(device.ipad())
	{
		$("body , html").css({
			"overflow" : "auto"	
		});
	}
		 
	 
});