var elements = document.getElementsByTagName("img");

console.log("made inside remove images");
for (var i = 0; i < elements.length; i++) {
	if (elements[i].classList.contains("hidden")) {
		elements[i].classList.remove("hidden");
	} else {
		elements[i].classList.add("hidden")
	}
}