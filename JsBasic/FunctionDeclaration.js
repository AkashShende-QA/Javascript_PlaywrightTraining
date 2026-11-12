/*
function is define grioup of statement that  perform a specific task and return a value.
two types of function 
1. Function Declaration
2.Function Expression

// one forward slash two  **
// It is called as JSDoc comment. 
// It is used to describe the function and its parameters and return type. It is used by the IDE to provide intellisense and code completion./**
 

*/

// 1. Function Declaration (Without any Parameter):

function test(){

    console.log("This is Function Declaration");
}

test();


/**
 * 
 * @param {number} num1
 * @param {number} num2
 */

// 2. Function Declaration (With Parameter):
function addition(num1, num2){
console.log("Addition of two number is :"+(num1+num2));

}

addition(100,200);
addition("hello",20);
addition(true,90);

//funtion declaration with return keyword:
console.log("-----------------Function Declaration with return keyword-------------------");

function test2(){

return "Hello All.......!!";

}
test2(); // not work 
console.log(test2());
//or
let result = test2();
console.log(result);

