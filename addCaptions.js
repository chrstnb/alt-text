"use strict";

var elements = document.getElementsByTagName("img");
var previousText = document.querySelectorAll(".replacedImageWithText");

if (previousText.length == 0) {
	for (var i = 0; i < elements.length; i++) {
		var textBox = document.createElement("div");
		textBox.classList.add("replacedImageWithText");
		textBox.classList.add("hidden");
		textBox.style.height = elements[i].height;
		textBox.style.width = elements[i].width;
		elements[i].parentNode.append(textBox);
		previousText = document.querySelectorAll("replacedImageWithText");
	}
}

for (var i = 0; i < elements.length; i++) {
	previousText[i].classList.toggle("hidden");
	elements[i].classList.toggle("hidden"); 
}


