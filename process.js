function parse() {
  var elements = document.getElementsByTagName("img")

  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    console.log(elements[i].src);
  }
}
