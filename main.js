function inputArray() {
  let arr = prompt("Enter array through space")?.trim().split(" ");
  while (!arr?.length || arr[0] === "") {
    arr = prompt("Enter array through space")
      ?.trim()
      .split(" ");
  }
  return arr;
}
function sortNumberArray(arr) {
  return arr.slice().sort((a, b) => b - a);
}

function sortArray(arr) {
  let arrayOfNumbers = [];
  let arrayOfStrings = [];
  for (const elem of arr) {
    isNaN(elem) ? arrayOfStrings.push(elem) : arrayOfNumbers.push(elem);
  }
  const resultArray = sortNumberArray(arrayOfNumbers).concat(
    arrayOfStrings?.sort()
  );
  return resultArray;
}

const enterArray = inputArray();
console.log(`Enters array: ${enterArray}`);

const sortedArray = sortArray(enterArray);
console.log(`Sorted array: ${sortedArray}`);

sortedArray.splice(1, 3);
console.log(`Splice array 2 - 4: ${sortedArray}`);
