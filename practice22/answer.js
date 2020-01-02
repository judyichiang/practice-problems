
var input =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ];

input.sort(function (a, b) {
  return a.age - b.age;
});
console.log(input);


// var input =
//   [
//     { name: 'John', age: 42, gender: 'M' },
//     { name: 'Jack', age: 34, gender: 'M' },
//     { name: 'Michael', age: 40, gender: 'M' },
//     { name: 'Kendra', age: 48, gender: 'F' }
//   ];

// function sortObj(input, field) {
//   input.sort(function (a, b) {
//     return a.field - b.field;
//   });
// }

// console.log(sortObj(input, 'age'));
