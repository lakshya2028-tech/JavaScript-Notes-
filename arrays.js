//ARRAYS IN JS
// AN ARRAY IS AN ORDERED LIST OF VALUES 
// CREATING ARRAYS
let fruits = ['apple' , 'mango' , 25 , true , "banana"]

// ACCESSING ARRAYS ELEMENT USING INDEX VALUE
console.log("accesiing arrays");
console.log(fruits[0]);
console.log(fruits[1]);
console.log(typeof(fruits[1]));

// TO ACCESS LAST ELEMENT IS ARRAYS JSUT USE LENGTH -1 ;

console.log();
console.log("accessing last element");
console.log(fruits[fruits.length-1]);
console.log();
// NEGATIVE INDEX DONT WORK IN JS LIKE PYTHON fruits[-1] is undefined
console.log("to get last element fast modern")
console.log(fruits.at(-2));

//USING .AT CAN HELP YOU ACCESS NEGATIVE ARRAYS IN JS