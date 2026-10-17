// 1.Reverse a string in JavaScript:

 let str="AKASH";
 let rev="";

 for (let i=str.length-1;i>=0;i--){
    rev+=str.charAt(i); // logic using chatAT Method 
 }
 console.log("Reverse String :"+rev);

// 2. Reverse  a String :
let S1="Hello";
let res="";
let temp=res;

for(let i=4;i>=0;i--){
res+=S1.charAt(i);
}
//console.log("Reverse String :"+res);
console.log(`Reverse a string of${temp} is:${res}`);

// 3. Reverse a number using floor method :
let num=123,rem=0,result=0;
while(num>0){
rem=num%10;
num=Math.floor(num/10);// if we are not using the floor method then we will get "infinity" output in console
result=result*10+rem; 

}
console.log(result);

 //4. Check palindrome or notby using Javascript:

let number=121,rem1=0,result1=0;
while(number>0){
rem1=number%10;
number=Math.floor(number/10);
result1=result*10+rem1;
}
if(number===result1){

    console.log("Palindrome Number"+result1);

}else{

  console.log("Not a Palindrome Number:"+result1);
}
