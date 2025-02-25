"use strict";
// --- SELECT ELEMENTS ---
const selectDrawingBord = document.querySelector(".drawing-bord");
const inputField = document.querySelector("input");
const btn = document.querySelector("button");

function createPixelCard(n) {
  //   if (n > 100) {
  //     return alert("n<=100");
  //   }
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
    element.style.backgroundColor = "white";

    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    });
  });
}

createPixelCard(16);

btn.addEventListener("click", () => {
  const n = Number(inputField.value);
  inputField.value = "";

  if (n <= 0) {
    alert("Grid dimension must be beween 1 and 100");
  }

  const divSelect = document.querySelectorAll(".drawing-bord > div");
  divSelect.forEach((element) => {
    element.remove();
  });

  createPixelCard(n);
});
