function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var expandText = document.getElementById("expandedText");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  expandText.innerHTML = imgs.getAttribute("data-text");
  expandText.style.display = "block";
}