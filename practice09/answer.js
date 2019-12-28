//i: string, array of string
//o: array of strings that have all the letters in the 1st string paramter
//c: possible duplicate letters
//e: must be letters

function fittingWords(str, arr) {
  var result = [];
  var unique = str.split("")
  //remove duplicate letters
  unique = [...new Set(unique)]
  // console.log(unique.length)
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var commonChar = {};
    //loop through str
    for (var k = 0; k < str.length; k++) {
      //loop through word
      for (var m = 0; m < word.length; m++) {
        //compare letters from str vs word
        if (str[k] === word[m]) {
          //if they are equal add a key to the object
          commonChar[str[k]] = 1
        }
      }
    }
    var char = Object.keys(commonChar).join("");
    if (char.length === unique.length) {
      result.push(word)
    }
  }
  return result;
}

var myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute', 'caaar']; // added 'caaar'

// fittingWords('cat', myArray);
console.log(fittingWords('caaaaat', myArray));
  //['cat','caterpillar','accurate','cactus']
