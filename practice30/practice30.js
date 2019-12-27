var randomRange = function(min, max){
  return Math.floor(Math.random() * (max - min) + min);
};


console.log(randomRange(2, 15)) //7
// randomRange(1, 100) //85



var randomArr = function(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomArr(['a', 'b', 'c', 'd', 'e'])) //'b'
