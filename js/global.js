/*鼠标点击去关键词*/
$(function(){
	var flag = false;
	$("#keyword").change(function(){
		flag = true;
	});
	$("#keyword").focus(function(){
		if ($(this).attr("value") == "请输入搜索内容" && flag == false) {
		$(this).attr("value","");
		}
	}).blur(function(){
		// if (!$(this).attr("value")) {
		if ($(this).attr("value") == "") {
		$(this).attr("value","请输入搜索内容");
		}
	});
	/*鼠标点击去关键词结束*/

	/*滚动条滑动的时候，导航条置顶定位*/
	$(window).scroll(function(){
	  if($(document).scrollTop()>=70){  //滚动条距离顶部高度小于70的时候
	    $("nav").addClass("fixednav"); 
	  }else{
	   $("nav").removeClass("fixednav");
	  }
	});



});