//i: array of obj
//o: an array sorted by the 'name'

var input =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ]

//name
input.sort(function (a, b) {
  var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
  if (nameA < nameB) //sort string ascending
    return -1
  if (nameA > nameB)
    return 1
  return 0 //default return value (no sorting)
});

console.log(input);
//age
// input.sort(function(a, b){
//     return a.age-b.age
// })


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

var people = [
  { Name: "Zelda", Surname: "Surname" },
  { Name: "Aaron", Surname: "ZZZ" },
  { Name: "Janice", Surname: "AAA" }
];

// People.sort(dynamicSort("Name"));
// People.sort(dynamicSort("Surname"));
// People.sort(dynamicSort("-Surname"));
console.log(people.sort(dynamicSort("Name")))

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

console.log("value ",items);


//--------------------------
var objs = [
  { first_nom: 'Lazslo', age: 23 },
  { first_nom: 'Pig', age: 32 },
  { first_nom: 'Pirate', age: 19 }
];

console.log("age: ",objs.sort(function (a, b) { return b.last_nom > a.last_nom }))
