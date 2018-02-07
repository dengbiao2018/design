// JavaScript Document

$(function() {

	//数据加载
	var Null = 1,
		_work = 6, //Work 默认显示图片个数 
		_personal = 5, //Personal 默认显示图片个数 
		_loading = 500;  //每次点击按钮后加载的个数

	var url = window.location.href;
	var loc = url.substring(url.lastIndexOf('/') + 1, url.length);

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

				$('section img').css({'width' : '100%'});

				$('section').css({'padding-top' : '0'});

				wrapIfn();

			},100);

		};

		//加载完成
		var num = 0,
			imgNum = $('.wrap img').length;
			console.log(imgNum);
			console.log(item.length);
		$('.load-page-css').fadeIn();
	    if(imgNum==item.length){
	    	$('.load-page-css').fadeOut();
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

		},_loading);

		if(item.length >= json.length - 5)
		{	
			$(this).fadeOut();
	
			return false;
		}

	});

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
		    	$('body').removeClass('overflow-hidden');
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

				_this.on('click', 'samp', function() {
					$(".MediaModal").remove();
					index--;
					imgHref();
					if (index == 1) {
						$('samp').addClass("btnActive");
					}
				})

				_this.on('click', 'span', function() {
					$(".MediaModal").remove();
					index++;
					imgHref();
					if (index == item.length) {
						$('span').addClass("btnActive");
					}
				})

				img_a.on('click',function() {
					index = _this.index() + 1;
					imgHref();
					$('html,body').addClass("overflow-hidden");
				});

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
	var ArrHeight = ['159px','320px','239px','360px','180px','192px'];

	var ArrBg = ['#8c8d87','#999999','#f6f6f6','#666666','#ae995a','#cccccc'];

	if(loc == 'information.html'){return false;};

	for (var i = 0; i <= json.length; i++) {
		var Anum = Math.floor(Math.random() * 6 + 0);
		//console.log(Anum);
		$('section').eq(i).css({'padding-top' : ArrHeight[Anum] , 'background-color' : ArrBg[Anum]});
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
