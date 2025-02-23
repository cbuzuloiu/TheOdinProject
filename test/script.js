`use strict`;

const container = document.querySelector("#container");

let content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

content = document.createElement("p");
content.setAttribute("style", "color: red");
content.textContent = "Hey I'm red!";
container.appendChild(content);

content = document.createElement("h3");
content.setAttribute("style", "color: blue");
content.textContent = "Hey I'am red!";
container.appendChild(content);

content = document.createElement("div");
content.classList.add("div-2");
container.appendChild(content);

const containerDiv2 = document.querySelector(".div-2");
let contentDiv2 = document.createElement("h1");
contentDiv2.textContent = "I'm in a div";
containerDiv2.setAttribute(
  "style",
  "border: 1px solid black; background-color: pink"
);
containerDiv2.appendChild(contentDiv2);
contentDiv2 = document.createElement("p");
contentDiv2.textContent = "ME TOO!";
containerDiv2.appendChild(contentDiv2);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
