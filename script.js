var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("randomize");

function generateRandomColor() {
  // storing all letter and digit combinations
  // for html color code
  var letters = "0123456789ABCDEF";

  // html color code starts with #
  var color = '#';

  // generating 6 times as HTML color code consist
  // of 6 letter or digits
  for (var i = 0; i < 6; i++)
     color += letters[(Math.floor(Math.random() * 16))];

  return color;
}

function setButtonBackground() {
    randomize.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}


function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  setButtonBackground();

  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  col1 = generateRandomColor();
  col2 = generateRandomColor();

  body.style.background = "linear-gradient(to right, " + col1 + ", " + col2 + ")";

  color1.value = col1;
  color2.value = col2;
  css.textContent = body.style.background + ";";

  setButtonBackground();
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomize.addEventListener("click", setRandomGradient)

window.onload = function() {
  setRandomGradient();
}
