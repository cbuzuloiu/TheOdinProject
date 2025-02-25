"use strict";
// --- SELECT ELEMENTS ---
const selectDrawingBord = document.querySelector(".drawing-bord");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("card-pixel");
  selectDrawingBord.appendChild(div);
}
