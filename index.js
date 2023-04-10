// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];
let beforeEach = (function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});



function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat('Ralph')


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function  destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Bob")

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function  destructivelyRemoveLastCat(){
    return cats.pop();
}
destructivelyRemoveLastCat()

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

destructivelyRemoveFirstCat();

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  appendCat("Broom")


function  prependCat(name) {
    const newCats = [name,...cats ];
    return newCats;
  }
  appendCat("Arnold")

function removeLastCat(){
  const newCats = [...cats ];
  newCats.pop()
  return newCats
}
console.log(removeLastCat())


function removeFirstCat(){
  const newCats = [...cats ];
  newCats.shift()
  return newCats
}
console.log(removeFirstCat())







// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits)
// // Remove one element from the array starting at index 1
// const removed = fruits.splice(1, 1); // returns ['banana']
// // The array now looks like ['apple', 'orange']
// console.log(fruits)
// // Replace an element in the array
// fruits.splice(1, 1, 'pear'); // replace the element at index 1 with 'pear'
// // The array now looks like ['apple', 'pear', 'orange']
// console.log(fruits)
// // Add elements to the array
// fruits.splice(2, 0, 'grape', 'pineapple'); // add 'grape' and 'pineapple' to the array starting at index 2
// // The array now looks like ['apple', 'pear', 'grape', 'pineapple', 'orange']
// console.log(fruits)