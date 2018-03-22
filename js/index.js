// JavaScript Document

$(function() {

	//数据加载
	var Null = 1,
		_work = 6, _personal = 15, //默认显示图片个数 
		_loading = 5; //每次点击按钮后加载的个数

	var url = window.location.href,
		loc = url.substring(url.lastIndexOf('/') + 1, url.length);

	var ArrHeight = ['67%','134%','100%','150%','75%','80%'],

		WorkHeight = ['70%','90%','80%','100%','82%','78%'],

		ArrBg = ['#8c8d87','#999999','#f6f6f6','#666666','#ae995a','#cccccc'];

	$('.more').click(function(){
		
		var item = $('.item');

		if (loc == 'index.html') {
			_content(_work);
		} else if (loc == 'personal.html') {
			_content(_personal);
		}
		else
		{
			_content(_work);
		}

		function _content(en){

			timer=setInterval(function(){ //存储循环内容
				var int = en + Null;
				Null++;

				if (loc == 'index.html') {
					wrapItem('work', 'cover', int, int);
				} else if (loc == 'personal.html') {
					wrapItem('personal', 'img1', int, int);
				}
				else
				{
					wrapItem('work', 'cover', int, int);
				}

				wrapIfn();

				_random(int);

			},100);

		};

		//随机数
		function _random(int){

			if(loc == 'information.html'){return false;};

			for (var i = int; i <= json.length; i++) {
				var Anum = Math.floor(Math.random() * 6 + 0);
				if (loc == 'index.html') {
					$('#main section').eq(i - 1).css({'padding-top' : WorkHeight[Anum] , 'background-color' : ArrBg[Anum]});
				} else if (loc == 'personal.html') {
					$('#main section').eq(i - 1).css({'padding-top' : ArrHeight[Anum] , 'background-color' : ArrBg[Anum]});
				}
				else
				{
					$('#main section').eq(i - 1).css({'padding-top' : WorkHeight[Anum] , 'background-color' : ArrBg[Anum]});
				}
			}
		};

		//加载完成
		var num = 0,
			imgNum = $('.wrap img').length;

		$('.load-page-css').fadeIn();

		$(this).fadeOut();

	    if(imgNum == item.length){

	    	$('.load-page-css').fadeOut();

	    	$(this).fadeIn();

			imgLoad();
	    }

		function imgLoad(){
			
			var iCount  = setInterval(function(){
				$('section img').eq(num).css({'width' : '100%'});
				$('section').eq(num).css({'padding-top' : '0'});
				num++;
				if(num == json.length)
		    	{
		    		clearInterval(iCount);
		    	}
			},100)
		};

		setTimeout(function(){

			clearInterval(timer);   

		},_loading + '00');

		if(item.length >= json.length - _loading)
		{	
			$(this).fadeOut();
	
			return false;
		}

	});

	//禁止屏幕出滚动条
	var scroll = setInterval(function(){
		$(window).scrollTop(0).scrollLeft(0);
	},0); 

	if(loc == 'information.html'){clearInterval(scroll);}; 

	//item
	if (loc == 'index.html') {
		wrapItem('work', 'cover', _work, 1);
	} else if (loc == 'personal.html') {
		wrapItem('personal', 'img1', _personal, 1);
	}
	else
	{
		wrapItem('work', 'cover', _work, 1);
	}

	function wrapItem(ev, img, number, int) {

		if(loc == 'information.html'){return false;};

		var wrap = $('.wrap');

		var list = '';

		for (var i = int; i <= number; i++) {
			list += '<div class="item">' + 
						'<div class="img-box">' + 
							'<section class="img-a"><img src="images/' + ev + '/img' + i + '/' + img + '.jpg" /></section>' + 
							'<h2 class="present"><a title='+ json[i - 1].title +'>' + json[i - 1].title + '</a></h2>' + 
						'</div>' + 
					'</div>';
		}

		wrap.append(list);

		//加载完成
		var num = 0,
			imgNum = $('.wrap img').length;

		$('img').load(function(){
		    if(!--imgNum){
		    	clearInterval(scroll);
		    	$('.load-win').remove();
		    	wrap.removeClass('load-svg');
				imgLoad();
		    }
		});

		function imgLoad(){
			
			var iCount  = setInterval(function(){
				$('section img').eq(num).css({'width' : '100%'});
				$('section').eq(num).css({'padding-top' : '0'});
				num++;
				if(num == json.length)
		    	{
		    		clearInterval(iCount);
		    	}
			},100)
		};
	};

	//MediaModal
	var move = window.document.ontouchmove;
	var wrap = $('.wrap');

	wrapIfn();
	
	function wrapIfn(){

		wrap.each(function(){

			var __this = $(this),
				item = __this.find('.item');

			item.each(function() {
				
				var _this = $(this),
					img_a = _this.find('.img-a img,h2 a'),
					itemImg = _this.find('img'),
					index = _this.index() + 1;

				//滑动手势
				// $('body').on('touchstart', function(e) {
				//     var touch = e.originalEvent,
				//         startX = touch.changedTouches[0].pageX;

		  //   		$(this).on('touchmove', function(e) {

		  //       		e.preventDefault();
				//         touch = e.originalEvent.touches[0] ||
				//             e.originalEvent.changedTouches[0];
				//         if (touch.pageX - startX > 20) {//向左
				//         	console.log('a'+index);
				//         	if (index == item.length) {
				// 				index = 1;
				// 			}
				//             $(".MediaModal").remove();
				//    			index++; 
				// 			imgHref();
				// 			if (index == 1) {
				// 				$('samp').addClass("btnActive");
				// 			}

				//         } else if (touch.pageX - startX < -20) {//向右
				//         	console.log('b'+index);
				//         	if (index == 1) {
				// 				index = item.length;
				// 			}
				//             $(".MediaModal").remove();
				//    			index--; 
				// 			imgHref();
				// 			if (index == item.length) {
				// 				$('span').addClass("btnActive");
				// 			}

				//         };

				//     });

				// }).on('touchend', function() {
				//     $(this).off('touchmove');
				// });
				
				//详情页
				_this.on('click', 'samp', function() {
					$(".MediaModal").remove();
					index--;
					imgHref();
					if (index == 1) {
						$('samp').addClass("btnActive");
					};
					ImgCenter();
				})

				_this.on('click', 'span', function() {
					$(".MediaModal").remove();
					index++;
					imgHref();
					if (index == item.length) {
						$('span').addClass("btnActive");
					};
					ImgCenter();
				})

				img_a.on('click',function() {
					index = _this.index() + 1;
					imgHref();
					$('html,body').addClass("overflow-hidden");
					ImgCenter();
				});

				//ImagesCenter
				$(window).resize(function () {
					ImgCenter();
				});
				
				function ImgCenter(){
					var windowWidth  = $(document).width(),
						windowHeight  = $(document).height(),
						ImgHeight = $('.MediaImage img').height(),
						ImagesCenter = windowHeight - ImgHeight,
						MediaImageI = $('.MediaImage i').length;
					if(MediaImageI == 1){
						$('.MediaImage').css({'margin-top':ImagesCenter / 15});
					}
					if(windowWidth < 768 && MediaImageI == 1){
						$('.MediaImage').css({'margin':'50px auto 0'});				
					}
					if(windowWidth > 767 && MediaImageI == 1){
				        $('.MediaImage').css({'margin-top':ImagesCenter / 15});
				    }
				    //alert(ImagesCenter);
				}

				function imgHref() {

					if (loc == 'index.html') {
						MediaModal('work');
					} else if (loc == 'personal.html') {
						MediaModal('personal');
					}
					else
					{
						MediaModal('work');
					}

					if (navigator.userAgent.match(/iPod|iPhone/i) ? true : false) {

						$('#main figcaption').css({'padding-bottom':'100000000rem'});
					}
					else if (navigator.userAgent.match(/Android/i) ? true : false) {

						$('#main figcaption').css({'padding-bottom':'100000000rem'});

					}

					setTimeout(function(){

						if(navigator.userAgent.match(/iPod|iPhone/i) ? true : false){
							
							$('#main figcaption').css({'padding-bottom':'0'});
							
						}
						else if(navigator.userAgent.match(/Android/i) ? true : false){
							
							$('#main figcaption').css({'padding-bottom':'0'});
							
						};

					},200);
				}

				function MediaModal(id) {
					var img_str = '';
						img_str += '<figure id="figure" class="MediaModal">' + 
										'<div class="MediaImage">';
						for (var i = 1; i <= json[index - 1].num; i++) {
							img_str += '<i class="MediaItem"><img src="images/' + id + '/img' + index + '/img' + i + '.jpg" /></i>';
						}
							img_str += '</div>' + 
										'<figcaption class="infor">' + 
											'<h2>' + json[index - 1].title + '</h2>' + 
											'<p class="visit">' + json[index - 1].link + '</p>' + 
											'<p class="time">' + json[index - 1].date + '</p>' + 
										'</figcaption>' + 
										'<i class="modalClose"><img src="images/global/close_img.png" /></i>' + 
										'<samp class="nextPost"><img src="images/global/left_ico.png" /></samp>' + 
										'<span class="prevPost"><img src="images/global/right_ico.png" /></span>' + 
									'</figure>';
					_this.prepend(img_str);

					if (index == 1) {
						$('samp').addClass("btnActive");
					} else if (index != item.length) {
						$('span').removeClass("btnActive");
					}else if (index == item.length) {
						$('span').addClass("btnActive");
					}

				};
			});
		});
	};

	$("#main").on('click', 'i', function() {
		$(".MediaModal").remove();
		$('html,body').removeClass("overflow-hidden");
	});

	//mobile nav
	var move = window.document.ontouchmove;
	var navTrigger = $('.nav-trigger'),
		mobileNav = $('.mobile-nav'),
		navMenu = $('.nav-menu'),
		btnClick = false,
		time;

		navTrigger.click(function(){

			clearTimeout(time);

			time=setTimeout(function () {

				if(!btnClick)
				{	
					mobileNav.removeClass('mobile_block');
					mobileNav.animate({'opacity':'1'},200);
					navMenu.removeClass('nav-menu-active');
					$('.nav-trigger img').attr('src','images/global/close_img.png'); 
					navTrigger.addClass('active');
					$('html,body').addClass("overflow-hidden");

					window.document.ontouchmove = function (e) {
						e.preventDefault();
					};

					btnClick = true;
				}
				else if(btnClick)
				{	
					mobileNav.animate({'opacity':'0'},200)
					navMenu.addClass('nav-menu-active');
					$('.nav-trigger img').attr('src','images/global/nav_img.png');
					setTimeout(function(){
						mobileNav.addClass('mobile_block');
					},500);
					navTrigger.removeClass('active');
					$('html,body').removeClass("overflow-hidden");

					window.document.ontouchmove = move;

					btnClick = false;
				}

			}, 200);

		});

	// 随机数

	if(loc == 'information.html'){return false;};

	for (var i = 0; i <= json.length; i++) {
		var Anum = Math.floor(Math.random() * 6 + 0);
		//console.log(Anum);
		if (loc == 'index.html') {
			$('#main section').eq(i - 1).css({'padding-top' : WorkHeight[Anum] , 'background-color' : ArrBg[Anum]});
		} else if (loc == 'personal.html') {
			$('#main section').eq(i - 1).css({'padding-top' : ArrHeight[Anum] , 'background-color' : ArrBg[Anum]});
		}
		else
		{
			$('#main section').eq(i - 1).css({'padding-top' : WorkHeight[Anum] , 'background-color' : ArrBg[Anum]});
		}
		//console.log(ArrHeight[Anum]); 
	}

	function checkMobile(){
		var isMobile = {  
			Android: function() {  
				return navigator.userAgent.match(/Android/i) ? true : false;  
			},  
			BlackBerry: function() {  
				return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
			},  
			iOS: function() {  
				return navigator.userAgent.match(/iPod|iPhone/i) ? true : false;  
			},
			Windows: function() {  
				return navigator.userAgent.match(/IEMobile/i) ? true : false;  
			},  
			any: function() {  
				return (isMobile.Android() || isMobile.BlackBerry()  || isMobile.Windows() || isMobile.iOS());  
			}  
		};
		
		return isMobile.Android();
	}

});
