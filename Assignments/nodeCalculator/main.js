var readlineSync = require("readline-sync");

var num1 = readlineSync.question("Please enter your first number! ");
console.log(num1);

var num2 = readlineSync.question("Please enter your second number! ");
console.log(num2);

var variable = readlineSync.question("Please enter the operation to perform: add, sub, mul, or div! ");
console.log(variable);

var x = num1;
var y = num2;

if (variable === "add") {
    console.log("The result is",(Number(x) + Number(y))); 
} else if(variable === "sub" ) {
    console.log("The result is",(Number(y) - Number(x)));
} else if (variable === "mul") {
    console.log("The result is",(Number(x) * Number (y)));
} else if (variable == "div") {
    console.log("The result is",(Number (x) / Number (y)));
}
