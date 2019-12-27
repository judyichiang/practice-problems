//i: string
//o: return all vowels in a string
//c: create a string placeholder
//e:

function vowels(str) {
  var result = "";
  var allVowels = "aeiou";
  for(var i = 0; i< str.length; i++){
    for(var k=0; k<allVowels.length; k++){
      if(str[i] === allVowels[k]){
        result += str[i];
      }
    }
  }

  return result;
}

console.log(vowels("four score and seven years ago"))
