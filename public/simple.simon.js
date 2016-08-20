(function(){
'use strict';

	var listenerStartButton =function(event){
		$(".button").css("opacity","0.5");
		$("#start").fadeOut();
		triggerClick();
	};

	$("#start").click(listenerStartButton);
//gives dullness to boxes at the click of "Start" button
//start button fades out after it's clicked
	
	var delay = 500;
	var blink = function(event) {
		// console.log("clicked");
		$(this).css("opacity", "1.00");
		//when a button is clicked, the opacity is set to "1.00" (button lights up)
		//"this" is the button that is clicked	
		var opaqueLightOpaque = setTimeout(function() {
		
			$(".button").css("opacity", "0.50");
			
				
		}, delay)
	}

//after a 500 millisecond delay, all buttons go back to being opaque

	
	var buttonsArray = ["green","blue","yellow","red"];
	
	for(var i = 0;i < buttonsArray.length; i+=1){

	$("#" + buttonsArray[i]+"Button").click(blink);


	}
//buttonsArray feed the button color into a for loop that links up user clicks to the
//blink function, which makes the button light up for 500 milliseconds
	
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
 		$("#score").html("Current Score: " + randomButtonsArray.length*10 + " Points");
 		//scores usually increase by ten and not one in games
 		// $(".button").off("click", blink);
 		//may turn off blink function when triggerClick is being called
		AddRandomButton();
		console.log(randomButtonsArray);

 		var count = 0;
 		var max = randomButtonsArray.length;
 		var interval = 1000;

 		var intervalLightButton = setInterval(function(){
 			if(count >= max){
 				clearInterval(intervalLightButton);
 				console.log("all done");
 			}else{
 				$('#audio1').html('<audio id="DingCOne" autoplay preload="auto"><source src=' + randomButtonsArray[count].attr("data-audio") +' type="audio/mp3"></audio>');
 				randomButtonsArray[count].css("opacity", "1.00");
 				count += 1;
				var opaqueLightOpaque = setTimeout(function() {
		
				$(".button").css("opacity", "0.50");
				
				}, delay)
 			}
 		}, interval);

 		
 	}
//when a button click is triggered, AddRandomButton is called
//buttons will make the ding sound corresponding to their data-audio attribute 
//the opacity is set to 1 (button lights up)
//the next part of the function is supposed to set all the buttons back to being opaque
	var i = 0;
	var listenerCheckButton ;
 	$(".button").click(function listenerCheckButton(event){
 		console.log("test")
 		console.log($(this).attr('id'));
 		console.log(randomButtonsArray[0].attr("id"));
 		if ($(this).attr('id')  == randomButtonsArray[i].attr("id")){
 			$('#audio1').html('<audio id="DingCOne" autoplay preload="auto"><source src=' + $(this).attr("data-audio") +' type="audio/mp3"></audio>');
 			if(i == randomButtonsArray.length-1){
 			triggerClick();
			i = 0;
 			}else{
 				i+=1;
 			}
 			console.log($(this).attr('id'));
 		//different audio sounds were added depending on which button should be clicked
 		//when any button is clicked, a click event will trigger
 		//if the id attribute of clicked button is equal to the id attribute of
 		//the element of randomButtonsArray with index of "i" 
 		//and if i is equal to the last index in the array then generate another random
 		//to be added to the AddRandomButton array sequence
 		//if not, then continue to the next button in the sequence


 		}else{
 		$('#audio1').html('<audio id="Buzzer" autoplay  preload="auto"><source src="/js/buzzer.mp3" type="audio/mp3"></audio>');
 			randomButtonsArray=[];
 			triggerClick();
 			i = 0;
 			//buzzer sound was added so that it goes off when user answers incorrectly
 			//if the button clicked is not the same as the button in the AddRandomButton array
 			//then add a random button to array and make that button light up
 			//have the first button in the index of randomButtonsArray light up
 		}
 	});
 	console.log(randomButtonsArray.length)


 


})();