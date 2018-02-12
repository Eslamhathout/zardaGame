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
			<div class=\"rightCharacter\"><button class= \"charBtn\"><img id=\"character2\" src=\"Pics/character2.png\"></button></div>\
		</div>\
	</div>"
	var character1;
	var character2;
character1 = document.getElementById("character1");
character2 = document.getElementById("character2");
var hideCharacterPage = function(){
	/*characterPageDiv.style.visibility="hidden";*/
	var name = document.getElementById("name").value;
	url= "index.html?" +name+"&"+this.src;
   window.location.replace(url);
	if(name){
	console.log("hi "+name);
	charact=new character(name,10,this.src);
   
}
}
character1.addEventListener("click", hideCharacterPage);
character2.addEventListener("click", hideCharacterPage);
//var name = document.getElementById("name").value;
//console.log(name);


};

	
setTimeout(showCharacterPage, 4000);