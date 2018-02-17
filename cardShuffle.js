var interval;
var timer=0;
var score = 0;
var level = 0;
class Card {
  constructor(check,imgSrc,backImg,div) {
    this.isQueen = check;
    this.imgSrc = imgSrc;
    this.imgSrcBack = backImg;
    this.div = div
  }
}

var charImg = document.getElementById("charaImg");
var charName = document.getElementById("name");
var charScore = document.getElementById("score");

charScore.textContent = score;
 var url = window.location.href;
  var getit = new Array();
  getit = url.split("?");
  var params = getit[1].split("&");
  charImg.src = params[1];
  charName.textContent = params[0];
var backgroundDiv = document.getElementById('gameBoard');
var card1 = new Card(true, "Pics/aceOfHeartRed.jpg","Pics/cardBack.jpg",document.getElementById('card1'));
var card2 = new Card(false, "Pics/aceOfSpadeRed.jpg","Pics/cardBack.jpg",document.getElementById('card2'));
var card3 = new Card(false, "Pics/aceOfSpadeRed.jpg","Pics/cardBack.jpg",document.getElementById('card3'));

var card1div = document.getElementById("card1");
var card2div = document.getElementById("card2");
var card3div = document.getElementById("card3");

continueBtn.style.display = "none";
continueBtn2.style.display = "none";
continueBtn3.style.display = "none";
continueBtn4.style.display = "none";
restartBtn.style.display = "none";
var showBackCards = function(){
  card1div.innerHTML =
"<div class = \"front\"><img src ="+ card1.imgSrc +">\
  </div>"+  "<div class = \"back\"><img src ="+ card1.imgSrcBack +"></div>";
card2div.innerHTML =
  "<div class = \"front\"><img src ="+ card2.imgSrc +">\
    </div>"+  "<div class = \"back\"><img src ="+ card2.imgSrcBack +"></div>";

card3div.innerHTML =
  "<div class = \"front\"><img src ="+ card3.imgSrc +">\
    </div>"+  "<div class = \"back\"><img src ="+ card3.imgSrcBack +"></div>";

//hiding faces
document.getElementsByClassName('front')[0].style.display='none'
document.getElementsByClassName('front')[1].style.display='none'
document.getElementsByClassName('front')[2].style.display='none'
};


var messageDiv=document.getElementById("messageDiv")
var Message=document.getElementById("message")
var messageImg=document.getElementById("messageImg")
var show=false
function ShowMessage (imgSrc,textMes) {
  if(!show){
  	messageImg.src=imgSrc;
  	Message.innerHTML=textMes;
  	backgroundDiv.style.opacity=0.4;
 	messageDiv.style.visibility="visible"
 	messageDiv.classList.add("messageAnimation")
    showing=true
  }
}



function hideMessage (){
  messageDiv.classList.remove("messageAnimation")
  backgroundDiv.style.opacity=1;
  messageDiv.style.visibility="hidden";
  showing=false
}


var hideCards = function(){
	document.getElementById('card1').innerHTML ="";

	document.getElementById('card2').innerHTML = "";

	document.getElementById('card3').innerHTML = "";
}
var showFrontCards = function(){
  card1div.innerHTML =
"<div class = \"front\"><img src ="+ card1.imgSrc +">\
  </div>"+  "<div class = \"back\"><img src ="+ card1.imgSrcBack +"></div>";
card2div.innerHTML =
  "<div class = \"front\"><img src ="+ card2.imgSrc +">\
    </div>"+  "<div class = \"back\"><img src ="+ card2.imgSrcBack +"></div>";

card3div.innerHTML =
  "<div class = \"front\"><img src ="+ card3.imgSrc +">\
    </div>"+  "<div class = \"back\"><img src ="+ card3.imgSrcBack +"></div>";

//hiding faces
document.getElementsByClassName('back')[0].style.display='none'
document.getElementsByClassName('back')[1].style.display='none'
document.getElementsByClassName('back')[2].style.display='none'
};
showFrontCards();


//The move functions
var mov = function(cardA,cardB){
	timer = 0;
	var margin = 0;
	if(cardA.div.getBoundingClientRect().right<cardB.div.getBoundingClientRect().right){
		var tempCard = cardA;
		cardA = cardB;
		cardB = tempCard;
	}




	setTimeout(function(){
		var interval = setInterval(function(){
			cardA.div.style["top"] = ++margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin == 150){
				clearInterval(interval);
			}
		},10);
	},0);
	timer+=1567;
	//=======================================================
	var marginR =0;
	var rightDiff = cardA.div.getBoundingClientRect().right-cardB.div.getBoundingClientRect().right;
		setTimeout(function(){
			var interval = setInterval(function(){
				++marginR;
				cardA.div.style["right"] = marginR+"px";
				cardB.div.style["right"] =-marginR+"px";
				if(marginR == rightDiff){
					clearInterval(interval);
				}

			},10)},timer);
		if(rightDiff <= 240){
			timer+=2450;
		}else{
			timer+=4850;

		}
	
//=======================================================	
	setTimeout(function(){
		var interval = setInterval(function(){
			cardA.div.style["top"] = --margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin <= 0){
				cardA.div.style["right"] = 0+"px";
				cardB.div.style["right"] = 0+"px";

				var tempImg = cardA.imgSrc;
				cardA.imgSrc = cardB.imgSrc;
				cardB.imgSrc=tempImg;

				var tempBool = cardA.isQueen;
				cardA.isQueen = cardB.isQueen;
				cardB.isQueen = tempBool;

				
				hideCards();
				showBackCards();
				clearInterval(interval);
			}
		},10);
	},timer);
	timer+=1500;





}





var mov3 = function(cardA,cardB){
	timer = 0;
	var margin = 0;
	if(cardA.div.getBoundingClientRect().right<cardB.div.getBoundingClientRect().right){
		var tempCard = cardA;
		cardA = cardB;
		cardB = tempCard;
	}




	setTimeout(function(){
		var interval = setInterval(function(){
			margin+=10;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin >= 150){
				clearInterval(interval);
			}
		},10);
	},0);
	timer+=1567;
	//=======================================================
	var marginR =0;
	var rightDiff = cardA.div.getBoundingClientRect().right-cardB.div.getBoundingClientRect().right;
		setTimeout(function(){
			var interval = setInterval(function(){
				marginR+=10;
				cardA.div.style["right"] = marginR+"px";
				cardB.div.style["right"] =-marginR+"px";
				if(marginR >= rightDiff){
					clearInterval(interval);
				}

			},10)},timer/10);
		if(rightDiff <= 240){
			timer+=2450;
		}else{
			timer+=4850;

		}
	
//=======================================================	
	setTimeout(function(){
		var interval = setInterval(function(){
			margin-=10;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin <= 0){
				cardA.div.style["right"] = 0+"px";
				cardB.div.style["right"] = 0+"px";

				var tempImg = cardA.imgSrc;
				cardA.imgSrc = cardB.imgSrc;
				cardB.imgSrc=tempImg;

				var tempBool = cardA.isQueen;
				cardA.isQueen = cardB.isQueen;
				cardB.isQueen = tempBool;

				hideCards();
				showBackCards();
				clearInterval(interval);
			}
		},10);
	},timer/10);
	timer+=1500;





}





var mov4 = function(cardA,cardB){

	timer = 0;
	var margin = 0;
	if(cardA.div.getBoundingClientRect().right<cardB.div.getBoundingClientRect().right){
		var tempCard = cardA;
		cardA = cardB;
		cardB = tempCard;
	}




	setTimeout(function(){
		var interval = setInterval(function(){
			margin+=20;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin >= 150){
				clearInterval(interval);
			}
		},10);
	},0);
	timer+=1567;
	//=======================================================
	var marginR =0;
	var rightDiff = cardA.div.getBoundingClientRect().right-cardB.div.getBoundingClientRect().right;
		setTimeout(function(){
			var interval = setInterval(function(){
				marginR+=20;
				cardA.div.style["right"] = marginR+"px";
				cardB.div.style["right"] =-marginR+"px";
				if(marginR >= rightDiff){
					clearInterval(interval);
				}

			},10)},timer/20);
		if(rightDiff <= 240){
			timer+=2450;
		}else{
			timer+=4850;

		}
	
//=======================================================	
	setTimeout(function(){
		var interval = setInterval(function(){
			margin-=20;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin <= 0){
				cardA.div.style["right"] = 0+"px";
				cardB.div.style["right"] = 0+"px";

				var tempImg = cardA.imgSrc;
				cardA.imgSrc = cardB.imgSrc;
				cardB.imgSrc=tempImg;

				var tempBool = cardA.isQueen;
				cardA.isQueen = cardB.isQueen;
				cardB.isQueen = tempBool;

				hideCards();
				showBackCards();
				clearInterval(interval);
			}
		},10);
	},timer/20);
	timer+=1500;





}









var mov5 = function(cardA,cardB){
	timer = 0;
	var margin = 0;
	if(cardA.div.getBoundingClientRect().right<cardB.div.getBoundingClientRect().right){
		var tempCard = cardA;
		cardA = cardB;
		cardB = tempCard;
	}




	setTimeout(function(){
		var interval = setInterval(function(){
			margin+=50;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin >= 150){
				clearInterval(interval);
			}
		},10);
	},0);
	timer+=1567;
	//=======================================================
	var marginR =0;
	var rightDiff = cardA.div.getBoundingClientRect().right-cardB.div.getBoundingClientRect().right;
		setTimeout(function(){
			var interval = setInterval(function(){
				marginR+=50;
				cardA.div.style["right"] = marginR+"px";
				cardB.div.style["right"] =-marginR+"px";
				if(marginR >= rightDiff){
					clearInterval(interval);
				}

			},10)},timer/50);
		if(rightDiff <= 240){
			timer+=2450;
		}else{
			timer+=4850;

		}
	
//=======================================================	
	setTimeout(function(){
		var interval = setInterval(function(){
			margin-=50;
			cardA.div.style["top"] = margin +"px";
			cardB.div.style["top"] = -margin +"px";

			if(margin <= 0){
				cardA.div.style["right"] = 0+"px";
				cardB.div.style["right"] = 0+"px";
				var tempImg = cardA.imgSrc;
				cardA.imgSrc = cardB.imgSrc;
				cardB.imgSrc=tempImg;

				var tempBool = cardA.isQueen;
				cardA.isQueen = cardB.isQueen;
				cardB.isQueen = tempBool;


				hideCards();
				showBackCards();
				clearInterval(interval);
			}
		},10);
	},timer/50);
	timer+=1500;





}

// ===========================================================================================

var removeListeners = function(){
		card1.div.removeEventListener('click',success);
		card2.div.removeEventListener('click',fail);
		card3.div.removeEventListener('click',fail);
}
var disClick = function(){
				card1.div.style["pointer-events"]="none"
				card2.div.style["pointer-events"]="none"
				card3.div.style["pointer-events"]="none"

}




var success = function(Card){
				//Congraaaats

				
				score+=10;
				charScore.textContent = score;
				showFrontCards();
				disClick();

				if(score>=10&&score<160){
					//show bage1();
					if(score == 10){
							ShowMessage ("Pics/level1.png", "Good Job! your score is " +score)
						messageDiv.classList.add("messageAnimation")

						document.body.onkeyup = function(e){
							if(e.keyCode == 32){
								hideMessage();
			  	 			}
							
						}
					}
					continueBtn2.style.display = "block";
					// if(score>10)
					// score-=10;
				}else{
					//show badge2();
					if(score == 160){
						ShowMessage ("Pics/level2.png", "Good Job! you passed tro level 2 by score" +score)
						messageDiv.classList.add("messageAnimation")

						document.body.onkeyup = function(e){
							if(e.keyCode == 32){
								hideMessage();
			  	 			}
							
						}

					
					// if(score>80)
					// score-=20;
					}
					
					continueBtn2.style.display = "none";
					continueBtn4.style.display = "block";
				}
				
			}		

var fail =function(Card){
						//Looose
				ShowMessage ("Pics/lost.png", "You Lose... your score is " +score)
				document.body.onkeyup = function(e){
					if(e.keyCode == 32){
						hideMessage();
		  	 		}
		  	 		showFrontCards();
						restartBtn.style.display = "block";
						continueBtn.style.display = "none";
						disClick();	
		  	 	}								
			};	

var checkRight = function(time,lvl){
				setTimeout(function(){
					card1.div.addEventListener('click',function _func(){
							removeEventListener('click',_func);

							if(card1.isQueen==true){
								success(card1);
							}else{
								fail(card1);
							}
							
						});
					card2.div.addEventListener('click',function _func(){
							removeEventListener('click',_func);

							if(card2.isQueen==true){
								success(card2);
							}else{
								fail(card2);
							}
						});
					card3.div.addEventListener('click',function _func(){
							removeEventListener('click',_func);
							
							if(card3.isQueen==true){
								success(card3);
							}else{
								fail(card3);
							}
						});
				},time/lvl);

}






// ==============================================================================================
//Let the game begin



var badge3,badge2,badge1;
var badgeLost= "Pics/lost.jpg";


				

	
	//Level1

	startBtn.addEventListener('click',function _btnfunc(){
		//Hide front and show back
		hideCards();
		showBackCards();

		startBtn.style.display = "none";
		var random = parseInt(Math.random()*3)+1;
		if(random == 1){
			mov(card2,card3);
			var Timer = timer+100;
			setTimeout(function(){mov(card1,card3);},Timer);
			Timer+=Timer+2400;
			setTimeout(function(){
				mov(card1,card2);
				checkRight(timer,1);

			},Timer);
		}else if(random == 2){
			mov(card2,card3)
			var Timer = timer+100;
			setTimeout(function(){mov(card1,card3);},Timer);
			Timer+=Timer+2400;
			setTimeout(function(){
				mov(card1,card3);
				checkRight(timer,1);

			},Timer);

		}else{
			mov(card1,card3);
			var Timer = timer+100;
			setTimeout(function(){mov(card2,card3);},Timer);
			Timer+= 5800;
			setTimeout(function(){
				mov(card1,card2);
				checkRight(timer,1);

			},Timer);
		}


				startBtn.removeEventListener('click',_btnfunc);



	});



//level3
	var counterLevel10=0;

	continueBtn2.addEventListener('click',function(){
		//Hide front and show back
		hideCards();
		showBackCards();

		//Enabling clicking cards after being disabled from the last round
		card1.div.style["pointer-events"]="auto"						
		card2.div.style["pointer-events"]="auto"						
		card3.div.style["pointer-events"]="auto"
		continueBtn2.style.display = "none";
		var random = parseInt(Math.random()*3)+1;
		var Timer=0;
		if(random == 1){
				mov3(card1,card3);
				Timer = 8200;
				setTimeout(function(){mov3(card2,card3);},Timer/10);
				Timer+= 5800;
				setTimeout(function(){
					mov3(card1,card2);
					checkRight(timer,10);
				},Timer/10);
				Timer+=5800;
		}else if(random == 2){
				mov3(card1,card2);
				Timer = 5800;
				setTimeout(function(){mov3(card1,card3);},Timer/10);
				Timer+=8200;
				setTimeout(function(){
					mov3(card1,card2);
					checkRight(timer,10);

				},Timer/10);
				Timer+=5800;
		}else{
				mov3(card2,card3)
				Timer = 5800;
				setTimeout(function(){mov3(card1,card3);},Timer/10);
				Timer+=8200;
				setTimeout(function(){
					mov3(card2,card3);
					checkRight(timer,10);

				},Timer/10);
				Timer+=5800;			

		}


	 });
	


//level5
	continueBtn4.addEventListener('click',function(){
		//Hide front and show back
		hideCards();
		showBackCards();

		card1.div.style["pointer-events"]="auto"						
		card2.div.style["pointer-events"]="auto"						
		card3.div.style["pointer-events"]="auto"

		continueBtn4.style.display = "none";
		var random = parseInt(Math.random()*3)+1;
		var Timer=0;
		if(random == 1){
				mov5(card1,card3);
				Timer = 8600;
				setTimeout(function(){mov5(card2,card3);},Timer/50);
				Timer+= 6200;
				setTimeout(function(){
					mov5(card1,card2);
					checkRight(timer,50);

				},Timer/50);
				Timer+=6200;
		}else if(random == 2){
				mov5(card1,card2);
				Timer = 6200;
				setTimeout(function(){mov5(card1,card3);},Timer/50);
				Timer+=8600;
				setTimeout(function(){
					mov5(card1,card2);
					checkRight(timer,50);	


				},Timer/50);
				Timer+=6200;
		}else{
				mov5(card2,card3)
				Timer = 6200;
				setTimeout(function(){mov5(card1,card3);},Timer/50);
				Timer+=8600;
				setTimeout(function(){
					mov5(card2,card3);
					checkRight(timer,50);
				},Timer/50);
				Timer+=6200;			

		}


	 });





	restartBtn.addEventListener('click',function(){
		location.reload(); 
	});
