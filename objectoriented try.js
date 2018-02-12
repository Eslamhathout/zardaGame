//Export var go = 120;
var interval;
var timer=0;
var character1=null;
class Card {
  constructor(check,imgSrc,backImg,div) {
    this.isQueen = check;
    this.imgSrc = imgSrc;
    this.imgSrcBack = backImg;
    this.div = div
  }
  createDiv(){
  	this.div.innerHTML +="<div class = \"back\"><img src ="+ this.imgSrcBack +">\
			</div>\
			<div class = \"front\"><img src ="+ this.imgSrc +">\
			</div>"
  }
  clearDiv(){
  	this.div.innerHTML ="";
  }
}

class character{
	constructor(name,ponus,img){
		this.characterName=name;
		this.characterPonus=ponus;
		this.characterImg=img;
	}
}

class game{
	constructor(lev,ponus){
		this.level=lev;
		this.ponus=ponus;
		this.counter=0;
	}
    startMove (cardA,cardB){
	timer = 0;
	var margin = 0;
	var currentlevel= this.level;
	if(cardA.div.getBoundingClientRect().right<cardB.div.getBoundingClientRect().right){
		var tempCard = cardA;
		cardA = cardB;
		cardB = tempCard;
	}

	setTimeout(function(){
		var interval = setInterval(function(){
			margin+=currentlevel;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin >= 150){
				clearInterval(interval);
			}
		},10);
	},0);
	timer+=1500;
	//=======================================================
	var marginR =0;
	var rightDiff = cardA.div.getBoundingClientRect().right-cardB.div.getBoundingClientRect().right;
		setTimeout(function(){
			var interval = setInterval(function(){
				marginR+=currentlevel;
				cardA.div.style["right"] = marginR+"px";
				cardB.div.style["right"] =-marginR+"px";
				if(marginR >= rightDiff){
					clearInterval(interval);
				}

			},10)},timer/currentlevel);
		if(rightDiff <= 240){
			timer+=2450;
		}else{
			timer+=4850;

		}
	
//=======================================================	
	setTimeout(function(){
		var interval = setInterval(function(){
			margin-=currentlevel;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin <= 0){
				cardA.div.style["right"] = 0+"px";
				cardB.div.style["right"] = 0+"px";

				var tempImg = cardA.imgSrc;
				cardA.imgSrc = cardB.imgSrc;
				cardB.imgSrc=tempImg;
				debugger
				/*HideCards();*/
				card1.clearDiv();
				card2.clearDiv();
				card3.clearDiv();
				/*showCards();*/
				card1.createDiv();
				card2.createDiv();
				card3.createDiv();
				clearInterval(interval);
			}
		},10);
	},timer/currentlevel);
	timer+=1500;

}
	

}

var charact=null;
var card1 = null ;
var card2 = null;
var card3 = null;
var cardArr = [card1,card2,card3];
var welcomePageDiv = document.getElementById("welcomePage");
var showWelcomePage = function(){
	welcomePageDiv.innerHTML += //"<img align=\"center\" src=\"Pics/welcomePage.jpg\">\
					"<div id = \"loadingBar\">\
				<div id = \"loader\"></div>\
			</div>";
}
var hideWelcomePage = function(){
	welcomePageDiv.style.visibility="hidden";
}
showWelcomePage();
//function of the loading bar
var loader = document.getElementById("loader");
var loading = function(){
	var width=1;
	var loadingBar = function(){
			width++
			loader.style.width=width +"%";
	}
	var progress = setInterval(loadingBar, 40);
	var clearLoadingBar = function(){
	clearInterval(progress);
	}
	setTimeout(clearLoadingBar, 4005);
}
// end of loading bar function
loading();
// var openGame = function(){
// 	window.location.href= "index.html";
// }
setTimeout(hideWelcomePage, 4000);

var characterPageDiv = document.getElementById("characterPage");
// html of the choose your character page
var showCharacterPage = function(){
characterPageDiv.innerHTML += "<div id = \'mainCharacter\'>\
		<div align=\"center\">\
			<input id = \"name\" type=\"text\" placeholder=\"your name\">\
		</div>\
		<div>\
			<div class=\"leftCharacter\"> <button class = \"charBtn\"><img id=\"character1\" src=\"Pics/character1.png\"></button></div>\
			<div class=\"rightCharacter\"><button class = \"charBtn\"><img id=\"character2\" src=\"Pics/character2.png\"></button></div>\
		</div>\
	</div>"
	var character1;
	var character2;
character1 = document.getElementById("character1");
character2 = document.getElementById("character2");
var hideCharacterPage = function(){
	/*characterPageDiv.style.visibility="hidden";*/
	
	var name = document.getElementById("name").value;
	if(name){
	console.log("hi "+name);
	characterPageDiv.innerHTML="";
	charact=new character(name,10,this.src);
	beginGame();
}
	// openGame();
}
character1.addEventListener("click", hideCharacterPage);
character2.addEventListener("click", hideCharacterPage);
//var name = document.getElementById("name").value;
//console.log(name);
var showCards =function () {
card1.createDiv();
card2.createDiv();
card3.createDiv();
}

var HideCards = function(){
	//debugger
	card1.clearDiv();
	card2.clearDiv();
	card3.clearDiv();
}
var beginGame=function () {
	var showBoard = function(){
		characterPageDiv.style.background="url('Pics/gameBackground.jpg')";
		characterPageDiv.innerHTML += "<div id=\"characterBar\"><img class=\"charaImg\" src=\""+charact.characterImg+"\">\
		 <label class=\"charName\">"+charact.characterName+"</label>\
		 <label class=\"leftlabel\"> score: </label> \
		 <label class=\"charName\">"+charact.characterPonus+"</label> </div>";
		characterPageDiv.innerHTML+="<div id=\"gameBoard\"></div>";

		var gameBoard=document.getElementById('gameBoard');
	// characterDiv.innerHTML += "<img class=\"charaImg\" width=30px hight=30px src=\"pics/back.png\"> <img class=\"charaImg\" width=30px hight=30px src=\"pics/back.png\">"
	gameBoard.innerHTML += 
		"<div class = \"mycard\" id = \"card1\">\
		</div>"

	gameBoard.innerHTML += 
		"<div class = \"mycard\" id = \"card2\" >\
		</div>"

	gameBoard.innerHTML += 
		"<div class = \"mycard\" id = \"card3\" >\
		</div>"
	gameBoard.innerHTML +="<br><div><button id=\"play\"><img  src=\"pics/play.png\"></button></div>"
	card1 = new Card(true, "Pics/queen.png","Pics/cardBack.jpg",document.getElementById('card1'));
	card2 = new Card(false, "Pics/ten.png","Pics/cardBack.jpg",document.getElementById('card2'));
	card3 = new Card(false, "Pics/ten.png","Pics/cardBack.jpg",document.getElementById('card3'));
	showCards();
;};

showBoard();


var divCard1 = document.getElementById('card1');
var divCard2 = document.getElementById('card2');
var divCard3 = document.getElementById('card3');
var startBtn = document.getElementById('play');
	var myCardFront = document.getElementsByClassName('front');
		var myCardBack = document.getElementsByClassName('back');
		var mycardLength = myCardBack.length;
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
		var game1 = new game(1,10);
		var random = parseInt(Math.random()*3)+1;
		//debugger
		if(random == 1){
			game1.startMove(card1,card2);
			var Timer = timer+100;
			setTimeout(function(){game1.startMove(card1,card3);},Timer);
			Timer+=Timer+2400;
			setTimeout(function(){
				game1.startMove(card1,card2);
				/*setTimeout(function(){
					//Add The Event listner to choose between cards
					//if(true){
					//say congratualation
					continueBtn.style.display = "block";//Showing the button of the next level
					//}else{Say sorry and restat the game}


				},timer+100)*/


			},Timer);
		}else if(random == 2){
			game1.startMove(card2,card3)
			var Timer = timer+100;
			setTimeout(function(){game1.startMove(card1,card3);},Timer);
			Timer+=Timer+2400;
			setTimeout(function(){
				game1.startMove(card2,card3);
				/*setTimeout(function(){
					//Same as line 456-469
					continueBtn.style.display = "block";
				},timer+100)*/

			},Timer);

		}else{
			game1.startMove(card1,card3);
			var Timer = timer+100;
			setTimeout(function(){game1.startMove(card2,card3);},Timer);
			Timer+= 5800;
			setTimeout(function(){
				game1.startMove(card1,card2);
				/*setTimeout(function(){
					//Same as line 456-469
					continueBtn.style.display = "block";},timer+100)*/

			},Timer);
		}
		
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
}
};
//show the characters page
	


setTimeout(showCharacterPage, 4000);