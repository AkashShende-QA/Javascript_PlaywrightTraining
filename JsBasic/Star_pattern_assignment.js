//Print a 5 × 5 Star Pattern
//Problem Statement: Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
/*
*****
*****
*****
*****
*****

*/
console.log(`===========>Pattern_Example===============>`)
for(let r=1;r<=5;r++)
{
let row="";
for(let a=1;a<=5;a++){

row=row+"*";

}
console.log(row);

}
//9.Decreasing Star Pattern => 
//Problem Statement:Write a JavaScript program using nested loops to print the following pattern:
/*
*****
****
***
**
*
*/
console.log( `================Start the program===================>`)
for(let r=5;r>=1;r--){
let row="";
for(let a=1;a<=r ;a++){

row=row + "*";
}
console.log(row);
}