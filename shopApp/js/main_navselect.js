var NavSelect=function(id,base){
	if(this instanceof NavSelect){
		this.id=id;
		this.base=base;
	}else{
		return new NavSelect(id,base);
	}
}
NavSelect.prototype={
	init:function(){
		var That=this;
		That.createNav();
		That.addEvent();
	},
	createNav:function(){
		var That=this;
	   	var doms='<div class="mui-bar navselect">'+
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
		  That.id.innerHTML+=doms;
	},
	/*index:索引  className*/
	createSubleft:function(index){
		var That=this;
		var box=document.createElement('div');
		box.className='mui-bar navselectSub';
		box.id='navselectSub';
		var leftstr='<div class="navselectSub-left"><div class="mui-scroll-wrapper"><div class="mui-scroll">';
		for(var i in That.base.all[index]){
			leftstr+='<div class="left">'+i+'</div>';
		}
		leftstr+='</div></div></div>';
		box.innerHTML=leftstr;
		That.id.appendChild(box);
		mui('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: true, //是否显示滚动条
			deceleration: 0.0006
		});
	},
	createSubRight:function(id,indexValue){
		var That=this;
		var box=document.createElement('div');
		box.className='navselectSub-right';
		var rightstr='<div class="mui-scroll-wrapper"><div class="mui-scroll">';
		if(That.base.all[That.navindex][indexValue]!=''){
			var arr=That.base.all[That.navindex][indexValue].toString().split(',');
			for(var i=0;i<arr.length;i++){
				console.log(arr[i]);
				rightstr+='<div class="right">'+arr[i]+'</div>';
			}
		}
		rightstr+='</div></div>';
		box.innerHTML=rightstr;
		id.appendChild(box);
		mui('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: true, //是否显示滚动条
			deceleration: 0.0006
		});
	},
	addEvent:function(){
		var That=this;
		this.id.addEventListener("tap",function(event){
			var target=event.target;
			if(target.className==='mui-col mui-col-xs-4')
			{
				console.log(target.className);
//				console.log(That.id.lastChild.className);
				if(That.id.lastChild.className==='mui-bar navselectSub')
				{
					That.id.removeChild(That.id.lastChild);
				}
				That.navindex=$(target).index();
				/*全部分类 全城 离我最近*/
				$(target).addClass('active');
				$(target).siblings().removeClass('active');
				That.createSubleft($(target).index());
				That.allselect=target;
				$('.mui-bar.navselectSub').addClass('active');
				return;
			}
			if(target.className==='mui-col mui-col-xs-4 active'){
				console.log(target.className);
				$(target).removeClass('active');
				$('.mui-bar.navselectSub').removeClass("active");
				return;
			}
			if(target.className==='left'){
				console.log(target.parentNode.className);
				if(That.id.lastChild.lastChild.className==='navselectSub-right'){
					That.allselect.innerText=target.innerText;
					That.id.lastChild.removeChild(That.id.lastChild.lastChild);
				}else{
					console.log("跳转");
					That.allselect.innerText=target.innerText;
				}
				That.createSubRight(target.parentNode.parentNode.parentNode.parentNode,target.innerText);
			}
			if(target.className==='right'){
				That.allselect.innerText=target.innerText;
			}
		});
	},
};
var base={
	all:[
		{
			"全部分类":'',
			"电影":'',
			"美食":['火锅','烧烤','自助','烧烤','自助','烧烤','自助','烧烤','自助','烧烤','自助','烧烤','自助','烧烤','自助'],
			"摄影写真":'',
			"摄影写真1":'',
			"摄影写真2":'',
			"摄影写真3":'',
			"摄影写真4":'',
			"摄影写真5":'',
			"摄影写真6":'',
			"摄影写真7":'',
			"摄影写真8":'',
			"摄影写真9":'',
			"摄影写真10":'',
			"摄影写真11":'',
			"摄影写真12":'',
			"摄影写真13":'',
			"摄影写真14":'',
			
		},
		{
			"附近":"",
			"莱山区":"",
			"芝罘区":""
		},
		{
			"智能排序":'',"好评优先":'',"离我最近":'',"人均最低":''
			
		}
	]
	
};
var navSelectBox=document.getElementById("navSelectBox");
var nav=new NavSelect(navSelectBox,base);
nav.init();

    