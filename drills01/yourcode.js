
function sumArray(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result;

}

function fitWithinVal(arr, num) {
  var newArr = []
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      continue;
    }
    if (sum + arr[i] > num) {
      continue;
    }
    sum = sum + arr[i]
    newArr.push(arr[i])
  }
  return newArr
}

function getAllNamesShorterThan(arr, num) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < num) {
      result.push(arr[i]);
    }
  }
  return result;

}

function makeLabel(obj) {
  var result = obj[0]
  return `${result.greeting} ${result.givenName} ${result.familyName}
  ${result["home address"].streetNumber} ${result["home address"].streetName}
  ${result["home address"].city}, ${result["home address"].state} ${result["home address"].zip}`
}
