let user1 ={
id:101,
fname: "akash",

}
console.log(user1);

//read the property of object
console.log(user1.id);

//insert new property
user1.mob_no=987567597;
console.log(user1);

//modify 
user1.fname="DIpak";
console.log(user1);

//delete the property
delete user1.mob_no;
console.log(user1);

console.log("------------------------------------");

const user2={

    id: 102,
    fname:"Ram",
    profile :"QA Automation",
}
console.log(user2);

user2.id=56789;
console.log(user2);


// read the property :
console.log(user2.id+" : "+user2.fname );

//insert new property
user2.fname="DEVELOPER"
console.log(user2);

//Modify the property
user2.profile="AI automation",
user2.fname="Shyam";
console.log(user2);


