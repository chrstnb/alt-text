window.onload = function() {
	var removeButton = document.getElementById("remove");
	var captionButton = document.getElementById("text");
	removeButton.addEventListener("click", removeImages);
	captionButton.addEventListener("click", addCaptions);

	function removeImages() {
		removeButton.classList.toggle("highlighted");
		chrome.tabs.executeScript({
			file: "removeImages.js"
		});
	}

	function addCaptions() {
		captionButton.classList.toggle("highlighted");
		chrome.tabs.executeScript({
			file: "addCaptions.js"
		})
	}
}




