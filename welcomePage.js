Export var go = 120;
var welcomePageDiv = document.getElementById("welcomePage");
var showWelcomePage = function(){
	welcomePageDiv.innerHTML += "<img align=\"center\" src=\"Pics/welcomePage.png\">\
					<div id = \"loadingBar\">\
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
var openGame = function(){
	window.location.href= "C:/Users/user/Desktop/project/index.html";
}
setTimeout(hideWelcomePage, 4000);

var characterPageDiv = document.getElementById("characterPage");
// html of the choose your character page
var showCharacterPage = function(){
characterPageDiv.innerHTML += "<div id = \'mainCharacter\'>\
		<div align=\"center\">\
			<img src=\"Pics/enterYourName.png\">\
		</div>\
		<div align=\"center\">\
			<input id = \"name\" type=\"text\" value=\"your name\">\
		</div>\
		<div align=\"center\">\
			<img src=\"Pics/chooseYourCharacter.png\">\
		</div>\
		<div>\
			<div class=\"left\"> <button><img id=\"character1\" src=\"Pics/character1.png\"></button></div>\
			<div class=\"right\"><button><img id=\"character2\" src=\"Pics/character2.png\"></button></div>\
		</div>\
	</div>"
	var character1;
	var character2;
character1 = document.getElementById("character1");
character2 = document.getElementById("character2");
var hideCharacterPage = function(){
	characterPageDiv.style.visibility="hidden";
	var name = document.getElementById("name").value;
	console.log("hi "+name);
	//
	openGame();
}
character1.addEventListener("click", hideCharacterPage);
character2.addEventListener("click", hideCharacterPage);
//var name = document.getElementById("name").value;
//console.log(name);
};
//show the characters page
	


setTimeout(showCharacterPage, 4000);
//var name = document.getElementById("name").value;
//console.log("hi "+name);
// attention here!!!!!!!!!!!

//export var go = 120;