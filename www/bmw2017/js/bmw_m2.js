

//主要逻辑如下
var event_name = 'touchstart',
	file_url = '/bmw2017';
	


$(function($) {
	var basePath = file_url + '/';
	var loader = new WxMoment.Loader();//微信加载资源文件
	
	
	//预加载图片list
	var fileList = [
					'images/mobile/loading/h_tiao_bg.jpg',	
					'images/mobile/loading/loading.jpg',					
					'images/mobile/global/logo.png',
					'images/mobile/global/nav.png',
					'images/mobile/global/nav_close.jpg',
					'images/mobile/global/nav_list.jpg',
					'images/mobile/global/nav_list_active.jpg',
					'images/mobile/global/nav_runner.jpg',
					'images/mobile/global/nav_runner_active.jpg',
					'images/mobile/global/nav_testdrive.jpg',
					'images/mobile/global/nav_testdrive_active.jpg',
					'images/mobile/global/s_tiao_bg.jpg',
					'images/mobile/global/tips.jpg',
					'images/mobile/testdrive/btn1.png',
					'images/mobile/testdrive/ico1.png',
					'images/mobile/testdrive/ico2.png',
					'images/mobile/testdrive/ico3.png',
					'images/mobile/testdrive/img1.png',
					'images/mobile/testdrive/img2.png',
					'images/mobile/testdrive/img3.png',
					'images/mobile/testdrive/img4.png',
					'images/mobile/testdrive/img5.png',
					'images/mobile/testdrive/img6.png',
					'images/mobile/testdrive/testdrive_bg1.jpg',
					'images/mobile/testdrive/testdrive_bg2_1.jpg',
					'images/mobile/testdrive/testdrive_bg3.jpg'
					];

	//预加载的操作
	for (var i = 0; i < fileList.length; i++) {
		loader.addImage(basePath + fileList[i]);
	}
	

	//进度监听
	loader.addProgressListener(function (e) {
		//这里是百分比数字
		var percent = Math.round((e.completedCount / e.totalCount) * 100);
		console.log(percent+'%');
		$('.load_number').html(percent+'%');
		$('.tiao_active').css({'width':percent+'%'});

		
	});

	//加载完成
	loader.addCompletionListener(function () {
		//setTimeout(function(){
			$('#loading').remove();
		//},2000);
		
		main(event_name);
	});

	//启动加载
	loader.start();
});


//主流程控制
function main(event){


	//生成海报(箭头动画)
	p_Arrow();

	function p_Arrow(){
		TweenMax.to($('.p_arrow'),0.5,{y:5,repeat:-1,yoyo:true,repeatDelay:0,onComplete:function(){}});
	}

	//生成海报（点击出弹出层）

	var PosterBox = $('#poster_box');

		PosterBox.each(function(){
			var _this = $(this)
				TextBox = _this.find('.p_textbox'),
				PosterList = _this.find('.poster_list'),
				PosterClosebtn = _this.find('.poster_closebtn'),
				ListBoxLi = _this.find('.p_list_box li'),
				p_Con = _this.find('.p_con img'),
				PosterBtn = _this.find('.poster_btn');

			TextBox.on(event,function(){
				PosterList.fadeIn();
			});
			PosterClosebtn.on(event,function(){
				PosterList.fadeOut();
			});


			var tmp_ary_x = ['0.729rem','0.729rem','2.070rem','2.070rem','3.4rem','3.4rem','4.741rem','4.741rem'];
			var tmp_ary_y = ['0.752rem','7.905rem','0.752rem','7.905rem','0.752rem','7.905rem','0.752rem','7.905rem'];

			ListBoxLi.each(function(i){
				var tobj = $(this);
				ListBoxLi.eq(i).css({'top':tmp_ary_x[i],'left':tmp_ary_y[i]});
				tobj.on(event,function(){
					ListBoxLi.removeClass();
					tobj.addClass('tiem_active');
					p_Con.attr('src','images/mobile/poster/img'+tobj.attr('data')+'.png');
					setTimeout(function(){
						PosterList.fadeOut();
					},500);
				});
			});

			PosterBtn.on(event,function(){
				_this.fadeOut();
				$('.poster_img').fadeIn();
			});

		})





	//判断安卓切换
	if(navigator.userAgent.match(/Android/i) ? true : false){

		$('#main').addClass('android_css');

	};

};

