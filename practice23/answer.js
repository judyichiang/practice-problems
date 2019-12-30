function find(num) {
  var result = [];
  for (var i = 0; i <= num; i++) {
    if(num % i === 0){
      result.push(i);
    }
  }
  return result;

}


console.log(find(10)) // [1,2,5,10]
