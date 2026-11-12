/*
Destruction Array /Object (Playwright) 
it is a clean way to extract elements from array/object and store it into variable 

*/
// Array Destructuring 
  //              0         1         2        3
let products =['Display','keyboard','Mouse','Hard driver'];
let [p1]=products;
console.log(p1);

let [product1,product2]=products;
console.log(product1);
console.log(product2);


let [a1,a2,a3,a4]=products;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

let [b1,b2]= products.slice(-2);
console.log(b1+" "+b2);

// console.log(product.slice(1)); // it will return all the elements from index 1 to end of the array
// console.log(product.slice(1,2));

// //last two entries:
// console.log(product.slice(2));
// console.log(product.slice(-2));

/* object destructuring

= object variable name &  key name should be same as object property name.

*/

let username ={

Name : 'John',
Lastname : 'Doe',
Id : 101,
Location : 'USA',

}
console.log(username);


// Whenever we follow  destructuring {}

let {Id,Name,Lastname,Location} = username;
console.log(Id);
console.log(Name);
console.log(Lastname);
console.log(Location);


let customer ={

    firstname : 'John',
    lastname : 'Doe',
    id : 101,
    postalcode : 12345,
    address : 'USA',
    profile : 'Admin',
    age : 30,
    gender : 'Male',
}

// fucntion with destructing 

function getCustomerDetails({firstname, lastname, id, postalcode, address, profile, age, gender}){
console.log("Get the customer details:" +address+" with Name:"+firstname+" "+lastname+ " and the profile"+profile+" ");

}
//call the function with objectname as argument
getCustomerDetails(customer);
