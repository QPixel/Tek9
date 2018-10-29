function myFunction() {
  $("#helper-text").css("opacity", "0.3");
  
  
  var num = Math.round(Math.random() * 17) + 1;
  var value = "ID: " + num;
  
if (num === 17) {
	value = "Aether";
} else if (num === 18){
	value = "Terrestrial";
}
  $("#circle").css("-webkit-animation", "flip 1s cubic-bezier(1,.37,.63,.82)")
  
  setTimeout(function(){$("#number").text(value)}, 500);; 
}

$("#circle").bind('oanimationend animationend webkitAnimationEnd', function() { 
  $("#circle").css("-webkit-animation", "updown 4s linear infinite")
});




