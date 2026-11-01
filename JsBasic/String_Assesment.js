//Count the number of words in a sentence

let string = "I am learning javascript";
console.log(" Count the number of Words is :",string.split(" ").length); // we used length for counts the number of words.

//2.Remove duplicate characters from a string
let str = "Programming" ;
let response = " ";
for(let i=0;i<str.length;i++){
    if(!response.includes(str[i])){
        response=response+str.charAt(i);
    }
}
console.log("Remove Duplicate characters from a string:"+response);

//3.Capitalize the first letter of a string.
let Input ="javascript";
let output= Input.charAt(0).toUpperCase() + Input.slice(1);
console.log("Capitalize the first letter of a string:",output);

//4.Remove all spaces from a string:
let inputstring="Welcome to learn playwright";
console.log("Remove all spaces from a string",inputstring.replace(/\s/g,""));

//5.Find the number of characters in a string with and without using length. 
let String1 = "Akash";
console.log("Number of characters in a string using legth property: ",String1.length);

// without using length
let String = "Akash";
let count=0;
for(let char of String){     // we have to  used "for of " loop concept here.
    count++;

}
console.log("After Number of characters in a string without using length:"+count);

//Count the number of vowels in a string:

let str1="automation";
let vowels= " ";

for(let ch of str1){
if("aeiouAEIOU".includes(ch)){
     vowels++;
}
}
console.log("Count the number of vowels in a string:",vowels);


//Reverse a string with & without using the built-in reverse() method.
let string2= "playwright";
let output1=string2.split("").reverse().join("");
console.log("Reverse a string with using the built-in reverse() method:",output1);


//without using the built-in reverse() method.
let  string3= "playwright Automation";
console.log(string3);

let rev="";
for(let i=string3.length-1;i>=0;i--){

rev = rev+string3.charAt(i);
}
console.log(rev);