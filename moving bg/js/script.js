$(document).ready(function() { 

	$('#wrap-all').mousemove(function( event ) { 
		var containerWidth = $(this).innerWidth(),
		    containerHeight = $(this).innerHeight(),
		    mousePositionX = (event.pageX / containerWidth) * 100,
		    mousePositionY = (event.pageY /containerHeight) * 100;

		$(this).css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');

	}); 

}); 