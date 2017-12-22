// JavaScript Document
$(function(){

	var json = [  
		{ 	// img1
			imgNum:6,
			title:'clemm',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'一月 28，2017',
		},
		{ 	// img2
			imgNum:2,
			title:'victoriamichalsen',
			link:'',
			date:'二月 28，2017',
		},
		{ 	// img3
			imgNum:3,
			title:'linnealinnanmaki',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'三月 28，2017',
		},
		{ 	// img4
			imgNum:2,
			title:'briannnalynne3',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'四月 28，2017',
		},
		{ 	// img5
			imgNum:3,
			title:'averyh11',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'五月 28，2017',
		},
		{ 	// img6
			imgNum:2,
			title:'carlalrosado',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'六月 28，2017',
		},
		{ 	// img7
			imgNum:4,
			title:'alicebbrown',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'七月 28，2017',
		},
		{ 	// img8
			imgNum:3,
			title:'dinahpena',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'八月 28，2017',
		},
		{ 	// img9
			imgNum:3,
			title:'lorenapinotto',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'九月 28，2017',
		},
		{ 	// img10
			imgNum:3,
			title:'flatz',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'十月 28，2017',
		},
		{ 	// img11
			imgNum:2,
			title:'flatz',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'十一月 28，2017',
		},
		{ 	// img12
			imgNum:2,
			title:'flatz',
			link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
			date:'十二月 28，2017',
		}
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
				index = _this.index()+1;
				MediaModal();
				$('body').addClass("overflow-hidden");
			});

			function MediaModal(){
				var img_str='';
				img_str +='<div class="MediaModal">'+
								'<div class="MediaImage">';
								for(var i=1;i<=json[index-1].imgNum;i++){
									img_str +='<i class="MediaItem"><img src="images/personal/img'+index+'/img'+i+'.jpg" /></i>';
								}	
								img_str +='</div>'+
								'<div class="infor">'+
									'<h2>'+json[index-1].title+'</h2>'+
									'<p class="visit">'+json[index-1].link+'</p>'+
									'<p class="time">'+json[index-1].date+'</p>'+
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
				else if(index == item.length)
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
