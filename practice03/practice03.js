function groupArray(parm){
  var result = [];
  var num = [];
  var str = [];
  var boolean = [];
  for(var i =0; i<parm.length; i++){
    if(typeof parm[i] === "string"){
      str.push(parm[i]);
    }
    if(typeof parm[i] === "number"){
      num.push(parm[i]);
    }
    if(typeof parm[i] === "boolean"){
      boolean.push(parm[i]);
    }
  }
  result.push(num);
  result.push(str);
  result.push(boolean);
  return result;
}


var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
console.log(groupArray(myArray)); //[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]
