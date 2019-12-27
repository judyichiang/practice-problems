
var arrayReverse = function (arr) {
  var newArr = [];
  for (var i = arr.length -1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};


var myArray = ['hello', 45, 'Bob', 'what', '23']
console.log(arrayReverse(myArray)) //['23', 'what', 'Bob', 45, 'hello']
