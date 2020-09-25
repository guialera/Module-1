var readlineSync = require("readline-sync");

var num1 = Number(readlineSync.questionInt("Please enter your first number! "));
console.log(num1);

var num2 = Number(readlineSync.question("Please enter your second number! "));
console.log(num2);

var variable = readlineSync.question("Please enter the operation to perform: add, sub, mul, or div! ");
console.log(variable);

if (variable === "add") {
    console.log("The result is", add(num1, num2)); 
} else if(variable === "sub" ) {
    console.log("The result is", sub(num1, num2));
} else if (variable === "mul") {
    console.log("The result is", mul(num1, num2));
} else if (variable == "div") {
    console.log("The result is", div(num1, num2));
}

function add(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 - num2
}

function mul(num1, num2){
    return num1 * num2
}

function div(num1, num2){
    return num1 / num2
}