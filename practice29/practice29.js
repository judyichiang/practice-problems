function doMath(num1, num2, parm) {
  if (parm === "*") {
    return num1 * num2;
  }
  if (parm === "+") {
    return num1 + num2;
  }
  if(parm === "-"){
    return num1 - num2;
  }
  if(parm === "/"){
    return num1 / num2;
  }
}


console.log(doMath(5, 2, '*'));
