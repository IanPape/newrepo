// ## **Object Destructuring 1**

// What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

//********** */ 1. the code will print 8 and 1846.

// ## **Object Destructuring 2**

// What does the following code return/print?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?

// ********** 2. The above uses the rest operator to print the rest of the Key/value pairs after numPlanets, 
//              so the console.log will print a new object containing : { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 };

// ## **Object Destructuring 3**

// What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?

//   ********** 3. ' Your name is Alejando and you like purple.'
//                  'Your name is Melissa and you like green'
//                  'Your name is undefined and you like green'

// ## **Array Destructuring 1**

// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

//  **********4.   Maya
//                 Marisa
//                 Chi

## **Array Destructuring 2**

What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?
  console.log(whiskers); // ?
  console.log(aFewOfMyFavoriteThings); // ?

//   ********** 5. "Raindrops on roses"
//                 "whiskers on kittens"
//                 ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with string"];

// ## **Array Destructuring 3**

// What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) 

// //  ********** 6. [10,30,20]

// ES5 Assigning Variables to Object Properties


var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  /* Write an ES2015 Version */

//   ********** 7. const obj = {
//                     numbers : {
//                         a:1,
//                         b:2
//                     }};
//                 const {a,b} = obj.numbers;

// ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

/* Write an ES2015 Version */




