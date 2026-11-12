//In JS object will created outside the class and then we can access the data using object reference. 
// In Javascript we cannot create multiple constructor in a class. We can create only one constructor in a class




class StudentData{
    //data members
    id;
    fname;
// define constructor 
constructor( id ,fname) // local data
{
   this.id=id;
   this.fname=fname;
}

//method 
getData(){

    //console.log(id); // refernce error because id is not defined in this scope.
    console.log("Student id is: "+this.id);
    console.log("Student name is: "+this.fname);
}

}
const s1= new StudentData(101, "Akash");
s1.getData();

const s2=new StudentData(102,"Dipak");
s2.getData();

console.log("-------------------second Example--------------------------------");
// 2. Create a class By "Employee"and object in JS :
class Employee{

    Empid;
    EmpName;
    Profile;
    adress;
    age;
    salary;

constructor(Empid,EmpName,Profile,adress,age,salary){
  
  this.Empid=Empid;
  this.EmpName=EmpName;
  this.profile=Profile;
  this.address=adress;
  this.age=age;
  this.salary=salary;

}
getInfo(){

    // console.log("Employee id is :"+this.Empid);
    // console.log("Employee name is :"+this.EmpName);
    // console.log("Employee profie is :"+this.profile);
    // console.log("Employee address is:"+this.address);
    // console.log("Employee age is :"+this.age);
    // console.log("Employee salary is :"+this.salary);

    console.log("Employee id is :"+this.Empid+"\nEmployee name:"+this.EmpName+"\nEmployeeprofile:"+this.profile
               +"\nEmplyee address"+this.address+"\nEmployee age:"+this.age+"\nEmployee Salary:"+this.salary);

    
}
}
 const E1 = new Employee(101,"Akash","Automation Tester","Wardha Maharashtra-442001","28","50000");
 E1.getInfo();

 const E2 = new Employee(102,"Dipak","QA Engineer","Pune Maharashtra-411001","25","60000");
 E2.getInfo();

