function alternate(str) {
  var newStr =""
  for(var i=0 ; i< str.length; i++){
    if( i % 2 === 0){
      newStr += str[i];
    }
    else{
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}


console.log(alternate("amazing")) //"aMaZiNg"
