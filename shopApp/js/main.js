 mui.init()
    var subpages = ['home.html', 'group.html', 'fastStore.html', 'mine.html'];
			var subpage_style = [
				{top: '45px',bottom: '51px'},
				{top: '90px',bottom: '51px'},
				{top: '90px',bottom: '51px'},
				{top: '45px',bottom: '51px'},
			];
			
			var aniShow = {};
			
			 //创建子页面，首个选项卡页面显示，其它均隐藏；
			mui.plusReady(function() {
				var self = plus.webview.currentWebview();
				for (var i = 0; i < 4; i++) {
					var temp = {};
					var sub = plus.webview.create(subpages[i], subpages[i], subpage_style[i]);
					if (i > 0) {
						sub.hide();
					}else{
						temp[subpages[i]] = "true";
						mui.extend(aniShow,temp);
					}
					self.append(sub);
				}
			});
			 //当前激活选项
			var activeTab = subpages[0];
			var title = document.getElementById("title");
			 //选项卡点击事件
			mui('.mui-bar-tab').on('tap', 'a', function(e) {
				var targetTab = this.getAttribute('href');
				if (targetTab == activeTab) {
					return;
				}
				//更换标题
//				title.innerHTML = this.querySelector('.mui-tab-label').innerHTML;
				switch(this.querySelector('.mui-tab-label').innerHTML){
					case "首页":
						title.innerHTML='<div class="mui-col mui-col-xs-2 header-localtion">'+
									    	'<a>烟台<span class="mui-icon mui-icon-arrowdown"></span></a>'+
									    '</div>'+
									    '<div class="mui-col mui-col-xs-10">'+
									    	'<div class="mui-input-row mui-search">'+
									       		'<input type="search" class="mui-input-clear" placeholder="请输入您想找的内容">'+
									   		'</div>'+
									    '</div>';
					break;
					
					case "团购":
						title.innerHTML='<div class="mui-input-row mui-search">'+
		        							'<input type="search" class="mui-input-clear" placeholder="请输入关键词">'+
		    							'</div>'+
		    							'<div class="mui-bar">'+
		    								'<div class="mui-col mui-col-xs-4">'+
		    									'12'+
		    								'</div>'+
		    								'<div class="mui-col mui-col-xs-4">'+
		    									'23'+
		    								'</div>'+
		    								'<div class="mui-col mui-col-xs-4">'+
		    									'34'+
		    								'</div>'+
		    							'</div>';
					break;
					case "快餐":
						title.innerHTML='<div class="mui-input-row mui-search">'+
		        							'<input type="search" class="mui-input-clear" placeholder="请输入关键词">'+
		    							'</div>'+
		    							'<div class="mui-bar">'+
		    								'<div class="mui-col mui-col-xs-4">'+
		    									'全部分类'+
		    								'</div>'+
		    								'<div class="mui-col mui-col-xs-4">'+
		    									'全城'+
		    								'</div>'+
		    								'<div class="mui-col mui-col-xs-4">'+
		    									'离我最近'+
		    								'</div>'+
		    							'</div>';
					break;
					case "我的":
						title.innerHTML=' <a class="mui-action-back mui-icon mui-icon-gear mui-pull-right"></a>'+
		    							' <h1 class="mui-title">会员中心</h1>';
					break;
				}
				
				//显示目标选项卡
				//若为iOS平台或非首次显示，则直接显示
				if(mui.os.ios||aniShow[targetTab]){
					plus.webview.show(targetTab);
				}else{
					//否则，使用fade-in动画，且保存变量
					var temp = {};
					temp[targetTab] = "true";
					mui.extend(aniShow,temp);
					plus.webview.show(targetTab,"fade-in",300);
				}
				//隐藏当前;
				plus.webview.hide(activeTab);
				//更改当前活跃的选项卡
				activeTab = targetTab;
			});
			 //自定义事件，模拟点击“首页选项卡”
			document.addEventListener('gohome', function() {
				var defaultTab = document.getElementById("defaultTab");
				//模拟首页点击
				mui.trigger(defaultTab, 'tap');
				//切换选项卡高亮
				var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
				if (defaultTab !== current) {
					current.classList.remove('mui-active');
					defaultTab.classList.add('mui-active');
				}
			});