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
	
	var buttonsArray = ["green","blue","yellow","red"];
	console.log(buttonsArray[0]);
	var i;
	for(i = 0;i < buttonsArray.length; i+=1){

	$("#" + buttonsArray[i]+"Button").click(blink);

	
	}
//for loop feeds the button to the blink function without having to list
//each button individually	
	// var i;
	// var randomButtonsArray = [0,1];
	// for (i = 0; i < randomButtonsArray.length ;i+=1){
	// var randomNumber = parseInt((Math.random()*4)+0);
	// console.log(randomNumber);
	// 	randomButtonsArray = randomButtonsArray + randomButtonsArray.push(randomNumber);
	// }
	// console.log(randomButtonsArray);


// 	var pressButtonsInSequence = function(event){
// 		if(this == secondButtonsArray[j]){
// 			j+=1;
// 			if(this == secondButtonsArray[secondButtonsArray.length-1]){
// 				console.log("you completed the sequence correctly!")
// 			}
// 		}else{
// 			j = 0;
// 		}
// 	}

// var secondButtonsArray = ["yellow","blue","red","green"]
// 	var j = 0;
// 	//increase j by one whenever the correct button in the sequence is pressed

	
// 	for(j = 0; j < secondButtonsArray.length; j+=1){
// 		$("#"+secondButtonsArray[j]+"Button").click(pressButtonsInSequence)
// 	}
//Tried to simulate 


	
})();