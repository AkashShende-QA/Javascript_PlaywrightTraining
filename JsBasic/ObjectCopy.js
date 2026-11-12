// for copy the array using spread operator:

//Destruction Array/JS object (Playwright):
//array
let a1=[10,20 ,30];
let a2=[100,200,...a1];
console.log(a1);
console.log(a2);

// object 
const student1 ={
 
    sid:101,
    sname:"Akash",
    subject:"Testing",
}
console.log(student1);

const student2 ={...student1};
console.log(student2);

student2.sid=202;
student2.sname="Ram";
student2.subject="Development";
console.log(student2);


//modify 
student1.sname="Kirti";
console.log(student1);
console.log(student2);
