// JavaScript Document

var json = [  
	{ 	// img1
		num:5,
		title:'被雀羚12节气  - 前端开发',
		link:'<a href="www/pechoin/index.html" target="_blank">http://www.pechoin.com/</a>',
		date:'2017 Year',
	},
	{ 	// img2
		num:5,
		title:'观池互动 - 互动设计 / 前端开发',
		link:'<a href="http://www.g-i.asia" target="_blank">www.g-i.asia</a>',
		date:'2014 Year',
	},
	{ 	// img3
		num:5,
		title:'全棉时代 - 前端开发',
		link:'<a href="www/purcotton/index.html" target="_blank">http://www.purcotton/</a>',
		date:'2017 Year',
	},
	{ 	// img4
		num:8,
		title:'BMW Running Campaign 能量艺术跑 - 互动设计 / 前端开发',
		link:'<a href="www/bmw2017/index.html" target="_blank">https://www.bmw2017.com/</a>',
		date:'2017 Year',
	},
	{ 	// img5
		num:7,
		title:'SHDS 迪士尼 / 前端开发',
		link:'<a href="https://blessing.campaign-mobile.com/" target="_blank">https://blessing.campaign-mobile.com/</a>',
		date:'2018 Year',
	},
	{ 	// img6
		num:5,
		title:'WorldLink - 网页设计',
		link:'',
		date:'2017 Year',
	},
	{ 	// img7
		num:5,
		title:'观池官网 - Mobile设计',
		link:'<a href="http://www.gwantsi.com" target="_blank">http://www.gwantsi.com/</a>',
		date:'2017 Year',
	},
	{ 	// img8
		num:5,
		title:'观池互动平台 - 互动设计 / 前端开发',
		link:'<a href="www/gibbs/index.html" target="_blank">http://gibbs.com/</a>',
		date:'2014 Year',
	},
	{ 	// img9
		num:5,
		title:'MediaLab360度直播 - 互动设计',
		link:'',
		date:'2016 Year',
	},
	{ 	// img10
		num:3,
		title:'卡通倒计时动画/翻滚的小球/书本翻页的GIF动画 - AE特效',
		link:'<a href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>',
		date:'2017 Year',
	},
	{ 	// img11
		num:6,
		title:'红咖直播 - APP设计',
		link:'',
		date:'2016 Year',
	},
	{ 	// img12
		num:5,
		title:'MediaLabParty - 平面设计',
		link:'',
		date:'2016 Year',
	},
	{ 	// img13
		num:5,
		title:'有货 - 前端开发',
		link:'<a href="www/yoho/index.html" target="_blank">http://yoho.com/</a>',
		date:'2017 Year',
	},
	{ 	// img14
		num:8,
		title:'德福360度 - 互动设计 / 前端开发',
		link:'<a href="www/scguanchi/index.html" target="_blank">https://scguanchi.com/</a>',
		date:'2017 Year',
	},
	{ 	// img15
		num:6,
		title:'观池英模派 - 平面设计',
		link:'',
		date:'2016 Year',
	},
	{ 	// img16
		num:7,
		title:'Jaguar XF - 前端开发',
		link:'<a href="www/jaguar/index.html" target="_blank">https://jaguar.com/</a>',
		date:'七月 28，2017',
	}
];

//图片预加载
var imgSrcArr1 = [
	'images/work/img1/cover.jpg',
	'images/work/img2/cover.jpg',
	'images/work/img3/cover.jpg',
	'images/work/img4/cover.jpg',
	'images/work/img5/cover.jpg',
	'images/work/img6/cover.jpg',
	'images/work/img7/cover.jpg',
	'images/work/img8/cover.jpg',
	'images/work/img9/cover.jpg',
	'images/work/img10/cover.jpg',
	'images/work/img11/cover.jpg',
	'images/work/img12/cover.jpg',
	'images/work/img13/cover.jpg',
	'images/work/img14/cover.jpg',
	'images/work/img15/cover.jpg',
	'images/work/img16/cover.jpg'
];

var imgSrcArr2 = [
    'images/work/img1/img1.jpg',
    'images/work/img1/img2.jpg',
    'images/work/img1/img3.jpg',
    'images/work/img1/img4.jpg',
    'images/work/img1/img5.jpg',
    'images/work/img2/img1.jpg',
    'images/work/img2/img2.jpg',
    'images/work/img2/img3.jpg',
    'images/work/img2/img4.jpg',
    'images/work/img2/img5.jpg',
    'images/work/img3/img1.jpg',
    'images/work/img3/img2.jpg',
    'images/work/img3/img3.jpg',
    'images/work/img3/img4.jpg',
    'images/work/img3/img5.jpg',
    'images/work/img4/img1.jpg',
    'images/work/img4/img2.jpg',
    'images/work/img4/img3.jpg',
    'images/work/img4/img4.jpg',
    'images/work/img4/img5.jpg',
    'images/work/img4/img6.jpg',
    'images/work/img4/img7.jpg',
    'images/work/img4/img8.jpg',
    'images/work/img5/img1.jpg',
    'images/work/img5/img2.jpg',
    'images/work/img5/img3.jpg',
    'images/work/img5/img4.jpg',
    'images/work/img5/img5.jpg',
    'images/work/img5/img6.jpg',
    'images/work/img5/img7.jpg',
    'images/work/img6/img1.jpg',
    'images/work/img6/img2.jpg',
    'images/work/img6/img3.jpg',
    'images/work/img6/img4.jpg',
    'images/work/img6/img5.jpg',
    'images/work/img7/img1.jpg',
    'images/work/img7/img2.jpg',
    'images/work/img7/img3.jpg',
    'images/work/img7/img4.jpg',
    'images/work/img7/img5.jpg',
    'images/work/img8/img1.jpg',
    'images/work/img8/img2.jpg',
    'images/work/img8/img3.jpg',
    'images/work/img8/img4.jpg',
    'images/work/img8/img5.jpg',
    'images/work/img9/img1.jpg',
    'images/work/img9/img2.jpg',
    'images/work/img9/img3.jpg',
    'images/work/img9/img4.jpg',
    'images/work/img9/img5.jpg',
    'images/work/img10/img1.jpg',
    'images/work/img10/img2.jpg',
    'images/work/img10/img3.jpg',
    'images/work/img11/img1.jpg',
    'images/work/img11/img2.jpg',
    'images/work/img11/img3.jpg',
    'images/work/img11/img4.jpg',
    'images/work/img11/img5.jpg',
    'images/work/img11/img6.jpg',
    'images/work/img12/img1.jpg',
    'images/work/img12/img2.jpg',
    'images/work/img12/img3.jpg',
    'images/work/img12/img4.jpg',
    'images/work/img12/img5.jpg',
    'images/work/img13/img1.jpg',
    'images/work/img13/img2.jpg',
    'images/work/img13/img3.jpg',
    'images/work/img13/img4.jpg',
    'images/work/img13/img5.jpg',
    'images/work/img14/img1.jpg',
    'images/work/img14/img2.jpg',
    'images/work/img14/img3.jpg',
    'images/work/img14/img4.jpg',
    'images/work/img14/img5.jpg',
    'images/work/img14/img6.jpg',
    'images/work/img14/img7.jpg',
    'images/work/img14/img8.jpg',
    'images/work/img15/img1.jpg',
    'images/work/img15/img2.jpg',
    'images/work/img15/img3.jpg',
    'images/work/img15/img4.jpg',
    'images/work/img15/img5.jpg',
    'images/work/img15/img6.jpg',
    'images/work/img16/img1.jpg',
    'images/work/img16/img2.jpg',
    'images/work/img16/img3.jpg',
    'images/work/img16/img4.jpg',
    'images/work/img16/img5.jpg',
    'images/work/img16/img6.jpg',
    'images/work/img16/img7.jpg'
]

var imgWrap = [];

function preloadImg(arr) {
    for(var i =0; i< arr.length ;i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(imgSrcArr1);

preloadImg(imgSrcArr2);


