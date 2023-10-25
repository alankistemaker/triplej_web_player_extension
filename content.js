// content.js

// Function to change the background color
function changeBackgroundColour(colour) {
  document.body.style.backgroundColor = colour;
}

function changeTextColour(colour) {
  document.body.style.color = colour;
}

function changeElementTextColour(element, colour) {
  const elements = document.getElementsByClassName(element);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = colour;
  }
}

function main() {
  changeBackgroundColour("black");
  changeTextColour("white");
  changeElementTextColour("Song_songArtist__sD5_H", "white");
  changeElementTextColour("Song_songRelease__jYe_C", "white");
  changeElementTextColour("Song_songWrapper__PySLU", "black");
}

// Call the function when the page is loaded
window.addEventListener("load", main);
