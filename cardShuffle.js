var interval;
var timer=0;
class Card {
  constructor(check,imgSrc,backImg) {
    this.isQueen = check;
    this.imgSrc = imgSrc;
    this.imgSrcBack = backImg;
  }
}

var card1 = new Card(true, "Pics/ten.png","Pics/cardBack.jpg");
var card2 = new Card(false, "Pics/queen.png","Pics/cardBack.jpg");
var card3 = new Card(false, "Pics/ten.png","Pics/cardBack.jpg");

var cardArr = [card1,card2,card3];

var backgroundDiv = document.getElementById('gameBoard');


var showCards = function(){
	backgroundDiv.innerHTML += 
		"<div class = \"mycard\" id = \"card1\">\
			<div class = \"back\"><img src ="+ cardArr[0].imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ cardArr[0].imgSrc +">\
			</div>\
		</div>"

	backgroundDiv.innerHTML += 
		"<div class = \"mycard\" id = \"card2\" >\
			<div class = \"back\"><img src ="+ cardArr[1].imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ cardArr[1].imgSrc +">\
			</div>\
		</div>"

	backgroundDiv.innerHTML += 
		"<div class = \"mycard\" id = \"card3\" >\
			<div class = \"back\"><img src ="+ cardArr[2].imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ cardArr[2].imgSrc +">\
			</div>\
		</div>"
	backgroundDiv.innerHTML +="<br><div><button id=\"play\"><img  src=\"pics/play.png\"></button></div>"
};
showCards();

var divCard1 = document.getElementById('card1');
var divCard2 = document.getElementById('card2');
var divCard3 = document.getElementById('card3');
var startBtn = document.getElementById('play');

var mov = function(div1,div2){
	timer = 0;
	var margin = 0;
	if(div1.getBoundingClientRect().right<div2.getBoundingClientRect().right){
		var tempDiv = div1;
		div1 = div2;
		div2 = tempDiv;
	}
	setTimeout(function(){
		var interval = setInterval(function(){
			div1.style["top"] = ++margin +"px";
			div2.style["top"] = -margin +"px";

			if(margin == 150){
				clearInterval(interval);
			}
		},10);
	},0);
	timer+=1567;//=======================================================
	var marginR =0;
	var rightDiff = div1.getBoundingClientRect().right-div2.getBoundingClientRect().right;
		setTimeout(function(){
			var interval = setInterval(function(){
				++marginR;
				div1.style["right"] = marginR+"px";
				div2.style["right"] =-marginR+"px";
				if(marginR == rightDiff){
					clearInterval(interval);
				}

			},10)},timer);
		if(rightDiff == 230){
			timer+=2400;
		}else{
			timer+=4800;
		}
	
//=======================================================	
	setTimeout(function(){
		var interval = setInterval(function(){
			div1.style["top"] = --margin +"px";
			div2.style["top"] = -margin +"px";

			if(margin <= 0){
				div1.style["right"] = 0+"px";
				div2.style["right"] = 0+"px";
				clearInterval(interval);
			}
		},10);
	},timer);
	timer+=1500;
}

	var myCardFront = document.getElementsByClassName('front');
		var myCardBack = document.getElementsByClassName('back');
		var mycardLength = myCardBack.length;
		var button = document.getElementById("play");
		var flipCards=function () {
			startBtn.disabled = true;
			for (var i=0; i< mycardLength; i++)
			{
				myCardFront[i].style = "transform: perspective( 600px ) rotateY( -180deg )"
				myCardBack[i].style = "transform: perspective( 600px ) rotateY( 0deg )"
			}	
			setTimeout(shuffle,500);
		}
		startBtn.addEventListener('click',flipCards);
		var clickedCard=0;

	var shuffle=function(){
		mov(divCard1,divCard2);
		setTimeout(function(){mov(divCard2,divCard3);},timer+100);
		setTimeout(function(){mov(divCard1,divCard2);},(timer+100)*2);
		
	};
	setTimeout(function () {
		divCard1.addEventListener('click',function () {
			myCardFront[0].style = "transform: perspective( 600px ) rotateY( 0deg )";
			myCardBack[0].style = "transform: perspective( 600px ) rotateY( -180deg )";
			clickedCard=1;
		});
	},1000);
	setTimeout(function () {
		divCard2.addEventListener('click',function () {
			myCardFront[1].style = "transform: perspective( 600px ) rotateY( 0deg )";
			myCardBack[1].style = "transform: perspective( 600px ) rotateY( -180deg )";
			clickedCard=2;
		});
	},1000);
	setTimeout(function () {
		divCard3.addEventListener('click',function () {
			myCardFront[2].style = "transform: perspective( 600px ) rotateY( 0deg )";
			myCardBack[2].style = "transform: perspective( 600px ) rotateY( -180deg )";
			clickedCard=3;
		});
	},1000);
		