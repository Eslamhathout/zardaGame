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
			<input id = \"name\" type=\"text\" required=\"required\" placeholder=\"your name\">\
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
	var error = document.getElementById("errorDiv");
	
	if(name){
	url= "index.html?" +name+"&"+this.src;
   window.location.replace(url);	
}else{
	error.visibility=visible;
}
}
character1.addEventListener("click", hideCharacterPage);
character2.addEventListener("click", hideCharacterPage);
//var name = document.getElementById("name").value;
//console.log(name);


};

	
setTimeout(showCharacterPage, 4000);