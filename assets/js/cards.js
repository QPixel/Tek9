function myFunction() {
  $("#helper-text").css("opacity", "0.3");
  
  
  var num = Math.floor(Math.random() * (18 - 1) + 1);
  var value = "ID: " + num;
function terrestrialredirect() {
 window.location.replace("https://qpixel.pw/Tek9/terrestrialmer.html");
}
function aetherredirect() {
	window.location.replace("https://qpixel.pw/Tek9/aethermer.html");
}
if (num === 17) {
	value = "Aether";
	setTimeout(function() {
    aetherredirect();
}, (2 * 1000));
	
} else if (num === 18){
	value = "Terrestrial"; 
    setTimeout(function() {
    terrestrialredirect()
}, (2 * 1000));

}
  $("#circle").css("-webkit-animation", "flip 1s cubic-bezier(1,.37,.63,.82)")
  
  setTimeout(function(){$("#number").text(value)}, 500);; 
}

$("#circle").bind('oanimationend animationend webkitAnimationEnd', function() { 
  $("#circle").css("-webkit-animation", "updown 4s linear infinite")
});




