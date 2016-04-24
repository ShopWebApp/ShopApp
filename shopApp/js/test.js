 	switch (this.querySelector('.mui-tab-label').innerHTML) {
 		case "首页":
 			title.innerHTML = '<div class="mui-col mui-col-xs-2 header-localtion">' +
 				'<a>烟台<span class="mui-icon mui-icon-arrowdown"></span></a>' +
 				'</div>' +
 				'<div class="mui-col mui-col-xs-10">' +
 				'<div class="mui-input-row mui-search">' +
 				'<input type="search" class="mui-input-clear" placeholder="请输入您想找的内容">' +
 				'</div>' +
 				'</div>';
 			break;

 		case "团购":
 			title.innerHTML = '<div class="mui-input-row mui-search">' +
 				'<input type="search" class="mui-input-clear" placeholder="请输入关键词">' +
 				'</div>' +
 				'<div class="mui-bar">' +
 				'<div class="mui-col mui-col-xs-4">' +
 				'12' +
 				'</div>' +
 				'<div class="mui-col mui-col-xs-4">' +
 				'23' +
 				'</div>' +
 				'<div class="mui-col mui-col-xs-4">' +
 				'34' +
 				'</div>' +
 				'</div>';
 			break;
 		case "快餐":
 			title.innerHTML = '<div class="mui-input-row mui-search">' +
 				'<input type="search" class="mui-input-clear" placeholder="请输入关键词">' +
 				'</div>' +
 				'<div class="mui-bar">' +
 				'<div class="mui-col mui-col-xs-4">' +
 				'12' +
 				'</div>' +
 				'<div class="mui-col mui-col-xs-4">' +
 				'23' +
 				'</div>' +
 				'<div class="mui-col mui-col-xs-4">' +
 				'34' +
 				'</div>' +
 				'</div>';
 			break;
 		case "我的":
 			title.innerHTML = ' <a class="mui-action-back mui-icon mui-icon-gear mui-pull-right"></a>' +
 				' <h1 class="mui-title">会员中心</h1>';
 			break;
 	}
 	


