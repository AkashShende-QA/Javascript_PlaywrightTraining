let month=["jan","feb","Mar","Apr","May","june"];

let element= "Apr";
let result_array=[];
let count=0;

for(let i=0;i<month.length;i++)
{
   if(month[i]=== element){
   result_array.push(i);
   count++;
 }

}
console.log(`All index for April are :`, +result_array);
console.log(`Duplicate Element for April count :`, +count);