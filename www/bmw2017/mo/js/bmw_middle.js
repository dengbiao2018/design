
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
					'images/mobile/global/tips.jpg'
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

	//判断安卓切换
	if(navigator.userAgent.match(/Android/i) ? true : false){

		$('#main').addClass('android_css');

	};

};
