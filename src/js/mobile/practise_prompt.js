$(function(){
	
	//$("input[name=autoNext]").click(function(){
	//	alert($(this).is(':checked'));
	//});
	
	$("#startPractise").click(function(){
		//判断复选框是否选中，选中状态传1，否则传0
		if($("input[name=autoNext]").is(':checked')){
			location.href='parctise.html?flog=1';
		}else{
			location.href='parctise.html?flog=0';
		}
	});
	
})