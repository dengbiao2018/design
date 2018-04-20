// JavaScript Document

var json = [  
	{ 	// img1
		num:2,
		title:'周末',
		link:'<a href="https://bcy.net/start/" target="_blank">https://bcy.net/start/</a>',
		date:'2017 Year',
	},
	{ 	// img2
		num:6,
		title:'顾村公园',
		link:'',
		date:'2018 Year',
	},
	{ 	// img3
		num:9,
		title:'老街',
		link:'<a href="https://www.dandad.org/" target="_blank">https://www.dandad.org/</a>',
		date:'2017 Year',
	},
	{ 	// img4
		num:8,
		title:'世纪公园',
		link:'<a href="https://juejin.im/" target="_blank">https://juejin.im/</a>',
		date:'2018 Year',
	},
	{ 	// img5
		num:16,
		title:'太湖',
		link:'<a href="http://www.pinterest.com/" target="_blank">http://www.pinterest.com/</a>',
		date:'2017 Year',
	},
	{ 	// img6
		num:12,
		title:'西湖一游',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2017 Year',
	},
	{ 	// img7
		num:2,
		title:'来来回回火车上',
		link:'<a href="https://tinypng.com/" target="_blank">https://tinypng.com/</a>',
		date:'2017 Year',
	},
	{ 	// img8
		num:1,
		title:'大邵东高铁站',
		link:'<a href="https://dribbble.com/" target="_blank">https://dribbble.com/</a>',
		date:'2017 Year',
	},
	{ 	// img9
		num:1,
		title:'清晨是冷的',
		link:'<a href="https://www.toptal.com/designers/htmlarrows/arrows/" target="_blank">https://www.toptal.com/designers/htmlarrows/arrows/</a>',
		date:'2017 Year',
	},
	{ 	// img10
		num:1,
		title:'包场的感觉',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2016 Year',
	},
	{ 	// img11
		num:10,
		title:'野生动物园',
		link:'<a href="http://www.archcollege.com/archcollege/2017/02/30805.html" target="_blank">http://www.archcollege.com/archcollege/2017/02/30805.html</a>',
		date:'2016 Year',
	},
	{ 	// img12
		num:2,
		title:'虹桥火车站',
		link:'<a href="https://www.toptal.com/designers/subtlepatterns/" target="_blank">https://www.toptal.com/designers/subtlepatterns/</a>',
		date:'2016 Year',
	},
	{ 	// img13
		num:7,
		title:'野生动物园',
		link:'<a href="https://logopond.com/" target="_blank">https://logopond.com/</a>',
		date:'2016 Year',
	},
	{ 	// img14
		num:1,
		title:'回家',
		link:'',
		date:'2017 Year',
	},
	{ 	// img15
		num:1,
		title:'随拍',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2016 Year',
	},
	{ 	// img16
		num:2,
		title:'黑白照',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2016 Year',
	},
	{ 	// img17
		num:1,
		title:'篮球场',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2015 Year',
	},
	{ 	// img18
		num:2,
		title:'又一次离开家乡',
		link:'',
		date:'2015 Year',
	},
	{ 	// img19
		num:4,
		title:'上海的夜景',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2015 Year',
	},
	{ 	// img20
		num:9,
		title:'生物万象',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2018 Year',
	},
	{ 	// img21
		num:1,
		title:'忽闪又一次',
		link:'',
		date:'2015 Year',
	},
	{ 	// img22
		num:4,
		title:'聚餐',
		link:'<a href="https://www.dandad.org/" target="_blank">https://www.dandad.org/</a>',
		date:'2017 Year',
	},
	{ 	// img23
		num:10,
		title:'团建活动',
		link:'<a href="https://juejin.im/" target="_blank">https://juejin.im/</a>',
		date:'2017 Year',
	},
	{ 	// img24
		num:2,
		title:'搬家',
		link:'<a href="https://tinypng.com/" target="_blank">https://tinypng.com/</a>',
		date:'2015 Year',
	},
	{ 	// img25
		num:2,
		title:'通宵起来自己都害怕',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2017 Year',
	}
];	

//图片预加载
var imgSrcArr = [
	'images/work/img1/img1.jpg',
	'images/work/img2/img1.jpg',
	'images/work/img3/img1.jpg',
	'images/work/img4/img1.jpg',
	'images/work/img5/img1.jpg',
	'images/work/img6/img1.jpg',
	'images/work/img7/img1.jpg',
	'images/work/img8/img1.jpg',
	'images/work/img9/img1.jpg',
	'images/work/img10/img1.jpg',
	'images/work/img11/img1.jpg',
	'images/work/img12/img1.jpg',
	'images/work/img13/img1.jpg',
	'images/work/img14/img1.jpg',
	'images/work/img15/img1.jpg',
	'images/work/img16/img1.jpg',
	'images/work/img17/img1.jpg',
	'images/work/img18/img1.jpg',
	'images/work/img19/img1.jpg',
	'images/work/img20/img1.jpg',
	'images/work/img21/img1.jpg',
	'images/work/img22/img1.jpg',
	'images/work/img23/img1.jpg',
	'images/work/img24/img1.jpg',
	'images/work/img25/img1.jpg',
    'images/work/img1/img2.jpg',
    'images/work/img2/img2.jpg',
    'images/work/img2/img3.jpg',
    'images/work/img2/img4.jpg',
    'images/work/img2/img5.jpg',
    'images/work/img2/img6.jpg',
    'images/work/img3/img2.jpg',
    'images/work/img3/img3.jpg',
    'images/work/img3/img4.jpg',
    'images/work/img3/img5.jpg',
    'images/work/img3/img6.jpg',
    'images/work/img3/img7.jpg',
    'images/work/img3/img8.jpg',
    'images/work/img3/img9.jpg',
    'images/work/img4/img2.jpg',
    'images/work/img4/img3.jpg',
    'images/work/img4/img4.jpg',
    'images/work/img4/img5.jpg',
    'images/work/img4/img6.jpg',
    'images/work/img4/img7.jpg',
    'images/work/img4/img8.jpg',
    'images/work/img5/img2.jpg',
    'images/work/img5/img3.jpg',
    'images/work/img5/img4.jpg',
    'images/work/img5/img5.jpg',
    'images/work/img5/img6.jpg',
    'images/work/img5/img7.jpg',
    'images/work/img5/img8.jpg',
    'images/work/img5/img9.jpg',
    'images/work/img5/img10.jpg',
    'images/work/img5/img11.jpg',
    'images/work/img5/img12.jpg',
    'images/work/img5/img13.jpg',
    'images/work/img5/img14.jpg',
    'images/work/img5/img15.jpg',
    'images/work/img5/img16.jpg',
    'images/work/img6/img2.jpg',
    'images/work/img6/img3.jpg',
    'images/work/img6/img4.jpg',
    'images/work/img6/img5.jpg',
    'images/work/img6/img6.jpg',
    'images/work/img6/img7.jpg',
    'images/work/img6/img8.jpg',
    'images/work/img6/img9.jpg',
    'images/work/img6/img10.jpg',
    'images/work/img6/img11.jpg',
    'images/work/img6/img12.jpg',
    'images/work/img7/img2.jpg',
    'images/work/img11/img2.jpg',
    'images/work/img11/img3.jpg',
    'images/work/img11/img4.jpg',
    'images/work/img11/img5.jpg',
    'images/work/img11/img6.jpg',
    'images/work/img11/img7.jpg',
    'images/work/img11/img8.jpg',
    'images/work/img11/img9.jpg',
    'images/work/img11/img10.jpg',
    'images/work/img12/img2.jpg',
    'images/work/img13/img2.jpg',
    'images/work/img13/img3.jpg',
    'images/work/img13/img4.jpg',
    'images/work/img13/img5.jpg',
    'images/work/img13/img6.jpg',
    'images/work/img13/img7.jpg',
    'images/work/img16/img2.jpg',
    'images/work/img18/img2.jpg',
    'images/work/img19/img2.jpg',
    'images/work/img19/img3.jpg',
    'images/work/img19/img4.jpg',
    'images/work/img20/img2.jpg',
    'images/work/img20/img3.jpg',
    'images/work/img20/img4.jpg',
    'images/work/img20/img5.jpg',
    'images/work/img20/img6.jpg',
    'images/work/img20/img7.jpg',
    'images/work/img20/img8.jpg',
    'images/work/img20/img9.jpg',
    'images/work/img22/img2.jpg',
    'images/work/img22/img3.jpg',
    'images/work/img22/img4.jpg',
    'images/work/img23/img2.jpg',
    'images/work/img23/img3.jpg',
    'images/work/img23/img4.jpg',
    'images/work/img23/img5.jpg',
    'images/work/img23/img6.jpg',
    'images/work/img23/img7.jpg',
    'images/work/img23/img8.jpg',
    'images/work/img23/img9.jpg',
    'images/work/img23/img10.jpg',
    'images/work/img24/img2.jpg',
    'images/work/img25/img2.jpg'
];

var imgWrap = [];

function preloadImg(arr) {
    for(var i =0; i< arr.length ;i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(imgSrcArr);