

function countOccurences(arr, str) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      count++
    }
  }
  return count;

}

function wordLengths(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].length)
  }
  return result;

}

function getMinMaxMean(arr) {
  var result = {};
  var min = arr[0];
  var max = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  var mean = sum / (arr.length);
  result.min = min;
  result.max = max;
  result.mean = mean;
  return result;

}

function findMode(arr) {
  var result = 0;
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    }
    else {
      count[arr[i]]++;
    }
  }
  for (var key in count) {
    // console.log(count[key])
    if (result < count[key]) {
      result = key;
    }
  }
  return parseInt(result);
}
