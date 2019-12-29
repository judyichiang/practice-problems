function ascii(string){
  var result ="";
  for(var i =0; i< string.length; i++){
    result += string[i].charCodeAt()
  }
  return result;
}

console.log(ascii('the cat in the hat'));
//"11610410132999711632105110321161041013210497116"

//https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
//http://www.asciitable.com/
