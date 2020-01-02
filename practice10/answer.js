function permutations(str) {
  var arr = str.split('');
  var results = [];

  function permute(arr, queue) {
    var current;
    var queue = queue || '';

    for (var i = 0; i < arr.length; i++) {
      current = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(queue += current[0]);
      }
      permute(arr.slice(), queue.concat(current));
      arr.splice(i, 0, current[0]);
    }

    return results;
  }

  return permute(arr);
}

console.log(permutations('abc'))
//["abc", "acb", "bac", "bca", "cab", "cba"]

// Time Complexity: O(n * n!)
// https://js-algorithms.tutorialhorizon.com/2015/11/20/generate-permutations-backtracking/
