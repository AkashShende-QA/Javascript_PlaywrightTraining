//Assignments on Object: Create a student object, access properties, update values, add a property, and delete a property.
const student = {
    id: 101,
    name: "Akash",
    age: 27,
    course: "Java",
    marks: 85
};
console.log(student);
console.log("Student Name:", student.name);
console.log("Student Marks:", student.marks);
student.course = "JavaScript";
student.marks = 90;
student.city = "Wardha";
delete student.age;

console.log("Updated Student Object:", student);


//Program 2. Employee Object Create an employee object containing: 
const employee = {
    id: 101,
    name: "Akash",
    department: "QA",
    designation: "QA Engineer",
    salary: 50000
};
console.log(employee.id);
console.log(employee.name);
console.log(employee.department);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee["id"]);
console.log(employee["name"]);
console.log(employee["department"]);
console.log(employee["designation"]);
console.log(employee["salary"]);
employee.salary = 60000;
employee.location = "Hyderabad";
delete employee.designation;
console.log("Updated Employee:", employee);

//program 3.Create a testData object containing: 
const testData = {
    username: "standard_user",
    password: "secret123",
    browser: "chromium",
    environment: "QA",
    timeout: 30000
};
const keys = Object.keys(testData);
console.log("Property Names:", keys);
console.log("Total Properties:", keys.length);
console.log("Username Exists:", keys.includes("username"));

//Program 4.Create an object containing test configuration: 
const testData1 = {
    username: "standard_user",
    password: "secret123",
    browser: "chromium",
    environment: "QA",
    timeout: 30000
};
const keys1 = Object.keys(testData1);
console.log("Property Names:", keys1);
console.log("Total Properties:", keys1.length);
console.log("Username Exists:", keys1.includes("username"));

//Program 5.Create a user object: 
const user = {
    username: "standard_user",
    role: "tester",
    department: "QA",
    experience: 5
};
const entries = Object.entries(user);
for (const [key, value] of entries) {
    console.log(key + " : " + value);
}

//Program 6: Copy Object Using Spread Operator
const user1 = {
    name: "John",
    role: "Tester",
    city: "Pune"
};

const newUser = {
    ...user1,
    role: "Automation Engineer",
    experience: 5
};

console.log("Original Object:", user1);
console.log("New Object:", newUser);

//Program 7.Playwright Configuration Object -Create a configuration object:

const config={
browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
};

console.log('configration Value:'+Object.values(config));

config.browser="firefox";

config.timeout= 6000;
config.screenshot="only-on-failure";
console.log("Retries Exist:","retries"in config);

const newConfig = {
...config,
baseURL: "https://google.com"
};
console.log("Original Config:",config);
console.log("New COnfig:",newConfig);

console.log("-----------------Assignments On Class----------------------------");


/*
JavaScript Class Problem Statements 
Program 1: Create a Student Class 
Problem Statement: 
Create a Student class with properties name, age, and course. Create 
two objects and display their details. 
*/

class Student {
    constructor (name , age ,course){
    this.name=name;
    this.age=age;
    this.course= course;
    }

 displayDetails(){

console.log("Name:"+this.name+"\nAge:"+this.age+"\ncourse"+this.course);

 }
}
const student1 = new student("Akash", 27, "JavaScript");
student1.displayDetails();

const student2 = new student("Dipak", 25, "JavaScript");
student2.displayDetails();


/*
Program 2: Bank Account Class 
Problem Statement: Create a BankAccount class with the following: 
*/

class BankAccount {

 constructor(accountHolder, Balance){

this.accountHolder=accountHolder;
this.Balance=Balance;

 }

 deposit(amount){

    this.Balance=this.Balance+amount;
    console.log("Deposited amount:",amount);

 }
 withdrawl(amount){

    if(amount <=this.Balance){

    this.Balance=this.Balance - amount;
    console.log("Withdrawl amount:",amount);
    }else{
        console.log("Insufficient Balance");
    }
 }
checkBalance(){

   console.log("Account Holder: ", this.accountHolder);
   console.log("Available Balance : ", this.Balance);
}

}
const account1 = new BankAccount("Akash", 10000);
account1.checkBalance();
account1.deposit(90000);
account1.withdrawl(6999);
account1.checkBalance();

/*
Program 3: Employee Class 
Problem Statement: 
Create an Employee class with name, salary, and 
department. Create a method that calculates a 10% bonus and 
displays the total salary. 

*/
class Employee {

    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    Bonus(){

    let bonusSalary =this.salary*10/100;
    let totalSalary = this.salary + bonusSalary;

    console.log("Emp_Name:"+this.name+"\nEMP_Salary:"+this.salary+"\nEMP_Department"+this.department+"\n10% Bonus:",bonusSalary+"\nTotalSalary:",totalSalary);

    }
}
const emp1=new Employee("Akash", 50000, "QA");
emp1.Bonus();