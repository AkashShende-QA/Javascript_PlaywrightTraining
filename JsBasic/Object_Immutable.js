//object immutable=> freeze method
//seal()=>> data immutable ==> const keyword

const user1={
 id:1010,
 fname:"Akash",
 location:"Wardha Maharashtra"

}
console.log(user1);

// object will become immutable 
Object.freeze(user1);

// read the property from the object 
console.log(user1.fname+" : "+user1.id+" "+user1.location);

// insert new proprty
//user1.mobno=4567567; //TypeError: Cannot add property mobno, object is not extensible

//modify the property
//user1.location="India"; //TypeError: Cannot assign to read only property 'location' of object '#<Object>'


console.log("---------SEAL Method----------------");
//modifying existing properties value  but here you cannot insert,delete any property
const user2 = {
id:12345,
fname:"RAJ",
location:"UK",
salary: 50000,
}
console.log(user2);
Object.seal(user2); //Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
//read 
console.log(user2.fname+" : "+user2.id);

//insert
//user2.phone=9678765;  //TypeError: Cannot add property phone, object is not extensible

//delete not allowed:
//delete user2.location; //TypeError: Cannot delete property 'location' of #<Object>


// Modify existing property:
user2.salary=80000;
console.log(user2);


let num=null;
console.log(num);
console.log(typeof null);