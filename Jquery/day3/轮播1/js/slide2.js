var loopIndex = 0;
var timer2 = null;
window.onload = function () {
	var oSlide = document.getElementById( "slide" );	
	var oBody = document.getElementById( "body" );
	var aP = oSlide.getElementsByTagName( "p" );
	aP[0].onclick = function () {
		loopIndex--;
		if ( loopIndex == -1 ) {
			loopIndex = 0;
		}
		startMove( oBody, -loopIndex * 800 );
	}
	aP[1].onclick = function () {
		loopIndex++;
		if ( loopIndex == 5 ) {
			loopIndex = 4;
		}
		startMove( oBody, -loopIndex * 800 );
	}
}

function startMove ( obj, target ) {
	clearInterval( timer2 );
	var speed = 0;
	timer2 = setInterval( function(){
		if ( obj.offsetLeft < target ) {
			speed = 50;
		}else {
			speed = -50;
		}
		if ( obj.offsetLeft == target ) {
			clearInterval( timer2 );
		}else {
			obj.style.left = obj.offsetLeft + speed + "px";
		}
	}, 30 );
}






