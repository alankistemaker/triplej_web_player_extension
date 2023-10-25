// content.js

// Function to change the background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "black";
}

const changeBannerColour = () => {
  const banner = document.getElementsByClassName("nav");
  if (banner.length > 0) {
    banner[0].style.backgroundColor = "black";
  }
};

// Call the function when the page is loaded
window.addEventListener("load", changeBackgroundColor);
window.addEventListener("load", changeBannerColour);
