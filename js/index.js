// JavaScript Document
$(function(){
	var personal_item = $('.personal .img-a,.personal h2 a');
	personal_item.click(function(){
		$(".MediaModal").show();
		$('body').addClass("overflow-hidden");
	})
	$(".modalClose,.MediaImage").click(function(){
		$(".MediaModal").hide();
		$('body').removeClass("overflow-hidden");
	})
});
