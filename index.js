"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.getElementById("monkey-button");
  var image = document.getElementById("monkey-image");

  function doThisThing() {
    image.src = "mangabey.jpg";
  }

  button.onclick = function () {
    doThisThing();
  };
});
