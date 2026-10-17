//1.Prime Number_Problem Statement: Write a JavaScript program to check whether a given number is prime or not using a loop.
console.log("----Start prime number ----");
let number=19, prime=true;
if(number <=1)  prime=false;
for (let i=2;i<number ;i++){
    if(number % i ===0){
     prime= false ;
        break;
    }
}
console.log(prime ? "Prime Number":"Not Prime Number ");


console.log("----End----");
//2.Print Even Numbers => Problem Statement: Write a JavaScript program to print all even numbers between 1 and 50 using a loop.
console.log("----Start =>Print Even Numbers----");

for(let i=1;i<=50;i++) 
{
if(i%2===0){ 
console.log("Print Even Number from 1 to 50 : "+i);
  }  
}
console.log("----End----------------------");
//3.Multiplication Table=> Problem Statement: Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.
console.log("----Start Multiplication Table-------");
let n=3;
for(let i=1;i<10;i++){ 

console.log( n + " x " + i + "=" + (n*i)); //3 x 1 = 3
}

console.log("----End----");
//4.Factorial Number => Problem Statement: Write a JavaScript program to calculate the factorial of a given positive integer using a loop.
// 6!=6*5*4*3*2*1=720

console.log("----Start Factorial number ----");
    let fact=1;
    for(let i=6;i>=1;i--){
    fact=fact*i; 
    }
    console.log("Factorial of 6 is :"+fact);
console.log("----End----");

//5.Count Digits=> Problem Statement: Write a JavaScript program to count the total number of digits present in a given number using a loop.
let num=12345673586 ,rem =0, count=0;
while(num >0){

    rem=num%10;
    num=Math.floor(num/10);
    count=count+rem;
    
}
console.log(`print count the total number of digits:`+count);

// 6.
