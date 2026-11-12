/*
In  JS there are 4 ways to create an object in JS:
1. object literals 
2. class level object
3.Contructor function
4.Prototype based object creation => object.create() method

var Object: ObjectConstructor
Provides functionality common to all JavaScript objects.

Contructor function:
---------------------
constructor function is a normal function which is used to create an object in JS
*/

console.log("------------1.Object literals :-----------");

let products={

pid : 101,
pname : "Mobile",
price: 2000000,
Model:"Iphone18 Pro max",

}

console.log("All product details is :", products);

console.log("----------------2.class level object :---------------");

class Trainer{

 Tid;
 Tname;

 constructor(Tid,Tname){

this.Tid=Tid;
this.Tname=Tname;

 }
 getTrainerInfo(){

console.log("Trainer id is:"+this.Tid+"\nTriner name is:"+this.Tname);

 }
}
const Tr= new Trainer(100,"Priyanka Mam");
Tr.getTrainerInfo();

console.log("----------------3.Constructor Function  :---------------");

function Employee(id,name){

this .id=id;
this.name=name;

this.show=function()
{
    console.log("Employee ID is :"+this.id+"\nEmployee Name is :"+this.name);
}
}

const emp1=new Employee(136,"Radha");
emp1.show();

console.log("----------------4.prototype based Object   :---------------");
// create an object using Object.create() method
// prototype based object requird prototype literals 

let prod=Object.create(products); //  

console.log(prod.pid);
// console.log(prod.pname);
// console.log(prod.price);

prod.id=1212;
console.log(prod.id);