"use strict";
// --- SELECT ELEMENTS ---
const selectDrawingBord = document.querySelector(".drawing-bord");

function createPixelCard(n) {
  if (n > 100) {
    return alert("n<=100");
  }
  const cadrPixelWidth = selectDrawingBord.clientWidth / n;
  const cadrPixelHeight = cadrPixelWidth;

  console.log(selectDrawingBord.clientWidth);
  console.log(cadrPixelWidth);
  console.log(cadrPixelHeight);

  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    selectDrawingBord.appendChild(div);
  }

  const divSelect = document.querySelectorAll(".drawing-bord > div");

  divSelect.forEach((element) => {
    element.style.width = `${cadrPixelWidth}px`;
    element.style.height = `${cadrPixelHeight}px`;
    element.style.border = "1px solid black";
  });
}

createPixelCard(16);
