// JavaScript Document

$(function() {

	//item
	var url = window.location.href;
	var loc = url.substring(url.lastIndexOf('/') + 1, url.length);

	if (loc == 'index.html') {
		wrapItem('work', 'cover');
	} else if (loc == 'personal.html') {
		wrapItem('personal', 'img1');
	}
	else
	{
		wrapItem('work', 'cover');
	}

	function wrapItem(ev, img) {

		if(loc == 'information.html'){return false;};

		var wrap = $('.wrap');

		var list = '';

		for (var i = 1; i <= json.length; i++) {
			list += '<div class="item">' + 
						'<div class="img-box">' + 
							'<section class="img-a"><img src="images/' + ev + '/img' + i + '/' + img + '.jpg" /></section>' + 
							'<h2 class="present"><a title='+ json[i - 1].title +'>' + json[i - 1].title + '</a></h2>' + 
						'</div>' + 
					'</div>';
		}

		wrap.prepend(list);

	};

	//随机数
	var arr = ['159px','320px','239px','360px','180px','192px'];

	if(loc == 'information.html'){return false;};

	for (var i = 0; i <= json.length; i++) {
		var Anum = Math.floor(Math.random() * 6 + 0);
		console.log(Anum);
		$('section').eq(i).css({'padding-top' : arr[Anum]});
		console.log(arr[Anum]);
	}

	//MediaModal
	var move = window.document.ontouchmove;
	var item = $('.item');

	item.each(function() {
		
		var _this = $(this),
			img_a = _this.find('.img-a img,h2 a'),
			itemImg = _this.find('img'),
			index = _this.index() + 1,
			num = 0;

		//随机函数
		setInterval(function(){
			imgLoad();
		},100);

		function imgLoad(){
			if(itemImg.eq(num).width == 0){
				
			}else{
				$('section img').eq(num).css({'width' : '100%'});
				$('section').eq(num).css({'padding-top' : '0'});
				num++;
			};
		}
			
		//加载完成
		// var imgNum = $('img').length;
		// $('img').load(function(){
		//     if(!--imgNum){
		// 		imgLoad();
		//     }
		// });

		// function imgLoad(){
		// 	setInterval(function(){
		// 		$('section img').eq(num).css({'width' : '100%'});
		// 		$('section').eq(num).css({'padding-top' : '0'});
		// 	},100)
		// 	num++;
		// };

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
			var url = window.location.href;
			var loc = url.substring(url.lastIndexOf('/') + 1, url.length);

			if (loc == 'index.html') {
				MediaModal('work');
			} else if (loc == 'personal.html') {
				MediaModal('personal');
			}
			else
			{
				MediaModal('work');
			}

			//判断安卓/IOS
			if (navigator.userAgent.match(/iPod|iPhone/i) ? true : false) {

				$('#main figcaption').css({'padding-bottom':'100000000rem'});
			}
			else if (navigator.userAgent.match(/Android/i) ? true : false) {

				$('#main figcaption').css({'padding-bottom':'100000000rem'});

			}

			//判断安卓/IOS
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
			} else if (index == item.length) {
				$('span').addClass("btnActive");
			}

		};

	});


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
