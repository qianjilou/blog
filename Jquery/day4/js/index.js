$(function(){
	$("#btn").click(function(){
		$("#login").show();
		$(".mask").show();
		var $winWidth = $(window).width();
		var $winHeight = $(window).height();
		var $loginWidth = $("#login").width();
		var $loginHeight = $("#login").height();
		var $scrollTop = $("body").scrollTop();
		$("#login").css( "top", ($winHeight - $loginHeight) / 2 + $scrollTop + "px" );
		$("#login").css( "left", ($winWidth - $loginWidth) / 2 + "px" );
	});
	$(".close").click(function(){
		$("#login").hide();
		$(".mask").hide();
	});
	$(window).bind( "resize scroll", function(){
		var $winWidth = $(window).width();
		var $winHeight = $(window).height();
		var $loginWidth = $("#login").width();
		var $loginHeight = $("#login").height();
		var $scrollTop = $("body").scrollTop();
		$("#login").css( "top", ($winHeight - $loginHeight) / 2 + $scrollTop + "px" );
		$("#login").css( "left", ($winWidth - $loginWidth) / 2 + "px" );
	} );
});