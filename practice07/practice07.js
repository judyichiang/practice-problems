function translate(str) {
  str = str.toLowerCase().split(" ");
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str[i].slice(1) + str[i][0] + "ay "
  }
  return result;
}

var myString = "Hello my name is Stu";
console.log(translate(myString)); //"ellohay ymay ameya siay tusay"

//i: string
//o: string translated into Pig Latin
//c: basic rule, just adding "ay".
//   if begin with vowel sounds, one just adds "way"
//e: must be letters

function pigLatin(str) {
  var str = str.toLowerCase().split(" ");
  var pig = ""
  for (var i = 0; i < str.length; i++) {
    var a = str[i]
    if (a[0] === "a" || a[0] === "e" || a[0] === "i" || a[0] === "o" || a[0] === "u") {
      pig += a + "way ";
    } else {
      var b = a[0];
      pig += a.slice(1) + b + "ay ";
    }

  }
  return pig;
}

console.log(pigLatin(myString)) //  `"ellohay ymay amenya isway tusay"
