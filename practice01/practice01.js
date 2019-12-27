//i: a string and an array of string
//o: array of words that are longer than the string in the 1st parameter
//c:
//e:

var biggerWords = function (str, arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > str.length) {
      result.push(arr[i]);
    }
  }
  return result;
}


var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles']

console.log(biggerWords('whales', myArray));

//Output - `['reptile', 'mammoth', 'turtles']
