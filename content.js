// content.js

// Function to change the background color
const changeBackgroundColour = (colour) => {
  document.body.style.backgroundColor = colour;
};

const changeTextColour = (colour) => {
  document.body.style.color = colour;
};

const changeElementTextColour = (element, colour) => {
  const elements = document.getElementsByClassName(element);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = colour;
  }
};

const main = () => {
  changeBackgroundColor("black");
  changeTextColour("white");
  changeElementTextColour("Song_songArtist__sD5_H", "white");
  changeElementTextColour("Song_songRelease__jYe_C", "white");
  changeElementTextColour("Song_songWrapper__PySLU", "black");
};

// Call the function when the page is loaded
window.addEventListener("load", main);
