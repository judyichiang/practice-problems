var math = function(num1, num2){
  var result = [];
  var add = num1 + num2;
  result.push(`${num1}+${num2}=${add}`)
  var subtract = num1 - num2;
  result.push(`${num1}-${num2}=${subtract}`)
  var multiple = num1 * num2;
  result.push(`${num1}*${num2}=${multiple}`)
  var divide = num1 / num2;
  result.push(`${num1}/${num2}=${divide}`)

  return result;
};

console.log(math(2, 5)); //["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"]
