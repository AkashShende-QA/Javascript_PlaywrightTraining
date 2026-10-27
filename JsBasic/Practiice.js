console.log(typeof 100);

console.log(typeof "Hello");
let x;
console.log(typeof x);

console.log("10" + 5);
console.log(null == undefined);
let a = 5;
console.log(++a);

let i=1;

while(i<=3)
{
console.log(i);
i++;
}

for(let i=1;i<=5;i++)
{
if(i==3)
break;

console.log(i);
}

console.log("5" * 2);
console.log("Hello" * 2);

let num = 0;

if(num)
{
console.log("True");
}
else
{
console.log("False");
}

console.log(NaN === NaN);
console.log(1 < 2 < 3);
console.log(typeof NaN);
console.log(Boolean("false"));

console.log("5" + + "5");
console.log(5 + "5" - 5);


let x1 = 10;

function test()
{
console.log(x1);
var x1 = 20;
}
test();

if(x=10)
{
console.log("Hello");
}