var loopIndex = 0;
var timer = null;
var direct = 0;
$(function(){
	slide();
	timer = setInterval( function (){
		autoLoop();
	}, 2000 );

	$("#slide").hover( function(){
		clearInterval( timer );
		$("#slide .btn").show();
	}, function(){
		timer = setInterval( function (){
			autoLoop();
		}, 2000 );
		direct = 0;
	});
	$("#slide .l-btn").click(function(){
		direct = 1;
		autoLoop();
	});
	$("#slide .r-icon").click(function(){
		direct = 0;
		autoLoop();
	});
});

function slide () {
	$("#small-icon li").click(function(){
		var index = $(this).index();
		$(this).children("a").addClass("active")
			.end().siblings("li").children("a").removeClass("active");
		$("#big-img img").eq(index).fadeIn(1000).siblings("img").hide();
		loopIndex = index;
	});	
}

function autoLoop() {
	console.log( loopIndex );
	if ( direct == 0 ) {
		loopIndex++;
		if ( loopIndex == $("#big-img img").length ) {
			loopIndex = 0;
		}
	}else if ( direct == 1 ) {
		loopIndex--;
		if ( loopIndex == -1 ) {
			loopIndex = $("#big-img img").length - 1;
		}
	}
	$("#small-icon li").eq(loopIndex).children("a").addClass("active")
		.end().siblings("li").children("a").removeClass("active");
	$("#big-img img").eq(loopIndex).fadeIn(1000).siblings("img").hide();
}








