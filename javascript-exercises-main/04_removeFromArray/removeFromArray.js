const removeFromArray = function (arr, ...args) {
  args.forEach((element) => {
    let targetValueIndex = arr.indexOf(element);

    while (targetValueIndex !== -1) {
      arr.splice(targetValueIndex, 1);
      targetValueIndex = arr.indexOf(element);
    }
  });

  return arr;
};

console.log(removeFromArray([1, 2, 2, 3, 4], 5));

// Do not edit below this line
module.exports = removeFromArray;
