"use strict";

let arr = ["I", "go", "home"];

delete arr[1];

// console.log(arr);

let removed = arr.splice(1, 1);
// console.log(arr);

// console.log(removed);

arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

// console.log(arr.concat(arrayLike));

function camelize(str) {
  let newWord = "";
  const arr = str.split("-");
  console.log(arr);

  arr.forEach((item, index) => {
    if (index === 0) {
      newWord += item;
    }

    if (index >= 1) {
      const firstLetter = item.charAt(0);
      const firstLetterCap = firstLetter.toUpperCase();
      const remainingLetters = item.slice(1);
      //   console.log(firstLetter);
      //   console.log(firstLetterCap + remainingLetters);
      const capWord = firstLetterCap + remainingLetters;
      newWord += capWord;
    }
  });

  return newWord;
}

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
