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

		$(this).hide();

	    if(imgNum == item.length){

	    	$('.load-page-css').fadeOut(1000,function(){
	    		
	    		if(item.length >= json.length - _loading)
				{	
					$('.more').hide();
				}
				else
				{
					$('.more').show();
				}
	    	});

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
					index = _this.index() + 1,
					time;
				
				//详情页
				_this.on('click', 'samp', function(e) {
					
					clearTimeout(time);

					time=setTimeout(function () {

						e.stopPropagation();
						$('#figure .ConBox-Css').fadeOut(200);
						setTimeout(function(){
							$(".MediaModal").remove();
							index--;
							imgHref();
							if (index == 1) {
								$('samp').addClass("btnActive");
							};
							Media_fadeIn();
						},200);

					},200);

				});
					
				_this.on('click', 'span', function(e) {

					clearTimeout(time);
						
					time=setTimeout(function () {

						e.stopPropagation();
						$('#figure .ConBox-Css').fadeOut(200);
						setTimeout(function(){
							$(".MediaModal").remove();
							index++;
							imgHref();
							if (index == item.length) {
								$('span').addClass("btnActive");
							};
							Media_fadeIn();
						},200);

					},200);

				});

				img_a.on('click',function() {

					if (navigator.userAgent.match(/iPod|iPhone/i) ? true : false) {

						_this.children('.img-box').addClass('itemActive');
					}
					else if (navigator.userAgent.match(/Android/i) ? true : false) {

						_this.children('.img-box').addClass('itemActive');

					}
					
					index = _this.index() + 1;
					imgHref();
					$('html,body').addClass("overflow-hidden");
					Media_fadeIn();
				});

				//淡入
				function Media_fadeIn(){
					$('#figure .ConBox-Css').css({'height':'0','opacity':'0'});
					$('#figure .ConBox-Css').fadeOut(100,function(){
						setTimeout(function(){
							$('.MediaModal-load').remove();
							$('#figure .ConBox-Css').fadeIn();
						},400);
						$('#figure .ConBox-Css').css({'height':'','opacity':'1'}); 
					});
				};

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

				};

				function MediaModal(id) {
					var Media_lad = '<svg version="1.1" class="load MediaModal-load"  x="0px" y="0px" viewBox="0 0 50 50"style="enable-background:new 0 0 50 50;" xml:space="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path></svg>';
					var img_str = '';
						img_str += '<figure id="figure" class="MediaModal">' + 
										'<div class="MediaImage ConBox-Css">';
						for (var i = 1; i <= json[index - 1].num; i++) {
							img_str += '<i class="MediaItem"><img src="images/' + id + '/img' + index + '/img' + i + '.jpg" /></i>';
						}
							img_str += '</div>' + 
										'<figcaption class="infor ConBox-Css">' + 
											'<h2>' + json[index - 1].title + '</h2>' + 
											'<p class="visit">' + json[index - 1].link + '</p>' + 
											'<p class="time">' + json[index - 1].date + '</p>' + 
										'</figcaption>' + 
										'<i class="modalClose"><svg viewBox="0 0 32 32" width="100%" height="100%"><title>Close</title><polygon points="16 14 7.5 5.5 5.5 7.5 14 16 5.5 24.5 7.5 26.5 16 18 24.5029945 26.5 26.5 24.5 18 16 26.5 7.5 24.5029945 5.5"></polygon></svg></i>' + 
										'<samp class="nextPost"><svg viewBox="0 0 32 32" width="100%" height="100%"><title>Next post</title><polygon points="12.5 15.5 22.5 25.5 20.5 27.5 8.5 15.5 20.5 3.5 22.5 5.50242448"></polygon></svg></samp>' + 
										'<span class="prevPost"><svg viewBox="0 0 32 32" width="100%" height="100%"><title>Previous post</title><polygon points="19.5 15.5 9.5 25.5 11.5 27.5 23.5 15.5 11.5 3.5 9.5 5.50242448"></polygon></svg></span>' + 
									'</figure>';
					_this.append(img_str);

					$('.MediaModal').prepend(Media_lad);

					if (index == 1) {
						$('samp').addClass("btnActive");
					} else if (index != item.length) {
						$('span').removeClass("btnActive");
					}else if (index == item.length) {
						$('span').addClass("btnActive");
					}

				};

				//判断滚动条
				setInterval(function(){
					if($('figure').scrollTop() == 0)
					{
						$('figure').scrollTop(1);
					}

				    $('figure:gt(0)').remove();

				    $('figure .MediaModal-load:gt(0)').remove();

				},0); 
			
			});
		});
	};

	$("#main").on('click', 'i', function() {
		$('.img-box').removeClass('itemActive');
		$(".MediaModal").fadeOut(300,function(){
			$(".MediaModal").remove();
		});
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
