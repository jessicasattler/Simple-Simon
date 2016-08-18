(function(){
'use strict';


	var listenerStartButton =function(event){
		$(".button").css("opacity","0.50");
		$("#start").fadeOut();
	};

	$("#start").click(listenerStartButton);
//gives dullness to boxes at the click of "Start" button
//start button fades out after it's clicked
	var delay = 500;
	var blink = function(event) {
		console.log("clicked");
		$(this).css("opacity", "1.00");
//when a button is clicked, the opacity is set to 1 (button lights up)
//"this" is the button that is clicked	
		var opaqueLightOpaque = setTimeout(function() {
		
			$(".button").css("opacity", "0.50");
				
		}, delay)
	}

//after a 500 millisecond delay, all buttons go back to being opaque
//fix this so that only the button that is lit up is set to opaque
	// var 0 = $("#greenButton");
	// var 1 = $("#blueButton");
	// var 2 = $("#yellowButton");
	// var 3 = $("redButton");
	// var buttonsArray[0,1,2,3];
	// var i;
	// for(i = buttonsArray[0];i < buttonsArray.length; i+=1){

	// i.click(blink);
	
	// }

	$("#greenButton").click(blink);
	$("#blueButton").click(blink);
	$("#yellowButton").click(blink);
	$("#redButton").click(blink);
//turn this into a for loop, my attempt is directily above my previous code
	

})();