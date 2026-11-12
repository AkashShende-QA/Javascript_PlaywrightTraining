/*Assignments On function :
============================
1. Calculate Test Score Create a function calculateScore() that accepts three marks 
and returns the total score. 
*/
function calculateScore(mark1, mark2, mark3) {
    let total = mark1 + mark2 + mark3;
    return total;
}
// call  function
let result = calculateScore(80, 90, 85);
console.log("Total Score:", result);

//2. Check Test Status =>Create a function checkTestStatus() that accepts a test score. 
    function checkTestStatus(score) {
    if (score >= 40) {
        return "PASS";
    }
    else {
        return "FAIL";
    }
}
// call  function
console.log(checkTestStatus(75));
console.log(checkTestStatus(30));

//3. Validate Username Create a function validateUsername(username). 
function validateUsername(username) {

    if (username !== "" && username.length >= 5) {
        return true;
    }
    else {
        return false;
    }
}
// call  function
console.log(validateUsername("Akash"));
console.log(validateUsername("Dipak"));
console.log(validateUsername(""));
console.log(validateUsername("Ram123"));

/*Validate Login Credentials 
Problem Statement: Create a JavaScript function validateLogin() that accepts a 
username and password. The function should validate the 
credentials and return whether the login is successful or 
unsuccessful.*/

function validateLogin(username, password) {

    if (username === "admin" && password === "admin123") {
        return "Login Successful";
    }
    else {
        return "Invalid Username or Password";
    }
}

//call Function
console.log(validateLogin("admin", "admin123"));
console.log(validateLogin("admin", "12345"));
console.log(validateLogin("user", "admin123"));

/*5.Validate Password 
Problem Statement: Create a function validatePassword() that accepts a 
password and validates it based on the following 
conditions: 
• Password must contain at least 8 characters.  
• Password must not be empty.  
• Password must contain at least one number.  
The function should return true if the password is valid; 
otherwise, return false.*/

function validatePassword(password) {

    if ( password !== "" && password.length >= 8 && /\d/.test(password)) {
        return true;
    }
    else {
        return false;
    }
}

// call Function 
console.log(validatePassword("Akash123"));
console.log(validatePassword("Akash"));
console.log(validatePassword("12345678"));
console.log(validatePassword(""));

/*
6. Browser Test Using Callback Problem Statement: 
Create a function runBrowserTest() that accepts a browser 
name and a callback function. */

//A callback is a function passed as an argument to another function

function runBrowserTest(browser,callback){
    let Testresult ="Pass"
    console.log("Executing test on:"+browser);
    callback(browser,Testresult);
}
function displayRes(browsername,result){
    console.log("BrowserName:",browsername);
    console.log("result:",result);
}
runBrowserTest("chromium",displayRes);
runBrowserTest("WebKit",displayRes);

/*7. Display Browser Names Using forEach() 
Problem Statement: 
Create an array containing the following browser names: 
Chromium 
Firefox 
WebKit 
*/
//forEach() executes the callback function once for each element in the array.
const All_browsers = ["Chromium", "Firefox", "WebKit"];

// Method 1:
All_browsers.forEach(function(browser){
console.log("After calling all Browser:",browser);
});

// Method 2:
All_browsers.forEach(browser => {
    console.log("After calling all Browser:",browser);
  
});

/*
8. Calculate Final Prices Using map() 
Problem Statement: Create an array containing product prices: 
*/

const price = [1000,2000,3000,4000];
const finalPrices=price.map(function(price){

return price + (price*18/100);
});
console.log("Original Price",price);
console.log("Final Price:",finalPrices);