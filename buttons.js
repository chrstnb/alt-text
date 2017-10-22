window.onload = function() {
	document.getElementById("remove").addEventListener("click", removeImages);
}

function removeImages() {
	chrome.tabs.executeScript({
		file: "removeImages.js"
	});
}