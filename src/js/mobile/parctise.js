$(function(){
	
	//取出上个页面传过来的参数
	function getParam() {  
       var urlInfo = location.href; //获取当前页面的url  
       var offset = urlInfo.indexOf("?"); //设置参数字符串开始的位置  
       var strKeyValue = urlInfo.substr(offset,urlInfo.length); //取出参数字符串
       var arrParam = strKeyValue.split("="); //对获得的参数字符串按照“=”进行分割  
       var strParamValue = arrParam[1].substr(0,1); //得到参数值  
       return strParamValue;  
    } 
	
	//定义全局变量，初始化是0，即不自动翻页
	var check = 0;
	
	if(getParam() == "1"){
		check = 1;
	}
	
	$(".options").click(function(){
		//初始化选项颜色
		$(".options").css("background-color", "transparent");
		
		//给选中选项高亮显示
		$(this).css("background-color", "#0CF");
		
		//check为1，自动翻页；否则，手工翻页
		if(check == 1){
			location.href='parctise.html?flog=1&option='+$(this).attr("id");
		}
	});
})