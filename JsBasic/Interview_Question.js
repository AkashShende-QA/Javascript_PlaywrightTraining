let string="Playwright";
let res =  string.split('').reverse().join('');
console.log(res);

// second method
let str="Playwright Automation";
let reverse ="";
for(let i = str.length-1;i>=0;i--){

reverse=reverse+str.charAt(i);


}
console.log(reverse);
 
// string is palindrome or not
let string1 = "madam";
let palindrome="";

for(let i=string1.length-1;i>=0;i--){

palindrome+=string1.charAt(i)
}
if(palindrome===string1){

console.log('String is Palindrome:'+palindrome);

}else{

console.log('String is Not Palindrome:'+palindrome);
}

//using revese ()

let strin = "level";

let reversed = strin.split('').reverse().join('');

if (strin === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

//find the largest number in an array
const arr=[10,20,30,50,70,80,90];

let largest=arr[0];

for(let i=1;i<arr.length;i++){
    
    if(arr[i]>largest){
    largest=arr[i];

    }
}
console.log("largest number in an array: "+largest);

// find smallest number in array :

const arr1 = [10,20,30,40,50];

let smallest =arr1[0];

for(let i=1 ;i<arr1.length;i++){
if(smallest>arr1[i]){

smallest=arr1[i];

}
}
console.log(smallest);


//remove DUplicate element in an array
const arr3 =[1,2,3,1,2,4,5];
const unique=[...new Set(arr3)];
console.log('After remove duplicate element in an Array:'+unique);

// find even and odd number 
