// JavaScript Document

$(function() {

	var url = window.location.href;
	var loc = url.substring(url.lastIndexOf('/') + 1, url.length);

	if (loc == 'index.html') {
		wrapItem('work', 'cover');
	} else if (loc == 'personal.html') {
		wrapItem('personal', 'img1');
	}

	function wrapItem(ev, img) {

		var wrap = $('.wrap');

		var list = '';

		for (var i = 1; i <= json.length; i++) {
			list += '<div class="item">' + 
						'<div class="img-box">' + 
							'<a class="img-a"><img src="images/' + ev + '/img' + i + '/' + img + '.jpg" /></a>' + 
							'<h2 class="present"><a title='+ json[i - 1].title +'>' + json[i - 1].title + '</a></h2>' + 
						'</div>' + 
					'</div>';
		}

		wrap.prepend(list);

	}

	var item = $('.item');

	item.each(function() {
		
		var _this = $(this),
			img_a = _this.find('.img-a,h2 a'),
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

		img_a.click(function() {
			index = _this.index() + 1;
			imgHref();
			$('body').addClass("overflow-hidden");
		});

		function imgHref() {
			var url = window.location.href;
			var loc = url.substring(url.lastIndexOf('/') + 1, url.length);

			if (loc == 'index.html') {
				MediaModal('work');
			} else if (loc == 'personal.html') {
				MediaModal('personal');
			}
		}

		function MediaModal(id) {
			var img_str = '';
				img_str += '<div class="MediaModal">' + 
								'<div class="MediaImage">';
				for (var i = 1; i <= json[index - 1].num; i++) {
					img_str += '<i class="MediaItem"><img src="images/' + id + '/img' + index + '/img' + i + '.jpg" /></i>';
				}
					img_str += '</div>' + 
								'<div class="infor">' + 
									'<h2>' + json[index - 1].title + '</h2>' + 
									'<p class="visit">' + json[index - 1].link + '</p>' + 
									'<p class="time">' + json[index - 1].date + '</p>' + 
								'</div>' + 
								'<i class="modalClose"><img src="images/global/x_img.png" /></i>' + 
								'<samp class="nextPost"><img src="images/global/l_ico.png" /></samp>' + 
								'<span class="prevPost"><img src="images/global/r_ico.png" /></span>' + 
							'</div>';
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
		$('body').removeClass("overflow-hidden");
	});

	//禁止手表右键
	// document.oncontextmenu = function() {
	// 	return false;
	// }

});
