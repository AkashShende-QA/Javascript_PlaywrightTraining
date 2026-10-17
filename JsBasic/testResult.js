//// Assignment No 03: Condition : if response Code is 100-199→print: Informational  
//If response Code is 200-299→print: successful  
//If response Code is 300-399→print: Redirectional  
//If response Code is 400-499 →print: Client Error 
//If response Code is 500-599→print: Server Error For any other code →print 
//Unkown Status code  

let responsecode=305;

if(responsecode>=100 && responsecode<=199){
console.log(`Status should be Informational & Status code is:`+responsecode);

}else if(responsecode>=200 && responsecode<=299){
console.log(`Status should be successful...! & Status code is:`+responsecode);

}else if(responsecode>=300 && responsecode<=399){
console.log(`Status should be Redirectional ! & Status code is:`+responsecode);

}else if(responsecode>=400 && responsecode<=499){

console.log(`Status should be Client Error ! & Status code is:`+responsecode);
}
else if(responsecode>=500 && responsecode<=599){
console.log(`Server Error For any other code & Status code is: `+responsecode);

}else{
console.log(`Status Unkown Status code Error ! & Status code is: `+responsecode);

}