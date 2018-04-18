



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

	

	// kol区域(定时4张kol播放)
	var KolSlide = $('#kol_slide');

	KolSlide.each(function(){
		var _this = $(this),
			KolBox = _this.find(".kol_box"),
			KolImg = _this.find(".kol_img"),
			Spot = _this.find(".spot"),
			SpotLi = _this.find('.spot li'),
			iNow = 0;
		
		function KolTab()
		{
			setInterval(function(){	        

	            iNow++;

				if(iNow > SpotLi.length -1) iNow = 0;

				SpotLi.removeClass('act');
	            
	            SpotLi.eq(iNow).addClass('act');

	            KolBox.animate({'margin-left':'-100%'},1000,function(){

	                KolBox.css({'margin-left': 0 });

	                var obj =  $(".kol_box").find('div').eq(0);

	                 $(".kol_box").find('div').eq(0).remove();
	            
	                $(".kol_box").append(obj);

	            }); 

	        },3000);  
	                
		};

		//弹出层
		var Introduce = $('.introduce'),
			CloseBtn = $('.close_btn');

		CloseBtn.on(event,function(){

			Introduce.fadeOut();

			KolTab();

		});
		
	});


	//3个app以ID区分
	var AppBox = $('.app_box');
		AppBox.each(function(){
			var _this = $(this),
				AppTab = _this.find('.app_tab li');

			var ClassName = ['gudong','yuepao','yuedong','shoudong'];

			AppTab.on(event,function(){

				var index = $(this).index();

				AppTab.removeClass();

				$(this).addClass(ClassName[index]);

				if(ClassName[index] == 'gudong')
				{
					$('.user_id').show();
					$('.app_agree').removeClass('app_active');
				}else
				{
					$('.user_id').hide();
					$('.app_agree').addClass('app_active');
				};

				$(this).addClass('checkbox_app');

			});

		});


	//判断安卓切换
	if(navigator.userAgent.match(/Android/i) ? true : false){

		$('#main').addClass('android_css');

	};

};

