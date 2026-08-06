// PRACTICE QUESTION ON FUNCTION //
function sayHello(){
    console.log(`Hello World `)
}

sayHello()

// EVEN OR ODD FUNCTION

const EvenOdd = (num)=> (num%2==0 ? "even ": "odd");

    



console.log(EvenOdd(50));
console.log(EvenOdd(29));


//function expresssion

var b1 = function(name ){
    console.log("hello " + name )
};

greet("hi");

//function declaration
function greet(name){
    console.log("hello " + name );
}
var eee = (a,b,c)=> console.log("eeeeee" + c);
eee(10,20,30);


//if  a function has a parameter but no arguement is passed then we set a default value ;

function greet( name = "guest"){
    console.log(`hello  ${name}`);


}


// block scope 

var name ='nitin'; //gloabl scope

function greet(){
    v;

}
greet("shanvi");
console.log(name);

