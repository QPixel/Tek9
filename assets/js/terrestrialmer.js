function myFunction() {
  $("#helper-text").css("opacity", "0.3");
  
  
  var num = Math.round(Math.random(Math.random()) * 10) + 1;
  var value = num
  
if (num === 1) {
	value = "XP Transfer"
} else if (num === 2){
	value = "First Aid Bandage"; 
} else if (num === 3){
	value = "First Aid Pack"; 
} else if (num === 4){
	value = "First Aid Kit"; 
} else if (num === 5){
	value = "Healing Balm"; 
} else if (num === 6){
	value = "Get +10 AP"; 
} else if (num === 7){
	value = "Get +15 AP"; 
} else if (num === 8){
	value = "Get +20 AP"; 
} else if (num === 9){
	value = "Full AP"; 
} else if (num === 10){
	value = "Finding New Areas"; 
} else if (num === 11){
	value = "Thingy"; 
} else {
	value = "Tell Riley to fix this ERROR CODE #200BA"
}

   $("#circle").css("-webkit-animation", "flip 1s cubic-bezier(1,.37,.63,.82)")
  
  setTimeout(function(){$("#number").text(value)}, 500);; 
}

$("#circle").bind('oanimationend animationend webkitAnimationEnd', function() { 
  $("#circle").css("-webkit-animation", "updown 4s linear infinite")
});



