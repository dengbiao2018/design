// JavaScript Document
$(function(){
	
					
	num=[
		6,2,3,1,3,2,4,3,3,3,2,2
	];

	var item = $('.item');
		item.each(function(){
			var _this = $(this),
				img_a = _this.find('.img-a,h2 a'),
				index = _this.index()+1;

			_this.on('click','samp',function(){
				$(".MediaModal").remove();
				index--;
				MediaModal();
				if(index == 1) 
				{	
					$('samp').addClass("btnActive");
				}
			})

			_this.on('click','span',function(){
				$(".MediaModal").remove();
				index++;
				MediaModal();
				if(index == item.length) 
				{	
					$('span').addClass("btnActive");
				}
			})

			img_a.click(function(){			
				// var e = $(this).attr('data');
				index = _this.index()+1;
				MediaModal();
				$('body').addClass("overflow-hidden");
			});

			function MediaModal(){
				var img_str='';
				img_str +='<div class="MediaModal">'+
								'<div class="MediaImage">';
								for(var i=1;i<=num[index-1];i++){
									img_str +='<i class="MediaItem"><img src="images/personal/img'+index+'/img'+i+'.jpg" /></i>';
								}	
								img_str +='</div>'+
								'<div class="infor">'+
									'<h2>比利假日的岩石在Nunhead的高街艺术品！</h2>'+
									'<p class="visit"><a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a></p>'+
									'<p class="time">十一月 28，2017</p>'+
								'</div>'+
								'<i class="modalClose"><img src="images/global/x_img.png" /></i>'+
								'<samp class="nextPost"><img src="images/global/l_ico.png" /></samp>'+
								'<span class="prevPost"><img src="images/global/r_ico.png" /></span>'+
							'</div>';
				_this.prepend(img_str);

				if(index == 1) 
				{	
					$('samp').addClass("btnActive");
				}

				if(index == item.length) 
				{	
					$('span').addClass("btnActive");
				}

			};

		});
			

	$("#main").on('click','i',function(){
		$(".MediaModal").remove();
		$('body').removeClass("overflow-hidden");
	});
				
	/*禁止手表右键*/
	document.oncontextmenu = function(){
	    return false;
	} 

});
