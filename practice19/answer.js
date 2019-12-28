//i: array of obj
//o: an array sorted by the 'name'


var input =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ]

console.log(input.sort(function(a,b){return a.name < b.name}))


// [
//   { name: 'Jack', age: 34, gender: 'M' },
//   { name: 'John', age: 42, gender: 'M' },
//   { name: 'Kendra', age: 48, gender: 'F' },
//   { name: 'Michael', age: 40, gender: 'M' }
// ]


//https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/

//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value


//-------------------------
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

var People = [
  { Name: "Zelda", Surname: "Surname" },
  { Name: "Aaron", Surname: "ZZZ" },
  { Name: "Janice", Surname: "AAA" }
];

// People.sort(dynamicSort("Name"));
// People.sort(dynamicSort("Surname"));
// People.sort(dynamicSort("-Surname"));
console.log(People.sort(dynamicSort("Name")))

//-------------------------
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

console.log(items);


//--------------------------
var objs = [
  { first_nom: 'Lazslo', last_nom: 'Jamf' },
  { first_nom: 'Pig', last_nom: 'Bodine' },
  { first_nom: 'Pirate', last_nom: 'Prentice' }
];

objs.sort(function (a, b) { return b.last_nom > a.last_nom })
