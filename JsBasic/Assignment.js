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

//1. What is the difference between undefined and null?
// Ans=> a variable has been declared but not assigned a value is undefined. null is an assignment value. It can be assigned to a variable as a representation of no value.
//2. What does typeof userName return?
//answer=> It returns undefined because the variable userName has been declared but not assigned a value.
//3. What does typeof userEmail return?
//answer=> It returns object because null is assigned to the variable userEmail.
//4. Why is typeof null considered unusual in JavaScript?
//answer=> Because null is a primitive value that represents the intentional absence of any object value. However, when you use the typeof operator on null, it returns "object". 
// This is a historical bug in JavaScript that has been present since its early days and has


console.log(`----------------6.Operators Assignment-----------------`);
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
   

//==========================================================
console.log(`------" Start the programming: Type Coercion & Explicit Conversion-----------------`); 
//===========================================================


//1.Problem 1 — UI Price and Quantity :

let price = "500";
let quantity = "3";

let total =Number(price) * Number(quantity);

console.log("Total UI Price and Quantity:"+total);
console.log (typeof total);//number

//2.Problem 2 — UI Price + Tax and The UI returns:
let price1 = "1000";
let tax = "200";
let Finalprice= Number(price1)+Number(tax);
console.log("The UI return is :"+Finalprice); //1200
console.log(typeof Finalprice);//number

//3.Problem 3-Understand + Coercion 
let actual = "100";
let expected = 20;
console.log(actual + expected); //10020=("100"+20)

//4.Understand - Coercion
let actual2 = "100";
let expected2 = 20;
console.log(actual2-expected2);// 80=(100-20) 

//5.UI Value and Assertion

let actual_Price= "100";
let expected_Price = 100;
console.log(actual_Price == expected_Price);//true 
console.log(actual_Price === expected_Price);//false 


//6.Fix the Assertion

let actualPrice1= "500";
let expectedPrice1 = 500;
console.log(Number(actualPrice1) === expectedPrice1);//true

//7.Environment Variable

let timeout1= "30000";
let timeout = Number(timeout1);
console.log(timeout); //30000
console.log(typeof timeout); //number


//8.Problem 8 — Order ID
let orderId = 12345;
let orderIDoutput ="ORDER-" + String(orderId);
console.log(orderIDoutput);

//Problem 9 — Boolean API Value :-
let status2 = "true";
let ActualBoolean= status2 === "true" ;
console.log(ActualBoolean);
console.log(typeof ActualBoolean);

//or we can use the below code to check the below boolean api value is  true or not:

let status1= "true";
let ActualBoolean1= status1 === "true" ;
if(ActualBoolean1===true){

    console.log("the status is true:"+ActualBoolean1);

}else{
console.log("the status is Not true:"+ActualBoolean1);
    
}
console.log(`the status of the boolean Api value is :`+ActualBoolean1);
console.log(typeof ActualBoolean1);



//10 .Problem 10 — Input Field Value
let quantity1 = "5";
let expectedQuantity = 5;
console.log(Number(quantity1)===expectedQuantity);

//11.Problem 11 — Calculate Cart Total
let price4 = "799";
let quantity4 = "2";
let discount = "100";

let total1 =Number(price4)*Number(quantity4) -Number(discount);
console.log(total1); // 1498
console.log(typeof total1);//number
console.log('-----------------End----------------');




console.log(`----------------------COnditional statement program----------------`)
//Assignment No 1: Write a JavaScript program to check whether a number is even or odd.
let Number=33;
if (Number%2==0){
console.log("Even Number:"+Number);

}else{
console.log  ("Odd Number:"+Number);
}

// Assignment No 2. Print the day of the week based on number (1–7). What you will use here? If-else or switch case? =>
// Switch-case :- 
 let Num1 =3;
switch (Num1){
case 1: 
    console.log("Monday");
     break; 
case 2: 
    console.log("Tuesday");
     break; 
case 3: 
    console.log("Wednesday");
     break; 
case 4: 
    console.log("Thrusday");
     break; 
case 5: 
    console.log("Friday");
     break; 

case 6: 
    console.log("Saturday");
     break; 

case 7: 
    console.log("Sunday");
     break;
default : 
console.log("Invalid day number--Error !!");

}
