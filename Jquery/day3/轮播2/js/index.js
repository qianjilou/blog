$( function () {

	var index = 0;
	$("#slide .next").click(function(){
		if ( !$("#slide .list").is(":animated") ) {
			index++;
			$("#slide .list").stop( true, true );
			if ( index == 4 ) {
				index = 0;
				$("#slide .list").animate( { "left" : "0px" }, 1000 );
			}else {
				$("#slide .list").animate( { "left" : "-=592px" }, 1000 );
			}
			$("#slide .small_icon span").eq(index).addClass("current")
				.siblings("span").removeClass( "current" );
		}
	});

	$("#slide .prev").click(function(){
		if ( !$("#slide .list").is(":animated") ) {
			index--;
			$("#slide .list").stop( true, true );
			if ( index == -1 ) {
				index = 3;
				$("#slide .list").animate( { "left" : "-1776px" }, 1000 );
			}else {
				$("#slide .list").animate( { "left" : "+=592px" }, 1000 );
			}
			$("#slide .small_icon span").eq(index).addClass("current")
				.siblings("span").removeClass( "current" );
		}
	});	
	
} );