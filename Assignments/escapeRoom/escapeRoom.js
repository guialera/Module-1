const readline = require("readline-sync");

var name = readline.question("What is your name? ");
console.log(name);

var start = readline.question("Are you ready to escape?" )

if (start === "yes") {
    console.log("You must find the key to open the door. Stick your hand inside an object and hopefully there will be a key. If you sitck your hand in a hole, you will die!")
} else if (start === "no"){
    console.log("Then you will be stuck here forever!")
}

var choose = readline.question("Stick your hand in an object from A to I..hopefully there will be a key!" )

if (choose === "A" || choose === "B" || choose === "C" || choose === "D" || choose === "F" || choose === "G" || choose === "H" || choose === "I") {
    console.log("Oh no you have stuck your hand in a hole. You are dead!");
} else if (choose === "E") {
    console.log("Yes you have found a key! You can now open the door and escape!");
}
