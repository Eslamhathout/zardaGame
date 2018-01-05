var interval;
class Card {
  constructor(check,imgSrc,backImg) {
    this.isQueen = check;
    this.imgSrc = imgSrc;
    this.imgSrcBack = backImg;
  }
}

var card1 = new Card(true, "Pics/queen.png","Pics/back.png");
var card2 = new Card(false, "Pics/ten.png","Pics/back.png");
var card3 = new Card(false, "Pics/ten.png","Pics/back.png");

var cardArr = [card1,card2,card3];

var backgroundDiv = document.getElementById('gameBoard');
var showCards = function(){
	backgroundDiv.innerHTML += 
		"<div class = \"mycard\" id = \"card2\" >\
			<div class = \"back\"><img src ="+ cardArr[1].imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ cardArr[1].imgSrc +">\
			</div>\
		</div>"		

	backgroundDiv.innerHTML += 
		"<div class = \"mycard\" id = \"card1\">\
			<div class = \"back\"><img src ="+ cardArr[0].imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ cardArr[0].imgSrc +">\
			</div>\
		</div>"

	backgroundDiv.innerHTML += 
		"<div class = \"mycard\" id = \"card3\" >\
			<div class = \"back\"><img src ="+ cardArr[2].imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ cardArr[2].imgSrc +">\
			</div>\
		</div>"
};

showCards();
var myCardsFront = document.getElementsByClassName('front')
var myCardsBack = document.getElementsByClassName('back')
var divCard1 = document.getElementById('card1');
var divCard2 = document.getElementById('card2');
var divCard3 = document.getElementById('card3');
var startBtn = document.getElementById('startBtn');
var x = 0;
var y = 0;
 
// var moveRight = function(){
	
// 	divCard3.style["left"] = ++x+"px";


// };


var moveLeft = function(){
		divCard3.style["down"] = ++y+"px";
		divCard2.style["top"] = y+"px";
		divCard3.style["right"] = ++x+"px";
		divCard2.style["left"] = x+"px";


};


//divCard1.getBoundingClientRect();
/*
var clear = function(){
	clearInterval(id);
};
*/
var onClick = function(){
	for (var i=0; i< 3; i++)
	{
		myCardsFront[i].style = "transform: perspective( 600px ) rotateY( -180deg )"
		myCardsBack[i].style = "transform: perspective( 600px ) rotateY( 0deg )"
	}
	var	id = setInterval(moveLeft,10);
	var clear = function(){
	clearInterval(id);
	};
	setTimeout(clear,5500);
};

startBtn.addEventListener("click", onClick);