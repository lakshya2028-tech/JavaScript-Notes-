/**********************************************************************
 * JAVASCRIPT FUNCTIONS & SCOPE - COMPLETE REVISION
 * Author: Your Name
 * Purpose: Revision notes with examples
 *********************************************************************/


//=====================================================================
// 1. FUNCTION DECLARATION
//=====================================================================

/*
Definition:
A Function Declaration is a named function that is declared using the
'function' keyword.

Features:
✔ Hoisted
✔ Can be called before declaration
✔ Reusable
*/

greet("Lakshya"); // Works because function declarations are hoisted.

function greet(name) {
    console.log("Hello " + name);
}

/*
Output:
Hello Lakshya
*/


//=====================================================================
// 2. FUNCTION EXPRESSION
//=====================================================================

/*
Definition:
A Function Expression is a function stored inside a variable.

Features:
✔ Not hoisted like function declarations
✔ Executed only after the variable is initialized
*/

const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));

/*
Output:
30
*/


//=====================================================================
// 3. ARROW FUNCTION
//=====================================================================

/*
Definition:
An Arrow Function is a shorter syntax for writing functions.

Features:
✔ Short syntax
✔ Commonly used in React
✔ Does not have its own 'this'
*/

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));

/*
Output:
20
*/


// Arrow function (single parameter)

const square = number => number * number;

console.log(square(6));

/*
Output:
36
*/


//=====================================================================
// 4. GLOBAL SCOPE
//=====================================================================

/*
Definition:
Variables declared outside every function and block are global variables.

They can be accessed from anywhere in the program.
*/

let company = "Google";

function showCompany() {
    console.log(company);
}

showCompany();
console.log(company);

/*
Output:
Google
Google
*/


//=====================================================================
// 5. LOCAL (FUNCTION) SCOPE
//=====================================================================

/*
Definition:
Variables declared inside a function are local variables.

They can only be used inside that function.
*/

function student() {

    let name = "Lakshya";

    console.log(name);

}

student();

// console.log(name); ❌ ReferenceError


//=====================================================================
// 6. BLOCK SCOPE
//=====================================================================

/*
Definition:
A block is anything inside { }.

let and const are block scoped.
*/

if (true) {

    let age = 20;

    console.log(age);

}

// console.log(age); ❌ Error


//=====================================================================
// 7. var SCOPE
//=====================================================================

/*
Definition:
var is FUNCTION SCOPED.

It ignores block scope.

Blocks:
if
else
for
while

do NOT create a new scope for var.
*/

if (true) {

    var city = "Delhi";

}

console.log(city);

/*
Output:
Delhi
*/


// while loop

let i = 0;

while (i < 1) {

    var language = "JavaScript";

    i++;

}

console.log(language);

/*
Output:
JavaScript
*/


//=====================================================================
// 8. var INSIDE FUNCTION
//=====================================================================

/*
Functions create Function Scope.

var cannot come outside the function.
*/

function test() {

    var marks = 95;

    console.log(marks);

}

test();

// console.log(marks); ❌ Error


//=====================================================================
// 9. let SCOPE
//=====================================================================

/*
let is Block Scoped.

It respects every { } block.
*/

if (true) {

    let x = 100;

    console.log(x);

}

// console.log(x); ❌ Error


//=====================================================================
// 10. const SCOPE
//=====================================================================

/*
const is also Block Scoped.

Difference:
Its value cannot be reassigned.
*/

const PI = 3.14;

// PI = 3.14159; ❌ Error


//=====================================================================
// 11. VARIABLE SHADOWING
//=====================================================================

/*
Definition:
A local variable with the same name as a global variable hides
(shadows) the global variable inside that scope.
*/

let username = "Global User";

function login() {

    let username = "Local User";

    console.log(username);

}

login();

console.log(username);

/*
Output:
Local User
Global User
*/


//=====================================================================
// 12. PARAMETERS
//=====================================================================

/*
Definition:
Parameters are local variables declared inside the function
parentheses.

They exist only inside the function.
*/

function welcome(name) {

    console.log("Welcome " + name);

}

welcome("Lakshya");

// console.log(name); ❌ Error


//=====================================================================
// 13. var vs let in IF
//=====================================================================

console.log("-------- var --------");

if (true) {

    var a = 10;

}

console.log(a);

/*
Output:
10
*/


console.log("-------- let --------");

if (true) {

    let b = 20;

}

// console.log(b); ❌ Error


//=====================================================================
// 14. var vs let in FOR LOOP
//=====================================================================

for (var p = 1; p <= 3; p++) {

    console.log(p);

}

console.log(p);

/*
Output:
1
2
3
4
*/


for (let q = 1; q <= 3; q++) {

    console.log(q);

}

// console.log(q); ❌ Error


//=====================================================================
// 15. HOISTING
//=====================================================================

/*
Definition:
Hoisting is JavaScript's behavior of moving declarations
to the top of their scope before execution.

Only Function Declarations can be called before they are written.
*/

sayHello();

function sayHello() {

    console.log("Hello");

}


/*
Function Expressions and Arrow Functions cannot be called
before initialization.
*/

// greetUser(); ❌ Error

const greetUser = function () {

    console.log("Hi");

};


//=====================================================================
// 16. SUMMARY
//=====================================================================

/*
FUNCTION DECLARATION
--------------------
✔ Hoisted
✔ Named
✔ Reusable

FUNCTION EXPRESSION
-------------------
✔ Stored in variable
✔ Not callable before initialization

ARROW FUNCTION
--------------
✔ Short syntax
✔ No own 'this'
✔ Used heavily in React

GLOBAL SCOPE
------------
Accessible everywhere.

LOCAL SCOPE
-----------
Accessible only inside the function.

BLOCK SCOPE
-----------
Accessible only inside { }.

var
---
Function Scoped
Ignores if, else, for, while blocks.

let
---
Block Scoped
Respects every { } block.

const
-----
Block Scoped
// Cannot be reassigned. */