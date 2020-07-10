let turn = 1; 

function youWon() {
	console.log ("youWon!");
	win_text.innerText="You Won!"
	win_song.play()
}

function checkWin() {
	let symbol; 
	if (turn === 1)	
		symbol = "Black_X.jpg";
	else 
		symbol = "Circle.jpg"; 
	console.log (img1.src)
	if (img1.src.endsWith(symbol) && img2.src.endsWith(symbol) && img3.src.endsWith(symbol))
		youWon();
	else if (img4.src.endsWith(symbol) && img5.src.endsWith(symbol) && img6.src.endsWith(symbol))
		youWon();
	else if (img7.src.endsWith(symbol) && img8.src.endsWith(symbol) && img9.src.endsWith(symbol))
		youWon();
	else if (img1.src.endsWith(symbol) && img4.src.endsWith(symbol) && img7.src.endsWith(symbol))
		youWon();
	else if (img2.src.endsWith(symbol) && img5.src.endsWith(symbol) && img8.src.endsWith(symbol))
		youWon();
	else if (img3.src.endsWith(symbol) && img6.src.endsWith(symbol) && img9.src.endsWith(symbol))
		youWon();
	else if (img1.src.endsWith(symbol) && img5.src.endsWith(symbol) && img9.src.endsWith(symbol))
		youWon();
	else if (img3.src.endsWith(symbol) && img5.src.endsWith(symbol) && img7.src.endsWith(symbol))
		youWon();
	else if (img2.src.endsWith(symbol) && img5.src.endsWith(symbol) && img8.src.endsWith(symbol))
		youWon(); 
}

function change_image(x) { 
	if (x.src.endsWith("White_Sqaure.jpg")) {
    
	
		if (turn === 1) {
			x.src = "Black_X.jpg";
			checkWin();
			turn = 2; 
		}
		else {
			x.src = "Circle.jpg";
			checkWin();
			turn = 1;
		}
	}
}

let img1 = document.querySelector("img#img1"); 

img1.addEventListener("click", function() {
	change_image(img1);
});
img2.addEventListener("click", function() {
	change_image(img2);
});
img3.addEventListener("click", function() {
	change_image(img3);
});
img4.addEventListener("click", function() {
	change_image(img4);
});
img5.addEventListener("click", function() {
	change_image(img5);
});
img6.addEventListener("click", function() {
	change_image(img6);
});
img7.addEventListener("click", function() {
	change_image(img7);
});
img8.addEventListener("click", function() {
	change_image(img8);
});
img9.addEventListener("click", function() {
	change_image(img9);
});
