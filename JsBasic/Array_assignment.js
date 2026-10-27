//Array Scenario Based Questions:

//---------1. Employee Management System  Scenario: 

let Empnamelist =["Rahul", "Priya", "Amit"];
console.log("All the Empnamelist:", Empnamelist);

Empnamelist.push('Sneha');
console.log("Adding sneha to the Emplist:", Empnamelist);
Empnamelist.pop();
console.log("Remove the Last Employee:", Empnamelist);
Empnamelist.unshift('Manager');
console.log(" Add Manager at the beginning:", Empnamelist);
Empnamelist.shift();
console.log("After removing first employee:", Empnamelist);

//----------2.Shopping Cart Application  Scenario: 

 let Shopping =["Mobile", "Laptop", "Mouse"];
 console.log('e-commerce website manages products:',Shopping );
 // Add Keyboard to the cart
 Shopping.push("Keyboard");
 console.log("ADD keyboard:",Shopping);
 //  Display all products in reverse order
 let productsallreverse =Shopping.reverse();
 console.log("product all Reverse:", productsallreverse);

// Convert all cart items into a single string separated by " | " :
let  cartitems=Shopping.join('|');
console.log("Convert all cart items into a single string :", cartitems);

//------------3.Browser Tabs Automation Scenario : 

 let Browsertabs=["Google", "YouTube", "ChatGPT" ];
 //  Close the last opened tab :
 Browsertabs.pop();
 console.log('Close the last opened tab:',Browsertabs);
 //  Add GitHub as the first tab :
 Browsertabs.unshift();
 console.log('Add GitHub as the first  tab:',Browsertabs);
 //  Display tabs in reverse order :
 let reversetab= Browsertabs.reverse();
  console.log('Display tabs in reverse order:',reversetab);

// 4.Food Delivery Orders Scenario: 

let food=["Pizza", "Burger", "Pasta" ]
food.push('Sandwich')
console.log('Add "Sandwich" to the orders :', food);
food.shift();
console.log('Add "Sandwich" to the orders :',food);
let orderstr = food.join(',');
console.log('Display all orders as a comma-separated string :',orderstr);

//5.Student Attendance System  Scenario: 
let stdAttendance = [ "Ankit", "Riya", "Karan"];
stdAttendance.unshift('Neha');
console.log('Add "Neha" at the beginning :',stdAttendance);
stdAttendance.pop();
console.log(' Remove the last student from the list : ',stdAttendance)
//  Create a separate copy of the attendance list:
let separate_copy = [...stdAttendance];
console.log(" separate copy of the attendance List:", separate_copy);


//6. QA Test Case Management Scenario: 
let Test_Case=["LoginTest", "PaymentTest", "SearchTest"]; //0.1,2
let seperatecopy= [...Test_Case];
console.log('Another copy of the same array :- ',seperatecopy);

let Extractfirsttwocases = Test_Case.slice(0,2);
console.log('Extract only the first 2 test cases :-',Extractfirsttwocases);

let reverse_order  =Test_Case.reverse();
console.log('Test cases in reverse order :',reverse_order); 

//7.Movie Recommendation App Scenario: 
let Recommendation_App =["Inception", "Avatar", "Titanic"];
Recommendation_App.push('Interstellar');
console.log('Add "Interstellar" to the movie list :',Recommendation_App);
// Replace "Titanic" with "Jawan" :
Recommendation_App[Recommendation_App.indexOf("Titanic")] = "Jawan" ;//players[indexof(" ")] = "" //=> replace => "1" with "2".
console.log("Replace Titanic with Jawan:",Recommendation_App);
//Convert movie names into a single string separated by "-"
let moviestring =Recommendation_App.join('-');
console.log("Movies as String :", moviestring);


//8.Product Inventory Management Scenario:                
let productInventry = ["Mobile", "Laptop", "Tablet", "Camera"];
console.log("Product  Inventory:",productInventry);
// Remove "Tablet" from inventory:
productInventry.splice(2, 1);
console.log('After Removing "Tablet" from inventory: ',productInventry);
//Add "Smart Watch" after "Laptop" :
productInventry.splice(2,0,"Smart Watch");
console.log("After Adding Smart Watch:", productInventry);
//Create a duplicate copy of updated inventory  :
let duplicatecopy = [...productInventry];
console.log("Updated inventory:", productInventry);
console.log("Duplicate copy :", duplicatecopy);

//9.Online course platform scenario :                           
let online_learning_courses =["JavaScript", "Playwright", "Cypress"]; 
console.log("Print all online course :",online_learning_courses);
//Remove the first course
online_learning_courses.shift('JavaScript');
console.log("Remove the first course:",online_learning_courses);
//Add "TypeScript" at the beginning 
online_learning_courses.unshift('TypeScript');
console.log('Add "TypeScript" at the beginning:',online_learning_courses);
//Extract only the last 2 courses
let Extractlasttwo_courses = online_learning_courses.slice(-2);
console.log('Extract only the last 2 courses:-',Extractlasttwo_courses);

// 10.Music Playlist Application Scenario: 
let Fav_songs=["Song1", "Song2", "Song3"];
console.log("All Fav_songs:-",Fav_songs);
//Display playlist in reverse order
console.log("All playlist in reverse order:-",[...Fav_songs].reverse()); //spread operator (...) used to create a copy ,reverse() reverses that copy.
//Remove the last song  :
Fav_songs.pop();
console.log("Remove the last song :- ",Fav_songs);
//Add "NewSong" at the beginning  
Fav_songs.unshift("NewSong");
console.log("Add NewSong at the beginning:-",Fav_songs);
//Convert playlist into a single string :
let singleStr = Fav_songs.join(" | ");
console.log("Convert playlist into a single string:-",singleStr);

//11.Bug Tracking System Scenario: 
 let buglist = ["Bug101", "Bug102", "Bug103"];
 console.log("Bugtracking system scenario:",buglist);
 buglist.push('Bug104') // add bug 104
 console.log("Add Bug104 :- ",buglist);// 101.102,103,104;
 //Remove "Bug102":
 buglist.splice(1,1);
 console.log("Remove bug102:-",buglist);
 //Create a copy of the bug list  
let duplicate_bug_copy = [...buglist];
console.log("Updated inventory:", buglist);
console.log("Duplicate copy :", duplicate_bug_copy);

//12.Daily Tasks Planner Scenario: 
let Daily_task=["Wake Up", "Exercise", "Study"];
console.log("Daily Tasks Planner Scenario: ",Daily_task);
// Add "Meeting" to the task list :-
Daily_task.unshift("Meeting"); 
console.log('Add "Meeting" to the task list:-',Daily_task);
//Remove the first task :
Daily_task.shift('Meeting');
console.log(' Remove the first task :', Daily_task);
//Reverse all tasks:
console.log(`Reverse all task:`,[...Daily_task].reverse());
//Display all tasks in a single string separated by " -> " 
let singlestring =  Daily_task.join(" -> ");
console.log("Display all tasks in a single string separated by ->", singlestring);

//13.Mobile Contacts List Scenario: 
let Store_Contact_Name=["Ram", "Shyam", "Mohan"];
console.log("Mobile app stores contact nameslist:- ",Store_Contact_Name);
Store_Contact_Name.unshift('Sita');
console.log(' Add "Sita" at the beginning :',Store_Contact_Name);
Store_Contact_Name.pop();
console.log('Remove the last contact:',Store_Contact_Name);
let Extractfirst_two_contact = Store_Contact_Name.slice(0,2);
console.log('Extract only the first 2 contacts  :-',Extractfirst_two_contact);

//Sports Team Selection Scenario: 
let players=["Virat", "Rohit", "Gill"];
console.log(players);
players.push('Hardik');
console.log('Add "Hardik" to the team:',players);
let Replace_Players =[...players].reverse();
console.log("selected players: ",players);
console.log("Replace players: ",Replace_Players);
players[players.indexOf("Gill")] = "KL Rahul";//players[indexof(" ")] = "KL Rahul" replace => "Gill" with "KL Rahul".
console.log(' Replace "Gill" with "KL Rahul":',players);

//Real-Time Automation Framework Scenario: 

let Automation_scenario=["LoginFail", "CheckoutFail", "SearchFail"];
console.log(`Framework automation scenario:`,Automation_scenario);

Automation_scenario.push('ProfileFail');
console.log(' Add "ProfileFail" :',Automation_scenario);

Automation_scenario.shift();
console.log('Remove the first failed test ',Automation_scenario);

let copy_failedtest = [...Automation_scenario];
console.log(' After Create another copy of the failed tests array ',copy_failedtest);

let firstTwo_failedtest = Automation_scenario.slice(0,2);
console.log('Extract only the first 2 failed tests   :-',firstTwo_failedtest);

Automation_scenario[Automation_scenario.indexOf('CheckoutFail')]='PaymentFail';
console.log('Replace "CheckoutFail" with "PaymentFail":',Automation_scenario);

let convert_AllFailure = Automation_scenario.join(" , ");
console.log(' After Convert all failures into a single comma-separated string:- ',convert_AllFailure);
