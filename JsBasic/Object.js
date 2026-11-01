let CustomerDetails ={

id : 1012,
fname: "Akash",
project :['Selenium','Java','javascript','Playwright','Cypress'],
//             0        1      2             3           4
//method// function
read:function(){
console.log("This is a read() function");


}
}
console.log(CustomerDetails);
console.log(typeof CustomerDetails);

//console.log(---dot notation---)

console.log(CustomerDetails.id);
console.log(CustomerDetails.fname);
console.log(CustomerDetails.project);

//method
CustomerDetails.read();
console.log("-------------");

//sqaurebrackets []
console.log(CustomerDetails["fname"]);
console.log(CustomerDetails["id"]);
console.log(CustomerDetails["project"]);

//method call()
CustomerDetails['read']();

//array reading
console.log(CustomerDetails.project[2]);

//Insert new property into object:
CustomerDetails.address = "India";
console.log(CustomerDetails);

//Modify any existing property/key:

CustomerDetails.id= 3006;
CustomerDetails.fname="Akashshende";
CustomerDetails.project[4]="TOSCA";
console.log(CustomerDetails);

//delete any property from the object
delete CustomerDetails.address;

delete CustomerDetails.project.shift();
CustomerDetails.project.unshift('Selenium');
console.log(CustomerDetails);
CustomerDetails.project.shift();
console.log(CustomerDetails);

//
let studentData ={

id :101,
fname:"Akash",
marks:100,
Subject : "Automation testing",

} 
console.log(studentData);

// only keys will iterate 
for (let i in studentData){
console.log(i);
}

for(let i in studentData){

console.log(studentData[i]);

}

//key:value

for(let i in studentData){

console.log(i +":"+studentData[i]);
}

console.log("---object Interface  & methods---");
console.log(studentData);

//keys():
let allKeys =Object.keys(studentData);
console.log(allKeys);

//values:

let allvalues =object.values(studentData);
console.log(allvalues);

// key:value --> entries();
  let AllEntries = object.entries(studentData);
  console.log(AllEntries);

  


