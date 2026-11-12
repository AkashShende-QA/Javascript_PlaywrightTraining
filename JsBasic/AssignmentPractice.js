// String  & Array assignment: 
let str = "JavaScript";
console.log(str.length);

let tr = "Playwright";
console.log(tr.substring(4, 8));

let str1 = "Hello";
console.log(str1.charAt(1));

let stri = "Automation";
console.log(stri.slice(0, 4));

let st = "QA Testing";
console.log(st.includes("Test"));

let strn = "Hello World";
console.log(strn.indexOf("World"));

let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

let arr1 = [10, 20, 30];
console.log(arr1.length);

let ar = ["A", "B", "C"];
console.log(ar[1]);

let arrr = [10, 20, 30];
arrr.unshift(5);
console.log(arrr)

let arry = [1, 2, 3, 4];
console.log(arry.slice(1, 3));


let rr = [1, 2, 3];
rr.splice(1, 1);
console.log(rr);

// Function Assignment:
//---------------------
function add(a, b = 10) {
return a + b;
}
console.log(add(5));


const square = x => x * x;
console.log(square(4));

const person = {
name: "John"
};

console.log(person.age);


const obj = {
a: 10
};

delete obj.a;

console.log(obj.a);


function add(a, b) {
return a + b;
}

console.log(add(2));

const object = {
name: "John"
};
console.log(JSON.stringify(object)); //stringify=>Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

// callback function:
function greet(name, callback) {
console.log("Hello " + name);
callback();
}

function bye() {
console.log("Goodbye!");
}

greet("Priyanka", bye);

//
const person1 = {
name: "Priya",
age: 25
};

const { name } = person1;
console.log( name );

//
const student = {
name: "Rahul",
marks: 90
};
const { name1, city = "Pune" } = student;
console.log(city);