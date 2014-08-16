//左边菜单的显示隐藏  js 代码

$(function(){
	$("#menu").height(window.innerHeight);
	
	$(window).scroll(function(){
		$("#menu").css("top",($(window).scrollTop()));
	});
	
	$("#btnMenu").click(function(){
		$("#menu").animate({width:"80%"},1000);
	});
	$("#menu").click(function(){
		$("#menu").animate({width:0},1000);
	});
})