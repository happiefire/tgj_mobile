//左边菜单的显示隐藏  js 代码

$(function(){
	$("#menu").height(window.innerHeight);
	
	//屏幕滚动事件
	$(window).scroll(function(){
		$("#menu").css("top",($(window).scrollTop()));
	});
	
	//菜单展开事件
	$("#btnMenu").click(function(){
		$("#menu").show().animate({width:"85%"},1000);
	});
	
	//菜单收起事件
	$("#map,#messageInfo,.score,.class_option").click(function(){
		$("#menu").animate({width:0},1000);
	});
	
})