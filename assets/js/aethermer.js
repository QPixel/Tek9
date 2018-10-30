function myFunction() {
  $("#helper-text").css("opacity", "0.3");
  
  
  var num = Math.floor(Math.random() * (11 - 1) + 1);
  var value = num
  
 if (num === 1) {
	value = "Cumulus"
} else if (num === 2){
	value = "Stratus"; 
} else if (num === 3){
	value = "Stratocumulus"; 
} else if (num === 4){
	value = "Altocumulus"; 
} else if (num === 5){
	value = "Altostratus"; 
} else if (num === 6){
	value = "Nimbostratus"; 
} else if (num === 7){
	value = "Cirrus"; 
} else if (num === 8){
	value = "Cirrocumulus"; 
} else if (num === 9){
	value = "Cirrostratus"; 
} else if (num === 10){
	value = "Lenticular"; 
} else if (num === 11){
	value = "Cumulonimbus"; 
} else {
	value = "Tell Riley to fix this"
}

   $("#circle").css("-webkit-animation", "flip 1s cubic-bezier(1,.37,.63,.82)")
  
  setTimeout(function(){$("#number").text(value)}, 500);; 
}

$("#circle").bind('oanimationend animationend webkitAnimationEnd', function() { 
  $("#circle").css("-webkit-animation", "updown 4s linear infinite")
});



