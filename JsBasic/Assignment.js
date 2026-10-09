////Datatype Assignment
//====================
console.log('----------------1.  Identify the datatype Create variables for the following values and identify their datatypes-----------------');
let num=25;
let language="javascript";
let isActive=true;
let notdefined=undefined;
let age=null;
let decimalNum =123.45;
let bigInt=12345678901234567890n;
let id=Symbol("Id");

console.log(num, typeof num);
console.log(language, typeof language);
console.log(isActive, typeof isActive);
console.log(notdefined, typeof notdefined);
console.log(age, typeof age);
console.log(decimalNum , typeof decimalNum );
console.log(bigInt, typeof bigInt);
console.log(id, typeof id);


console.log('----------------2. Create Variables of Different Datatypes and print the value and datatype of all variable-----------------');
let fname="Akash" 
console.log("String:"+fname);

let isEnabled= true;
console.log("Boolean:",+isEnabled);

let number = 30;
console.log("Number:",+number);

let country =undefined;
console.log("undefined:" + country);

let count=null;
console.log("null:",count);

let BigInt=12345678901234567890n;
console.log("BigInt:"+BigInt);

let id1 = Symbol("employeeId");
console.log("ID:", id1);
 
let MyCountry={
name:"India",
State:"Maharashtra",
District:"Wardha",
pincode:442001
}
console.log("Object:",MyCountry);



console.log('----------------3.Predict the output of below code and check by running the code-----------------');
console.log(typeof 100); // number
console.log(typeof "100"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); // object
console.log(typeof 100n); //Bigint



console.log('----------------4. Student Information Create variables to store-----------------');
let StudentName= "Akash";
let StudentAge =30;
let StudentPercentage =40;
let Studentgrade="A";
let Compltedcourse=true;
console.log("Student Name:",StudentName);
console.log("Student Age:",StudentAge);
console.log("Student Percentage:",StudentPercentage);
console.log("Student Grade:",Studentgrade);
console.log("Student Completed Course:",Compltedcourse);



console.log('----------------5.Create two variables:-----------------');
let userName;
let userEmail = null;
console.log("Username:" , userName);
console.log("User Email:" , userEmail);
console.log(typeof userName);
console.log(typeof userEmail);
console.log('-----------------End----------------');

//1. What is the difference between undefined and null?
// Ans=> a variable has been declared but not assigned a value is undefined. null is an assignment value. It can be assigned to a variable as a representation of no value.
//2. What does typeof userName return?
//answer=> It returns undefined because the variable userName has been declared but not assigned a value.
//3. What does typeof userEmail return?
//answer=> It returns object because null is assigned to the variable userEmail.
//4. Why is typeof null considered unusual in JavaScript?
//answer=> Because null is a primitive value that represents the intentional absence of any object value. However, when you use the typeof operator on null, it returns "object". 
// This is a historical bug in JavaScript that has been present since its early days and has


console.log(`------6.Operators Assignment-----------------`);
//Guess the output?
console.log(1 + "2" + 3); //123
console.log(1 + 2 + "3"); //33
console.log("5" * true);  //5
console.log(10 > 5 > 1);  // false
let a1 = 2;
let b = a1++ + ++a1; //(2+4=6 )
console.log(a1, b); // (a1=4,b=6)


let a2 = 3;
console.log(a2++ + a2++ + ++a2); //( 3 + 4 + 6 = 13)


console.log(5 * 2 == "10"); // true

let x = 1;
let y = ++x + x++ + x; //y=2+2+3=7, x=3 
console.log(x, y); //(x=3;y=7)

console.log(10 > 5 && 20 < 30); //true

console.log(null || undefined || "Playwright");//playwright
   