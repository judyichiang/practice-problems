// Fisher - Yates algorithm

function randomList(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var input = [5, 3, 2, 5, 1];
console.log(randomList(input));
console.log(shuffleArray(input));

//-- recursive
const recursiveArr = arr => {
  if (arr.length === 1) { return arr }
  const rand = Math.floor(Math.random() * arr.length);
  return [arr[rand], ...recursiveArr(arr.filter((_, i) => i != rand))];
};

// array.map
function mapArr(arr) {
  return [...arr].map((_, i, arrCopy) => {
    var rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
    return arrCopy[i]
  })
}

// array.reduce
function reduceArr(arr) {
  return arr.reduce(
    (newArr, _, i) => {
      var rand = i + (Math.floor(Math.random() * (newArr.length - i)));
      [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
      return newArr
    }, [...arr]
  )
}

console.log("recursive: ", recursiveArr(input));
console.log("array.map: ", mapArr(input));
console.log("array.reduce: ", reduceArr(input));
