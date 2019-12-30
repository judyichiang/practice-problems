function arrayFactors(arr) {
  var result = {};
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] !== arr[k]) {
        if (arr[i] % arr[k] === 0) {
          newArr.push(arr[k])
        } else {
          result[arr[i]] = newArr;
        }
        result[arr[i]] = newArr;
      }
    }
    debugger
    newArr = [];
  }
  return result;
}


console.log(arrayFactors([4, 2, 8, 6, 3, 9]));
/* {
4: [2],
  2: [],
    8: [4, 2],
      6: [2, 3],
        3: [],
          9: [3]
	} */
