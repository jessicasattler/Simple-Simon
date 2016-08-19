// (function(){
'use strict';


	// var listenerStartButton =function(event){
	// 	 // $(".button").css("opacity","0.50");
	// 	$("#start").fadeOut();
	// };

	// $("#start").click(listenerStartButton);
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
	
	for(var i = 0;i < buttonsArray.length; i+=1){

	$("#" + buttonsArray[i]+"Button").click(blink);

	
	}
//buttonsArray feed the button color into a for loop that links up clicks to the
//blink function, which makes the button light up for 500 milliseconds
	var i;
	// var randomNumberForStartOfArray = parseInt((Math.random()*4)+0)
 	var randomButtonsArray = [];

 	var AddRandomButton = function(){
 		var randomNumber = parseInt((Math.random()*4)+0);
 		
		switch (randomNumber){
 			case 0 :
 			randomButtonsArray.push($("#greenButton"));
 			break;

 			case 1 :
 			randomButtonsArray.push($("#blueButton"));
 			break;

 			case 2 :
 			randomButtonsArray.push($("#yellowButton"));
 			break;

 			case 3 :
 			randomButtonsArray.push($("#redButton"));

	 	}
	 	
 	}
//the random number that is called will dictate which button will be pushed to the 
//array that will decide on the next button that will be called into the randomButtonsArray
//which will decide what the correct sequence of buttons to click is
 		var triggerClick =function (){
 			AddRandomButton();
 		randomButtonsArray.forEach(function(element,index,array){
 			element.css("opacity", "1.00");
		var opaqueLightOpaque = setTimeout(function() {
		
			$(".button").css("opacity", "0.50");
				
		}, delay)
 		});
 		console.log(randomButtonsArray);
 	}
//when a button is clicked, the opacity is set to 1 (button lights up)
//"this" is the button that is clicked	
//the next part of the function is supposed to set all the buttons back to being opaque,
//but doesn't work yet
 	triggerClick();


	var userInputArray = [];
 	$(".button").click(function(event){
 		console.log("test")
 		console.log($(this).attr('id'));
 		console.log(randomButtonsArray[0].attr("id"));

 		if ($(this).attr('id')  == randomButtonsArray[0].attr("id")){
 			console.log($(this).attr('id'));
 			userInputArray.push($(this).attr('id'));
 			AddRandomNumber();
 			// add number to random button array;
 			triggerClick();
 			//call triggerClick()the numbers in random array show up

			i += 1;
 		}else{

 			i = 0;
 			//have the first button in the index of randomButtonsArray light up
 		}
 	});
 	console.log(randomButtonsArray.length)


 


// })();