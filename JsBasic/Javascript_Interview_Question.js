// 1.Reverse a string in JavaScript:

 let str="AKASH";
 let rev="";

 for (let i=str.length-1;i>=0;i--){
    rev+=str.charAt(i); // logic using chatAT Method // reversed = reversed + str[i]; 
 }
 console.log("Reverse String :"+rev);

// 2. Reverse  a String  is using variable :
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

 //4. Check palindrome number or not by using Javascript:

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

// 5. To check the string is palindrome or not :
let str1 ="level";
let rev1="";

for (let i=str1.length-1;i>=0;i--){
rev1=rev1+str1.charAt(i);

}
if(str1===rev1){
console.log("Palindrome string :"+rev1);
}else{
console.log("Not Palindrome string :"+rev1);
}

// 6.Reverse a string without using reverse() :
function reverseString(str){

let result="";
for(let i= str.length-1;i>=0;i--){
 result=result + str[i];

}

return result;
}
console.log(reverseString("Playwright"));

// largest no in an array
let numbers=[1,2,3,4,55,66];
let largest=numbers[0];

for(let i=1;i< numbers.length;i++){
  if(numbers[i]>largest){
  largest=numbers[i];

  }
  
}
console.log(largest);


// Declare an array and count even and odd number from array:
let a1=[10,15,20,25,30,35,40];
let evenCount =0;
let oddCount =0;
for(let i of a1){

  if(i%2===0){

    evenCount++;

  }else{
    
    oddCount++ ;

  }
}
 console.log("Total Even Number:" +evenCount);
  console.log("Total Odd Number :"+oddCount);

  // declare an array find maximum and minimum number :
  let a2=[40,10,30,20,50];
  let min =a2[0];

  for(let i=1;i<a2.length;i++)
{ 
  if(a2[i]< min){
    min=a2[i];
  }
}
console.log("Minimum Number:", +min);

// declare an array find maximum Number:
let a=[40,10,30,20,50];
  let max =a[0];

  for(let i=1;i<a.length;i++)
{ 
  if(a[i]> max){
    max=a[i];
  }
}
console.log("Maximum Number:", +max);

// remove duplicate element in an array:
let a3=[10,20,30,20,30,40];
let unique=[];

for ( let i of a3){
 if(!unique.includes(i)){     // add element to unique array
 unique.push(i);
 }
}
console.log("remove duplicate element:",unique);
  

//declare name and convert even position data into uppercase and convert odd position into lowercase
let trainerName= "Priyanka";
let evenposition_data='';
let oddposition_data='';

//JavaScript indexing starts from 0. So, even indices are 0, 2, 4, 6, and odd indices are 1, 3, 5, 7.
for (let i=0;i<trainerName.length;i++){
  if(i%2 === 0){  
    evenposition_data += trainerName.charAt(i).toUpperCase();
  }else{
    oddposition_data += trainerName.charAt(i).toLowerCase();
  } 
}
console.log("Even Position Data:", evenposition_data);
console.log("Odd Position Data:", oddposition_data);

// remove no in all string : we have some strings with number and we want tro selperate this number from strings:
 
let carData = "1Creta,2Audi,3benz";
let arr1=carData.split(',');
let data =arr1.join(' ');
console.log(data);
let carRes= data.replaceAll(/[0-9]/g,"");
console.log(carRes);

//


