"use strict";
// --- SELECT ELEMENTS ---
const selectDrawingBord = document.querySelector(".drawing-bord");

function createPixelCard(n) {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.classList.add("card-pixel");
    selectDrawingBord.appendChild(div);
  }
}

createPixelCard(256);
