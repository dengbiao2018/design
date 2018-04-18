//rem
(function() {
    var df_width = 320,
        df_dpr = 1,
        df_fs = 20,
        win = window,
        doc = document,
        html = doc.getElementsByTagName('html')[0];
    html.setAttribute('data-dpr', win.devicePixelRatio);
    html.setAttribute('style', 'font-size:' + (doc.documentElement.clientWidth / df_width * df_fs) + 'px');

})();

function setrem() {
    var df_width = 320,
        df_dpr = 1,
        df_fs = 20,
        win = window,
        doc = document,
        html = doc.getElementsByTagName('html')[0];
    html.setAttribute('data-dpr', win.devicePixelRatio);
    html.setAttribute('style', 'font-size:' + (doc.documentElement.clientWidth / df_width * df_fs) + 'px');
}




//主要逻辑如下
var event_name = 'touchstart';




$(function($) {

	//禁止屏幕出滚动条
	$(document.body).bind('touchmove', function (e) {e.preventDefault();});
	setInterval(function(){
		$(window).scrollTop(0).scrollLeft(0);
		setrem();
	},0);  
    var basePath = file_url + '/newstatic/mobile/';
    var loader = new WxMoment.Loader(); //微信加载资源文件
	

    //预加载图片list
    var fileList = [
					'images/loading/h_tiao_bg.jpg',
					'images/loading/loading.jpg',	
					'images/global/bg.png',	
					'images/global/bg1.jpg',
					'images/global/btn3.png',
					'images/global/checked_bg1.png',
					'images/global/checked_bg2.png',
					'images/global/img1.png',
					'images/global/logo.png',
					'images/global/nav.png',
					'images/global/nav_close.jpg',
					'images/global/nav_info.jpg',
					'images/global/nav_info_active.jpg',
					'images/global/nav_list.jpg',
					'images/global/nav_list_active.jpg',
					'images/global/nav_runner.jpg',
					'images/global/nav_runner_active.jpg',
					'images/global/nav_testdrive.jpg',
					'images/global/nav_testdrive_active.jpg',
					'images/global/p_load.gif',
					'images/global/s_tiao_bg.jpg',
					'images/global/system_img1.jpg',
					'images/global/system_img2.jpg',
					'images/global/tips.jpg',
					'images/runner/accredit.png',
					'images/runner/app_ico.png',
					'images/runner/bg5.jpg',
					'images/runner/bg6.jpg',
					'images/runner/btn_no.png',
					'images/runner/btn_yes.png',
					'images/runner/btn1.png',
					'images/runner/btn2.png',
					'images/runner/btn3.png',
					'images/runner/btn4.png',
					'images/runner/btn5.png',
					'images/runner/btn6.png',
					'images/runner/bx.png',
					'images/runner/cal.png',
					'images/runner/close_btn.png',
					'images/runner/h.png',
					'images/runner/ico1.png',
					'images/runner/ico2.png',
					'images/runner/ico3.png',
					'images/runner/ico4.png',
					'images/runner/ico5.png',
					'images/runner/ico6.png',
					'images/runner/ico7.png',
					'images/runner/ico8.png',
					'images/runner/ico9.png',
					'images/runner/img1.png',
					'images/runner/img2.png',
					'images/runner/img3.png',
					'images/runner/km.png',
					'images/runner/min.png',
					'images/runner/prompt_ico.png',
					'images/runner/prompt_qipao.png',
					'images/runner/qipao.png',
					'images/runner/s.png',
					'images/runner/text1.png',
					'images/runner/text2.png',
					'images/runner/text3.png',
					'images/runner/text4.png',
					'images/runner/text5.png',
					'images/runner/text6.png',
					'images/runner/text7.png',
					'images/runner/text8.png',
					'images/list/bg1.jpg',
					'images/list/bg1.png',
					'images/list/bg2.png',
					'images/list/btn1.png',
					'images/list/btn2.png',
					'images/list/text1.png',
					'images/poster/bg1.png',
					'images/poster/btn_ico.png',
					'images/poster/btn_ico2.png',
					'images/poster/btn_ico3.png',
					'images/poster/btn_ico4.png',
					'images/poster/close_btn.png',
					'images/poster/prompt_text.png',
					'images/poster/share_tishi.png',
					'images/testdrive/btn1.png',
					'images/testdrive/btn2.png',
					'images/testdrive/btn3.png',
					'images/testdrive/btn4.png',
					'images/testdrive/btn5.png',
					'images/testdrive/btn6.png',
					'images/testdrive/btn7.png',
					'images/testdrive/ico1.png',
					'images/testdrive/ico2.png',
					'images/testdrive/ico3.png',
					'images/testdrive/img1.png',
					'images/testdrive/img2.png',
					'images/testdrive/img3.png',
					'images/testdrive/img4.png',
					'images/testdrive/img5.png',
					'images/testdrive/img6.png',
					'images/testdrive/img7.png',
					'images/testdrive/img8.png',
					'images/testdrive/testdrive_bg2.jpg',
					'images/testdrive/testdrive_bg3.jpg',
					'images/testdrive/testdrive_bg4.jpg'
					];

    //预加载的操作
    for (var i = 0; i < fileList.length; i++) {
        loader.addImage(basePath + fileList[i]);
    }
	

    //进度监听
    loader.addProgressListener(function(e) {
        //这里是百分比数字
        var percent = Math.round((e.completedCount / e.totalCount) * 100);
        console.log(percent + '%');
        $('.load_number').html(percent + '%');
        $('.tiao_active').css({ 'width': percent + '%' });
		//loadingapi
		
		
		if(percent == '100'){
			loading_end.call();
		}


    });

    //加载完成
    loader.addCompletionListener(function(){

		//等webgl加载完全把loading给remove
		
		//setTimeout(function(){
		//$('#loading').remove();

		
		

		//},2000);
		

        main(event_name);
		

    });

    //启动加载
    loader.start();
});


//主流程控制
function main(event) {
	
	//归叔页面接口数据
	//pageData.is_regist(用户登录,1：已登录. 2:未登录)
	//pageData.have_data(用户数据,1: 有数据. 2:没数据)
	//pageData.pt(用户平台)
	//exposed.fetch(0,pageData.pt);
	var sto = new Storage;
	sto.add('is_regist',pageData.is_regist);
	sto.add('have_data',pageData.have_data);
	sto.add('pt',pageData.pt);
	sto.add('third_key',pageData.third_key);
	
	
	console.log('is_regist:'+pageData.is_regist);
	console.log('storage_val:'+sto.get('is_regist'));

	var layer = layui.layer;
	var event = 'touchstart';
	var is_agree = false;

	flow_control(event,layer);
	
	//layer.msg('test');
	
	
	//点击协议按钮(取协议的值0:未同意,1:同意s)
	var appagree_1 = {
		dom: '.register_login .agree_a',
		isclick: 0
	};
	appagree_setval(appagree_1);

	var appagree_2 = {
		dom: '.testdrive_from .agree_a',
		isclick: 0
	};
	appagree_setval(appagree_2);


    //如果是安卓给外层添加个css
    if (navigator.userAgent.match(/Android/i) ? true : false) {
        $('#main').addClass('android_css');
    };

}



//流程顺序
function flow_control(e,layer){

	nav.nav_start();//导航初始化
	var f1 = form_obj(e,layer);
	f1.control();//表单交互初始化
	
	
	$('.introduce .close_btn').on(e,function(){//点击开始体验按钮
		$('.nav').addClass('nav2');
		$('#register_login').hide();
		$('.webglbox,#container,.item_info').show();
		$('.introduce').fadeOut();
		$('#webglinfo,#runner_area').fadeIn();
	});

	$('.float_div').on(e,function(){//活动信息页面点击叉
		$('.float_div').fadeOut();
	});

	$('.item_info').on(e,function(){//导航按钮活动信息页面
		$('.float_div').fadeIn();
	});


	$('#webglinfo .login_btn').on(e,function(){//点击我的能量艺术按钮(需要做登录判断处理)
		
		if(pageData.is_regist == 1){//登录成功

			if(pageData.have_data == 1){//登录有数据去webgl
				exposed.fetch(pageData.third_key,0,pageData.pt);
				$('#webglinfo,.login_box,.app_box,.running_calorie').hide();
				$('#webgposter,#poster_box').fadeIn();
				exposed.unlock();

			}else{//登录没数据去填卡路里
				
				$('#webglinfo,.login_box,.app_box').hide();
				$('#runner_area .running_calorie,#customdata').fadeIn();
				exposed.animation(callback = null);
			}
			

		}else{//失败的话(去注册登录)
			$('#webglinfo').hide();
			$('#runner_area,.login_box,#register_login').fadeIn();
			exposed.animation(callback = null);
		}
		stm_clicki('send', 'event', '下一步按钮', '点击', '注册登录');
		stm_clicki('send', 'pageview', {'page': '/login', 'title': '注册登录'});
		
		
	});
	
	$('.shuju_no .no_btn').on(e,function(){//点击list页面中的手动输入按钮
		$('#historicaldata,#register_login,#webglinfo,#webgposter').hide();
		$('#runner_area,#customdata,#webglbox,#container,.running_calorie').fadeIn();
		$('.item_style').removeClass('item_active');
		$('.item_runner').addClass('item_active');
		setTimeout(function(){
			exposed.animation(callback = null);
		},500);
		var f3 = from_boj2();
		f3.get_val();

	});

	$('.shuju_register .register_btn').on(e,function(){//点击list页面中的注册登录按钮
		$('#historicaldata,#customdata,#webglinfo,#webgposter,.app_box').hide();
		$('#runner_area,#register_login,.login_box,#webglbox,#container,.running_time').fadeIn();
		setTimeout(function(){
			exposed.animation(callback = null);
		},500);

		$('.item_style').removeClass('item_active');
		$('.item_runner').addClass('item_active');
		
		var f3 = from_boj2();
		f3.get_val();

	});

	
	
	$('#poster_btn1').on(e,function(){
		$('.haibao_eject').fadeIn();
		setTimeout(function(){
			$('.haibao_eject').fadeOut();
		},5000);
		$('.webglbox,#container,#poster_box').hide();
		stm_clicki('send', 'event', '生成能量海报按钮', '点击', '生成能量海报');
		stm_clicki('send', 'pageview', {'page': '/poster', 'title': '能量海报页'});
	});

	$('.prompt_ico').on(e,function(){
		$('.prompt_qipao').fadeIn();
		setTimeout(function(){
			$('.prompt_qipao').fadeOut();
		},5000);
	});
	
	$('#poster_btn2').on(e,function(){//点击我的历史数据按钮(需要判断登录状态)
		
		//判断是否登录
		if(pageData.is_regist == 1){

			if(pageData.have_data == 1){//去归叔接口拉数据显示(登录有数据的情况)
				
				get_listdata();
				
			}else{//登录没数据的情况
				$('.shuju_register').hide();
				$('#historicaldata,.shuju_no,.shuju').fadeIn();
			}

		}else{//没登录就去登录页面
			
			$('.shuju_no').hide();
			$('#historicaldata,.shuju_register,.shuju').fadeIn();
						}

		$('.webglbox,#container').hide();
		$('.nav_con').hide();
		$('#historicaldata').fadeIn();
		stm_clicki('send', 'event', '下一步按钮', '点击', '我的历史数据');
		stm_clicki('send', 'pageview', {'page': '/run-log', 'title': '我的历史记录'});
	});

	$('.lastp_btn3').on(e,function(){
		stm_clicki('send', 'event', '了解更多BMW车型按钮', '点击', '了解更多BMW车型');
		window.location.href="http://www.bmw.com.cn/zh/index.html";
	});

	$('.lastp_btn').on(e,function(){
		stm_clicki('send', 'event', '返回首页按钮', '点击', '返回首页');
		window.location.href="/";
	});

	$('.poster_img_btn').on(e,function(){
		$('#testdrive,.testdrive_from').fadeIn();
		$('.testdrive_lastp').hide();
		$('.item_style').removeClass('item_active');

		$('.item_testdrive').addClass('item_active');
		
		stm_clicki('send', 'event', '下一步按钮', '点击', '预约试驾');
		stm_clicki('send', 'pageview', {'page': '/testdrive', 'title': '前往预约'});

	});
	
	
	$('.lastp_btn2').on(e,function(){//试驾最后点击获取能量艺术
		//exposed.fetch(0,function(){});
		exposed.unlock();
		$('.item_style').removeClass('item_active');
		$('.item_runner').addClass('item_active');
		reset_alldiv();
		$('.testdrive_lastp,#testdrive').fadeOut();
		$('#webglinfo,#webglbox,#container,#runner_area').fadeIn();
		exposed.resetOffset(callback= null);
	});

	//调用归叔接口					
	$('#poster_btn2').on(e,function(){
		get_listdata();
	});
	

	

	//试驾点击流程
    $('.booking_btn').on(e, function() {
        $('.booking').fadeOut();
        $('.testdrive_from').fadeIn();
    });

	testdrive_form(e);


	//app内注册登录流程
	$('#register_login_app .info_btn').on(e, function() {
		var lapp = form_obj(e,layer);
		
		$('.alert_img,.no_click').show();
		var name = $('#register_login_app .i_name').val();
		var mobile = $('#register_login_app .i_phone').val();
		var vcode = $('#register_login_app .i_code').val();
		lapp.send_sms();
		if(!lapp.cheack_name(name)) return false;
		if(!lapp.cheack_tel(mobile)) return false;
		
		console.log(pageData);
		doRegiestApp(mobile,name,vcode,pageData.pt,pageData.third_key);
		


    });
}

//APP内的用户注册
function doRegiestApp(mobile, uname, vcode, pt, third_key) {
	//提交
	if (pt >= 0) {
		var data_ary = {};
		data_ary.mobile = mobile;
		data_ary.uname = uname;
		data_ary.vcode = vcode;
		data_ary.pt = pt;
		data_ary.third_key = third_key;
		//提交
		$.ajax({
			type: "POST",
			url: "/app/regist/" + pt,
			data: data_ary,
			success: function(msg) {
				console.log(msg);
				var code = msg.code;

				if (code == "200") {
					console.log(msg);
					
					//更新用户登录状态
					pageData.is_regist = 1;
					pageData.pt = pt;
					pageData.third_key = msg.data.userinfo.third_key;
					//alert(pageData.third_key)
					console.log(pageData);
					
					stm_clicki('send', 'event', pt, '点击', '提交');stm_clicki('send', 'pageview', {'page': '/energy-art-run', 'title': '能量艺术'});
					
					if(msg.data.dataCount > 0){//有数据(去webgl)
						
						exposed.fetch(pageData.third_key,0,pageData.pt);
						$('#register_login_app').hide();
						$('#webglbox,#poster_box,#webgposter').fadeIn();
						
					}else{//没数据

						//(判断是否进入自定义输入的页面)
						$('#customdata').fadeIn();
						$('#register_login').fadeOut();
						var f2 = from_boj2();
						f2.get_val();
						
					}

					$('input').val('');//清空input值
				} else {
					if (msg.message) {
						layer.msg(msg.message);
					} else {
						layer.msg("未知错误");
					}
				}
				
			


			}
		});
	}
}

//公共常用方法
var global = {
	e: 'touchstart'
}

//webgl 接口
var webgl_api = {
	event : 'thouchstart',
	wgbox_show : function(btn,callback){

		$(btn).on(this.event,callback);//点击按钮来控制触发webgl


	}
}


//注册流程的交互
function form_obj(event,layer){
	var form_obj = {
	lay : layer,
	e : event,
	setinterval_obj : '',
	setinterval_seds : 60,
	is_submit: true,
	lock : true,
	cheack_tel : function(val){//验证手机号码合法化

			 var reg = /^1[0-9]{10}$/;
			 if (!val || val == '') {
				this.lay.msg('手机号码不能为空');
				return false;
			} else if (!reg.test(val)) {
				this.lay.msg('请输入正确手机号码');
				return false;
			}

			return true;

		},
		cheack_name : function(val){//验证姓名合法化(字数限制4个中文，8个英文字母，不能数字和非法字符)
		
			var regCh= /^[\u4E00-\u9FA5]+$/;
			var regEn=/^[A-Za-z]+$/;
			var num = val.length;
			
			
			if(!val || val == ''){
				this.lay.msg('姓名不能为空');
				return false;
			}

			if(!regCh.test(val)){

				if(!regEn.test(val)){
					this.lay.msg('名字请勿中英文或数字混合');
					return false;
				}else{
					if (num >8) {
						layer.msg("英文字母最大输入8个");
						return false;
					}
					return true;
				}
				
			}else{
				if (num>4) {
					layer.msg("中文最大输入4个汉字");
					return false;
				}
				return true;
			}

			return true;
			
		},
		send_sms : function(){//点击获取手机验证码按钮
			var event = this.e;
			setinterval_obj = this.setinterval_obj;
			setinterval_seds = this.setinterval_seds;
			lock = this.lock;
			$('.obtain').on(event, function() {
				var mobile = $('.register_login .i_phone').val();
				if(form_obj.cheack_tel(mobile)){
				
					//倒计时锁键
					if (lock) {

						lock = false;
						//发送短信验证码
						$.ajax({
							type: "GET",
							url: "/sms/" + mobile,
							data: "",
							success: function(msg) {
								var code = msg.code;
								if (code == "200") {
									layer.msg('发送成功');
								}else{
									if(msg.message){
										layer.msg(msg.message);
									} else {
										layer.msg("未知错误");
									}
								}
							}
						});
		
						setinterval_obj = setInterval(function() {
							--setinterval_seds;
							if(setinterval_seds == 0){
								lock = true;
							}	
							//console.log(setinterval_seds);
							$('.obtain').text('验证码(' + setinterval_seds + ')');
							if (setinterval_seds == 0) {
								clearInterval(setinterval_obj);
								setinterval_seds = 60;
								$('.obtain').html('获取验证码');
							}
						}, 1000);
					}
				
				}
				
				
				
			});

		},
		set_input_height : function(){//点击input调节手机高度
			
			$('.phase1_1 .i_phone').unbind('focus').focus(function() {
				$('#main').css({'top':'-2.8rem'});	
			});


			$('.phase1_1 .i_phone,.phase1_1 .i_code,.phase1_1 .i_name,.running_calorie .i_h,.running_calorie .i_min,.running_calorie .i_s,.running_calorie .i_km,.running_calorie .i_cal').unbind('focus').blur(function()//失去焦点 
			{ 
				$('#main').css({'top':0});

			});


			$('.phase1_1 .i_code').unbind('focus').focus(function() {
				$('#main').css({'top':'-2.8rem'});	
			 });
			
			$('.phase1_1 .i_name').unbind('focus').focus(function() {
				$('#main').css({'top':'-2.8rem'});	
			 });
			


			//卡路里表单输入
			$('.running_calorie .i_h,.running_calorie .i_min,.running_calorie .i_s').unbind('focus').focus(function() {
				$('#main').css({'top':'-2.8rem'});	
			});

			$('.running_calorie .i_km').unbind('focus').focus(function() {
				$('#main').css({'top':'-2.8rem'});	
			});

			$('.running_calorie .i_cal').unbind('focus').focus(function() {
				$('#main').css({'top':'-2.8rem'});	
			});



		},
		set_xy_config : function(dom1,dom2){//协议
			$(dom1+' .agree_b').on(this.e,function(){
				$(dom1+' .accredit').fadeIn();
				var myScroll = new IScroll(dom1+' .accredit_con', { mouseWheel: true, scrollbars: true, click: true });
			});

			$(dom1+' .btn_yes').on(this.e,function(){
				$(dom1+' .accredit').fadeOut();
				$(dom1+' .agree').addClass('agree_active');
				$(dom2+' .app_btn').addClass('app_btn_active');

			});

			$(dom1+' .btn_no').on(this.e,function(){
				$(dom1+' .accredit').fadeOut();
				$(dom1+' .agree').removeClass('agree_active');
				$(dom2+' .app_btn').removeClass('app_btn_active');

			});
		},
		select_app :function(){//选择4个APP的交互
			$('.app_tab li').each(function(i){
				
				var _this = $(this);
				_this.on('touchstart',function(){
					$('.app_tab li').removeClass('checkbox_app');
					_this.addClass('checkbox_app');
				});
				
			});
		},
		reset_input : function(){//清空所有input数据

			$('input').val('');
		},
		step1 : function(){//第1步:点击下一步按钮的流程
			
			this.send_sms();
			
			$('#register_login .info_btn').on(this.e,function(){
				
				var name = $('#register_login .i_name').val();
				var mobile = $('#register_login .i_phone').val();
				var vcode = $('#register_login .i_code').val();

				if(!form_obj.cheack_name(name)) return false;
				if(!form_obj.cheack_tel(mobile)) return false;
				$('.alert_img,.no_click').show();
				//检测手机验证码(手机验证中...)
				$('#vcode_div,.vcode_div_val').fadeIn();
				$.ajax({
					type: "GET",
					url: "/check/" + mobile + "/" + vcode,
					data: "",
					success: function(msg) {
						var code = msg.code;
						if (code == "200") {
							
							$('.alert_img,.no_click').hide();
							$('#vcode_div,.vcode_div_val').fadeOut();
							$('.login_box').fadeOut();
							$('.app_box').fadeIn();
							stm_clicki('send', 'event', '下一步按钮', '点击', '下一步');stm_clicki('send', 'pageview', {'page': '/selectapp', 'title': '选择跑步app'});
							form_obj.setp2();

						} 
					}
				});
				
				
			});

		},
		setp2 : function(){//第2步:点击提交按钮
			$('#register_login .app_btn').on(this.e, function() {

				if ($('#register_login .app_btn').hasClass('app_btn_active')) {

					//alert('没解锁'+form_obj.is_submit);
					if(form_obj.is_submit == false) return false;
					form_obj.is_submit = false;
					//alert(11223);
					setTimeout(function(){
						form_obj.is_submit =true;
						//alert('解锁'+form_obj.is_submit);
						console.log(form_obj.is_submit);
					},2000);

					var name = $('#register_login .i_name').val();
					var mobile = $('#register_login .i_phone').val();
					var vcode = $('#register_login .i_code').val();
					var apptype = $('.checkbox_app').attr('data');
					
					//平台ID整理
					var pt;
					switch (apptype) {
						case 'app1': //咕咚
							pt = 1;
							break;
						case 'app2': //悦跑
							pt = 2;
							break;
						case 'app3': //悦动
							pt = 3;
							break;
						case 'app4': //手动输入
							pt = 0;
							break;
						default:
							pt = -1;
							break;
					}
					
					//提交
					if (pt >= 0) {
						var data_ary = {};
						data_ary.mobile = mobile;
						data_ary.uname = name;
						data_ary.vcode = vcode;
						data_ary.pt = pt;
						
						//提交
						$.ajax({
							type: "POST",
							url: "/regist",
							data: data_ary,
							success: function(msg) {
								var code = msg.code;
								if (code == "200") {//成功跳转webgl
									console.log(msg);
									
									//更新用户登录状态
									pageData.is_regist = 1;
									pageData.pt = pt;
									pageData.third_key = msg.data.userinfo.third_key;
									//alert(pageData.third_key)
									console.log('regi:');
									console.log(pageData);
									
									stm_clicki('send', 'event', pt, '点击', '提交');stm_clicki('send', 'pageview', {'page': '/energy-art-run', 'title': '能量艺术'});
									
									if(msg.data.dataCount > 0){//有数据(去webgl)
										exposed.fetch(pageData.third_key,0,pageData.pt);
										$('#register_login').hide();
										$('#webglbox,#poster_box,#webgposter').fadeIn();
										
									}else{//没数据

										//(判断是否进入自定义输入的页面)
										$('#customdata').fadeIn();
										$('#register_login').fadeOut();
										var f2 = from_boj2();
										f2.get_val();
										
									}

									$('input').val('');//清空input值
									

									
								} else {
									if (code == "1400") {//请前往咕咚app活动页面报名(给气泡提示)
										$('#gudong_bubble').fadeIn();
										window.location.href = 'http://www.codoon.com';
										return false;
									}
									if(code == "2000"){//硬跳url
										var url = msg.data;
										window.location.href = url;
									}
									if(msg.message){
										layer.msg(msg.message);
									} else {
										layer.msg("未知错误");
									}
								}
							}
						});
					}
				}else{
					layer.msg('请授权于宝马');
				}

			});
		},
		control : function(){//表单流程控制
			this.select_app();
			this.set_xy_config('#runner_area','#register_login');
			this.set_input_height();
			this.step1();
		}

	}
	return form_obj;
}


//form2表单(自定义填数据)
function from_boj2(){

	var form_obj2 = {
		e : 'touchstart',
		get_val : function(){
			
		
			$('#customdata .running_calorie_btn').on(this.e,function(){
				//时，分，秒，公里数，卡路里数(选填选项)
				var h = $('#customdata .i_h').val();
				var m = $('#customdata .i_min').val();
				var s = $('#customdata .i_s').val();
				if(!form_obj2.cheack_val(h,'小时')) return false;
				if(!form_obj2.cheack_val(m,'分钟')) return false;
				if(!form_obj2.cheack_val(s,'秒')) return false;
				//公里数，卡路里数(选填选项)
				var km = $('#customdata .i_km').val();
				var cal = $('#customdata .i_cal').val();
				if(!form_obj2.cheack_val(km,'总公里')) return false;
				
				
				//填好卡路里调用ajax接口存数据
				var url = '/api/running/add';
			
				var post_ary = {};
				post_ary.hour = h; //小时
				post_ary.minute = m; //分钟
				post_ary.second = s; //秒
				post_ary.km = km; //公里
				post_ary.calories = cal; //卡路里
				
				console.log(post_ary);
				
				$.ajax({
					type: "post",
					url: url,
					data: post_ary,
					success: function(msg) {
						var code = msg.code;
						if (code == "200") {
							layer.msg("添加成功");

							$('#poster_box,#webgposter').fadeIn();
							$('#customdata').fadeOut();
							//exposed.fetch(0,function(){});
							//console.log(msg);
							console.log(pageData);
							//alert(pageData.third_key);
							exposed.fetch(pageData.third_key,0,pageData.pt);
							exposed.unlock();
							
							pageData.have_data = 1;//用户此时是有数据状态
							//console.log('添加卡路里接口成功回来:更新用户数据状态pageData.have_data:'+pageData.have_data);
							$('input').val('');//清空input值

						} else if (code == "2000") {
							layer.msg("请重新登录");
						} else {
							if (msg.message) {
								layer.msg(msg.message);
							} else {
								layer.msg("未知错误");
							}
						}
					}
				});
				
				stm_clicki('send', 'event', '提交数据按钮', '点击', '提交');
				stm_clicki('send', 'pageview', {'page': '/energy-art-run', 'title': '能量艺术'});

			});
			

		},
		cheack_val(val,msg){
			if(!val || val == ''){
				layer.msg(msg+'不能为空');
				return false;
			}else{
				return true;
			}
			
		}
	}
	
	return form_obj2;
}

//试驾表单
function testdrive_form(event){
	//点击试驾按钮
    $('.testdrive_from .app_btn').unbind(event).on(event, function() {

        if ($('.testdrive_from .app_btn').hasClass('app_btn_active')) {
            //取值提交给归叔
            var sex = $('.r_input:checked').val(); //性别 1:男 0:女
            var xs = $('.xs_input').val(); //姓氏
            var mz = $('.mz_input').val(); //名字
            var mobile = $('.phone_input').val(); //手机号码
            var type = $('.city option:selected').val(); //车型系列 1:默认没选 2:i3车 3:i4车

            //console.log('车型:' + type);

            var val = $(this).val();
            var reg = /^1[0-9]{10}$/; //验证规则

            //姓氏不能为空
            if (!xs || xs == "") {
                layer.msg('姓名不能为空');
                return false;
            }

            //姓氏不能为空
            if (!mz || mz == "") {
                layer.msg('名字不能为空');
                return false;
            }

            //添加提示信息
            if (!mobile || mobile == '') {
                layer.msg('手机号码不能为空');
                return false;
            } else if (!reg.test(mobile)) {
                layer.msg('请输入正确手机号码');
                return false;
            } else {
                var custom_id = Math.ceil(Math.random() * 10000000);
                //testDrive(sex, xs, mz, mobile, type, testDriveBackPhase1, custom_id);

				var post_ary = {};
				post_ary.sex = sex; //性别 1:男 0:女
				post_ary.xs = xs; //姓氏
				post_ary.mz = mz; //名字
				post_ary.mobile = mobile; //手机号码
				post_ary.type = type; //车型系列 1:默认没选 2:BMW 1系 3:BMW 2系 4:BMW 3系 5:BMW 4系 6:BMW 5系 7:BMW 6系 8:BMW 7系 9:BMW X 10:BMW i 11:BMW Z4 12:BMW M 13:BMW 电动性能     
				post_ary.custom_id = custom_id;

				$.ajax({
					type: "POST",
					url: "/mobile/testdrive",
					data: post_ary,
					success: function(msg) {
						var code = msg.code;
						if (code == "200") {
							//提交成功下一步
							//layer.msg("预约成功");

							layer.msg('预约试驾成功', {
								time: 2000 //2秒关闭（如果不配置，默认是3秒）
							}, function() {
								$('.testdrive_from').fadeOut();
								if(pageData.is_regist == 1){
									$('.testdrive_lastp').fadeIn();
									$('.testdrive_lastp').addClass('testdrive_lastp_a');
									$('.lastp_btn3,.lastp_btn2').hide();
									$('.lastp_btn,.lastp_btn3').show();
									$('.testdrive_lastp').fadeIn();
								}else{
									$('.testdrive_lastp').removeClass('testdrive_lastp_a');
									$('.lastp_btn3,.lastp_btn2').show();
									$('.lastp_btn').hide();
									$('.testdrive_lastp').fadeIn();
								}
								$('input').val('');//清空input值
							});

						} else {
							if (msg.message) {
								layer.msg(msg.message);
							} else {
								layer.msg("未知错误");
							}
						}
					}
				});


                // console.log(custom_id);
                stm_clicki('send', 'event', '提交按钮', '点击', '提交预约信息');
                stm_clicki('send', 'event', {
                    customActionId: 1,
                    customActionLabel1: '1-28707844981W' + custom_id,
                    customActionLabel2: 'E-2017 BMW 预约试驾_BMWi',
                    customActionLabel3: 'MOBILE',
                    customActionLabel4: '注册数据',
                    customActionValue1: '1'
                });
            }
        } else {
            layer.msg('请授权于宝马');
        }
    });

    var testDriveBackPhase1 = function() {//webgl 的试驾

        $('.lastp_btn').hide();
		$('.testdrive_lastp').addClass('testdrive_lastp_a');

    }

	 //试驾的协议
    $('#testdrive .agree_b').on(event, function() {
        $('#accredit_box').fadeIn();
        var myScroll = new IScroll('#testdrive .accredit_con', { mouseWheel: true, scrollbars: true, click: true });
    });

    $('#accredit_box .btn_yes').on(event, function() {
        $('#testdrive #accredit_box').fadeOut();
        $('#testdrive .agree').addClass('agree_active');
        $('#testdrive .app_btn').addClass('app_btn_active');

    });

    $('#accredit_box .btn_no').on(event, function() {
        $('#testdrive #accredit_box').fadeOut();
        $('#testdrive .agree').removeClass('agree_active');
        $('#testdrive .app_btn').removeClass('app_btn_active');

    });


    //试驾添加手机适配上移
    $('#testdrive .xs_input,#testdrive .mz_input').unbind('focus').focus(function() {

        $('#main').css({ 'top': '-1.7rem' });


    });

    $('#yp .user_id').unbind('focus').focus(function() {

        $('#main').css({ 'top': '-2.8rem' });


    });


    $('#testdrive .phone_input').unbind('focus').focus(function() {

        $('#main').css({ 'top': '-2.1rem' });


    });

    $('#testdrive .xs_input,#testdrive .mz_input,#testdrive .phone_input,#yp .user_id').blur(function() { //失去焦点 

        $('#main').css({ 'top': 0 });

    });

	

}


//nav交互
var nav = {
	event : 'touchstart',
	timeout_nav : '',
	add_event : function(){
		var event = this.event;
		//点击导航(切换相应的版块)
        $('.item_style').each(function(i) {
            var t_obj = $(this);
            t_obj.on(event, function() {
                if (!$(this).hasClass('item_active')) {
					
                    $('.nav_link .item_style').removeClass('item_active');
                    t_obj.addClass('item_active');
                    $('.nav_con').fadeOut();
					$('.webglbox,#container').hide();

                    if (t_obj.attr('data') == 1) {//webgl
						reset_alldiv();
						exposed.resetOffset(callback= null);
						$('#runner_area,#webglinfo').fadeIn();
						$('.webglbox,#container').show();
                        nav.close_nav();
                    }

                    if (t_obj.attr('data') == 2) {//数据列表
						
						reset_alldiv();
						$('#webglbox,#container').hide();//停止webgl渲染

						//判断是否登录
						if(pageData.is_regist == 1){
							get_listdata();
							if(pageData.have_data != 1){//登录没数据的情况
								
								$('.shuju_register').hide();
								$('#historicaldata,.shuju_no,.shuju').fadeIn();
								
							}

						}else{//没登录就去登录页面
							
							$('.shuju_no').hide();
							$('#historicaldata,.shuju_register,.shuju').fadeIn();
						}
                      
                        nav.close_nav();
                    }

                    if (t_obj.attr('data') == 3) {//预约试驾
						reset_alldiv();
						$('#webglinfo,#webgposter').hide();
                        $('.testdrive_from').fadeIn();
                        $('#testdrive').fadeIn();
                        nav.close_nav();
                    }


                }
            });
        });

	},
	close_nav : function(){

		clearTimeout(this.timeout_nav);
        this.timeout_nav = setTimeout(function() {

            TweenMax.to($(".nav_link"), 0.2, {
                css: { 'height': '1.058rem' },
                ease: Linear.easeNone,
                onComplete: function() {
                    TweenMax.to($(".nav_link"), 0.2, {
                        opacity: 0,
                        ease: Linear.easeNone,
                        onComplete: function() {
                            $(".nav_link").hide();
                        }
                    });
                }
            });

        }, 100);

	},
	open_nav : function(){
		
		clearTimeout(this.timeout_nav);
        this.timeout_nav = setTimeout(function() {

            $(".nav_link").show();
            TweenMax.to($(".nav_link"), 0.1, {
                opacity: 1,
                ease: Linear.easeNone,
                onComplete: function() {
                    TweenMax.to($(".nav_link"), 0.1, {
                        ease: Linear.easeNone,
                        onComplete: function() {
                            TweenMax.to($(".nav_link"), 0.5, {
                                css: { 'height': '8rem' },
                                ease: Linear.easeNone,
                                onComplete: function() {

                                }
                            });
                        }
                    });
                }
            });

        }, 100);

	},
	nav_start: function(){

		nav.add_event();
		        
        $('.nav_up').on(this.event, function(event) {
			//alert(112233);
            event.stopPropagation();
            nav.open_nav();

        });

        $(document).on(this.event, function(event) {
            //event.stopPropagation();
            nav.close_nav();

        });

       
        $('.return').on(this.event, function(event) {
			$('input').val('');
			exposed.resetOffset();
            event.stopPropagation();
			exposed.unlock();
			var num = $('.item_active').attr('data');
			
            if(num == 1){
				//exposed.fetchKol(closure);
				exposed.fetch(pageData.third_key,0,4);
				reset_alldiv();
				$('#runner_area,#webglinfo').fadeIn();
				$('.webglbox,#container').fadeIn();
			}

			if(num == 2){
				reset_alldiv();
				$('#historicaldata,.shuju').fadeIn();
			}


			if(num == 3){
				reset_alldiv();
				$('#testdrive,.testdrive_from').fadeIn();
				$('.webglbox,#container').hide();
			}

        });


	}
	

}

//取列表数据
function get_listdata(){
		var url = '/api/run/list';
		$('.load_bg').show();
		$.ajax({
			type: "get",
			url: url,
			data: '',
			success: function(msg) {
				var code = msg.code;
				if (code == "200") {
					
					console.log('list:');
					console.log(pageData);
					console.log(msg);
					

					if(msg.data.length >0){//如果成功有数据的话(拼数据)
						pageData.have_data = 1;

						var html="";				
						for(var i =0 ; i<msg.data.length; i++){

							html += '<div class="item" data="'+msg.data[i].runner_id+'">';
							html +='<div class="date">'+msg.data[i].start_time_str.substr(0,10)+'</div>';
							html += '<div class="km">' +msg.data[i].total_distance_km+'KM</div>';
							html += '<div class="time">'+msg.data[i].total_time_detail+'</div></div>';

						
						
							
						}

						if(msg.data.length > 8){
							var myScroll = new IScroll('.shuju_list', { mouseWheel: true, scrollbars: true, click: true });
						}
						

						

						
						$('.shuju_list .list').html(html);
						$('.shuju_list .list .item').each(function(i){

							 $(this).on('touchstart',function(){
								 exposed.unlock();
								 exposed.fetch(pageData.third_key,$(this).attr('data'),pageData.pt,function(){
									$('#historicaldata,#register_login').fadeOut();
									$('#webglbox,#container,#runner_area,#webgposter,#poster_box').fadeIn();
								 });
							 });
							
						});
						console.log(msg.data);
						$('.shuju_no').hide();
						$('.item_style').removeClass('item_active');
						$('.item_list').addClass('item_active');
					}else{

						$('.shuju_no').show();
					}
					
				} else if (code == "2000") {
					layer.msg("请重新登录");
				} else {
					if (msg.message) {
						layer.msg(msg.message);
					} else {
						layer.msg("未知错误");
					}
				}

				$('.load_bg').hide();
			}
		});
}

//重置流程显示隐藏区块
function reset_alldiv(){
	
	$('.nav_con,#webglbox,#container,.poster_img').hide();
	
	if($('.item_active').attr('data') == 1){//注册流程
		$('.register_login,#customdata,#webgposter,.login_box,.app_box,.running_calorie,#poster_box,.poster_img').hide();
		$('#runner_area,#webglbox,#container,#webglinfo').show();
	}

	if($('.item_active').attr('data') == 2){
		$('#historicaldata').show();
	}

	if($('.item_active').attr('data') == 3){
		$('#testdrive').show();
	}



}


//协议交互(点击协议按钮赋值)
function appagree_setval(appagree) {

    $(appagree.dom).on('touchstart', function() {
        var obj = $(this);

        if (appagree.isclick == 0) {
            obj.attr('data', '1');
            obj.parent().addClass('agree_active');
            obj.parent().next().addClass('app_btn_active');
            appagree.isclick = 1;

        } else {
            obj.attr('data', '0');
            obj.parent().removeClass('agree_active');
            obj.parent().next().removeClass('app_btn_active');
            appagree.isclick = 0;
        }
    });
}

