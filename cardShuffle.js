var backgroundDiv = document.getElementById('gameBoard');

var setRandom = function(){
	var ranValue = parseInt(Math.random()*3)+1;
	return ranValue;
}

backgroundDiv.addEventListener('click',function(){
	var value = setRandom();

	 switch (value){
	 	case 1:
	 		backgroundDiv.innerHTML="<img src=\"Pics/aceOfHeartRed.jpg\"><img src=\"Pics/cardBack.jpg\"><img src=\"Pics/cardBack.jpg\">";
	 	break;
	 	case 2:
	 		backgroundDiv.innerHTML="<img src=\"Pics/cardBack.jpg\"><img src=\"Pics/aceOfHeartRed.jpg\"><img src=\"Pics/cardBack.jpg\">";
	 	break;
	 	case 3:
	 		backgroundDiv.innerHTML="<img src=\"Pics/cardBack.jpg\"><img src=\"Pics/cardBack.jpg\"><img src=\"Pics/aceOfHeartRed.jpg\">";
	 	break;
	 }
});
