document.querySelector("div.play").addEventListener("click", function(){
	// generating a random no. between 1 and 6
	let randomNumber1 = Math.floor(Math.random() * 5 ) + 1;

	// sourcing the reqd dice image according to the rand no. generated
	let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

	// changing img accordingly
	document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

	// generating a random no. between 1 and 6
	let randomNumber2 = Math.floor(Math.random() * 5 ) + 1;

	// sourcing the reqd dice image according to the rand no. generated
	let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

	//changing img accordingly
	document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

	// deciding the winner
	if (randomNumber1>randomNumber2){
		document.querySelector("h1").innerText = "Player 1 wins!"; 
	}

	else if (randomNumber2>randomNumber1) {
		document.querySelector("h1").innerText = "Player 2 wins!";
	}

	else {
		document.querySelector("h1").innerText = "It's a tie, play again!";
	}
})



