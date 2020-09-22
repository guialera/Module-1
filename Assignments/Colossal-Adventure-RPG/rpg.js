var readlineSync = require("readline-sync");

var name = readlineSync.question("What is your name adventurer? ")

console.log("Welcome " + name + ". You are about to explore the depths of the unknown and foster new friendships and meet new foes!")

var beginQuestion = readlineSync.question(name + " are you ready to begin? ")

if (beginQuestion === "Yes") {
    console.log("Excellent! Begin walking by pressing W!")
} else if (beginQuestion != "Yes") {
    console.log("You do not have a choice in the matter! Begin walking by pressing W!")
}

var walking = readlineSync.question("Please press W! ")

function walkingAdventure() {
    console.log(start)

    var chances = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var results = Math.floor(Math.random() * chances.length)

    if (results === 1 || results === 2 || results === 3 || results === 4) {
        console.log("Enemy has appeared!")
        enemyAttack()
    } else {
        console.log("Continue walking!")

        var walkingAgain = readlineSync.question("Would you like to continue walking? ")

        if (walkingAgain === "Yes") {
            return walkingAdventure()
        } else {
            console.log("Thank you for playing. See you later!")
        }
    }

    console.log(results)
}

function enemyAttack() {
    var enemyNumber = [0, 1, 2, 3]
    var enemy = ["Wild Dreams", "Deadly Chances", "Unforseen Directions", "Misplaced Trust"]

    var enemyRandom = Math.floor(Math.random() * enemyNumber.length)

    if (enemyRandom === 0){
        console.log(enemy[0] + " has attacked you!")
    } else if (enemyRandom === 1){
        console.log(enemy[1] + " has attacked you!")
    } else if (enemyRandom === 2){
        console.log(enemy[2] + " has attacked you!")
    } else if (enemyRandom === 3){
        console.log(enemy[3] + " has attacked you!")
    }

    for (var i = 0; i < enemy.length; i++) {

    }
}

function attackAction(){
    
}

var start = "This function works!"

if (walking === "W") {
    walkingAdventure()
} else if (walking != "W") {
    console.log("Have you not learned yet? You do not have a choice in the matter! Begin walking!")
    walkingAdventure()
} 
