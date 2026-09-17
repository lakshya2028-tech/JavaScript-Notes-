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



//for each
let nums = [1,2,3,4,80];
nums.forEach(n => {
    console.log(n*4);
});

nums.forEach(( element , index, array ) => {
    console.log(element, index);
});

let arr = [20, 60,50];
arr.forEach((value, index , array) => {
    console.log(  `value : ${value} , index : ${index} , array : ${array}` );

});

let chapter = [`chapter 1` , `chapter 2`,  `chapter 3`];
chapter.forEach((element , index ) => {
    console.log((element));
});

console.log(typeof(chapter[0]));

//TO CHECK LENGTH OF ARRAY 
console.log(arr.length);

// MUTATING METHOFS ( CHANGE THE ORIGINAL ARRAY
//  );

let array1 = ['apple',  `mango`,  2,50,100]

array1.push(`banana`); // add the element to the last index 
array1.pop() // removes the last element and return 
array1.unshift(20) // add element in the beginning
let array2 = [1]
let last = array2.push(200);
console.log(last);
console.log(array2);



