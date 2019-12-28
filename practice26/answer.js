var search = function (arr1, arr2) {
  var result = [];
  for(var i =0 ; i <arr1.length; i++){
    for(var k =0; k<arr2.length; k++){
      if(arr1[i] === arr2[k]){
        result.push(arr1[i]);
      }
    }
  }
  return result;
};


var haystack = ['cat', 'dog', 'bird', 'turtle', 'lizard'];
var needle = ['dog', 'lizard', 'flower', 'monkey', 'unicorn'];

console.log(search(needle, haystack)); //['dog','lizard']
