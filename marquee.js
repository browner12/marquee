/**
 * marquee javascript
 *
 * @author Andrew Brown <browner12@gmail.com>
 * @version 1.0
 * @copyright Andrew Brown 2013 
 *
 */

$(document).ready(function(){

	$(".marquee").hover(
	
		//mouseenter
		function(){
		
			//vars
			var textWidth = $(this).width();
			var containerWidth = $(this).closest(".marqueeContainer").width();
			
			//execute
			if(textWidth > containerWidth){
				var difference = textWidth - containerWidth;
				$(this).css("left", -difference - 1);
			}
		},
		
		//mouseleave
		function(){
			$(this).css("left", 0);
		}
	);
	
});