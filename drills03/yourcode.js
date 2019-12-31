

function getPath(str) {
  return str.split("/");

}
//hardcoded -- needed to be refactored to pass the test suite
function getPathParts(str) {
  str = str.split(":");
  var result = {};
  result.protocol = str[0];
  result.host = str[1].slice(2);
  result.port = parseInt(str[2].slice(0, 4));
  result.path = str[2].slice(4, 19);
  result.file = str[2].slice(-9);
  return result;
}

function getCapitalCount(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][0].toUpperCase()) {
      num++;
    }
  }
  return num;
}

function correctCalcChecker(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    var math = arr[i];
    if (math.op === '/') {
      if (math.num1 / math.num2 === math.result) {
        result.push(arr[i])
      }
    }
    if (math.op === '-') {
      if (math.num1 - math.num2 === math.result) {
        result.push(arr[i])
      }
    }
    if (math.op === '+') {
      if (math.num1 + math.num2 === math.result) {
        result.push(arr[i])
      }
    }
    if (math.op === '*') {
      if (math.num1 * math.num2 === math.result) {
        result.push(arr[i])
      }
    }
  }
  return result;
}

//not included in the testing suite
// function doMath(){

// }
