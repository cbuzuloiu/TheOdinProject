// const link = document.querySelector("a");

// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";

// const sect = document.querySelector("section");

// const para = document.createElement("p");

// para.textContent = "We hope you enjoyed the ride";
// sect.appendChild(para);

// const text = document.createTextNode(
//   " — the premier source for web development knowledge."
// );

// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

// sect.appendChild(linkPara);
// sect.removeChild(linkPara);
// // linkPara.remove();

// // para.style.color = "white";
// // para.style.backgroundColor = "black";
// // para.style.padding = "10px";
// // para.style.width = "250px";
// // para.style.textAlign = "center";

// para.setAttribute("class", "highlight");

const selectInput = document.querySelector("input");
const selectButton = document.querySelector("button");
const selectUl = document.querySelector("ul");

console.log(selectInput);
console.log(selectButton);
console.log(selectUl);

selectButton.addEventListener("click", () => {
  let valueOfInput = selectInput.value;
  selectInput.value = "";

  const createLi = document.createElement("li");
  selectUl.appendChild(createLi);

  const createSpan = document.createElement("span");
  createSpan.textContent = valueOfInput;
  const selectLastChildOfLi = selectUl.lastChild;
  selectLastChildOfLi.appendChild(createSpan);

  const createButton = document.createElement("Button");
  createButton.textContent = "Delete";
  selectLastChildOfLi.appendChild(createButton);

  selectInput.focus();

  const selectLiList = document.querySelectorAll("li");
  const selectButtonList = document.querySelectorAll("li > button");

  selectButtonList.forEach((element, index) => {
    element.addEventListener("click", () => {
      selectLiList[index].remove();
    });
  });
});

// Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
