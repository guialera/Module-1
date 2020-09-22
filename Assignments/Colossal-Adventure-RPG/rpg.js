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

        var walkingAgain = readlineSync.question("Would you like to continue walking? Yes or No? ")

        if (walkingAgain === "Yes") {
            return walkingAdventure()
        } else {
            console.log("Thank you for playing. See you later!")
        }
    }

    //console.log(results)
}

function enemyAttack() {
    var enemyNumber = [0, 1, 2, 3]
    var enemy = ["Wild Dreams", "Deadly Chances", "Unforseen Directions", "Misplaced Trust"]

    var enemyRandom = Math.floor(Math.random() * enemyNumber.length)

    if (enemyRandom === 0){
        console.log(enemy[0] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack"){
            console.log("Attack")
            attackAction()
        } else if (attackQuestion === "Flee"){
            console.log("Flee")
            fleeAction()
        }
    } else if (enemyRandom === 1){
        console.log(enemy[1] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack"){
            console.log("Attack")
            attackAction()
        } else if (attackQuestion === "Flee"){
            console.log("Flee")
            fleeAction()
        }
    } else if (enemyRandom === 2){
        console.log(enemy[2] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack"){
            console.log("Attack")
            attackAction()
        } else if (attackQuestion === "Flee"){
            console.log("Flee")
            fleeAction()
        }
    } else if (enemyRandom === 3){
        console.log(enemy[3] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack"){
            console.log("Attack")
            attackAction()
        } else if (attackQuestion === "Flee"){
            console.log("Flee")
            fleeAction()
        }
    }

    for (var i = 0; i < enemy.length; i++) {

    }
}

function attackAction(){
    var wildDreams = [100]
    var wildDreamsDamages =[]

    var deadlyChances = [70]
    var deadlyChancesDamages = []

    var unforseenDirections = [50]
    var unforseenDirectionsDamages = []

    var misplacedTrust = [40]
    var misplacedTrusDamages = []

    var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

    if (damageAmountRandom === 0){
        console.log(damageAmount[0])
    } else if (damageAmountRandom === 1){
        console.log(damageAmount[1])
    } else if (damageAmountRandom === 2){
        console.log(damageAmount[2])
    } else if (damageAmountRandom === 3){
        console.log(damageAmount[3])
    } else if (damageAmountRandom === 4){
        console.log(damageAmount[4])
    } else if (damageAmountRandom === 5){
        console.log(damageAmount[5])
    } else if (damageAmountRandom === 6){
        console.log(damageAmount[6])
    } else if (damageAmountRandom === 7){
        console.log(damageAmount[7])
    } else if (damageAmountRandom === 8){
        console.log(damageAmount[8])
    } else if (damageAmountRandom === 9){
        console.log(damageAmount[9])
    }
}

function fleeAction(){
    var fleeAmount = ["Flee", "Cannot Flee"]
    var fleeAmountRandom = Math.floor(Math.random() * fleeAmount.length)

    if (fleeAmountRandom === 0){
        console.log("You escaped")
        walkingAdventure()
    } else if (fleeAmountRandom === 1){
        console.log("You cannot escape! You must attack!")
        var fleeOrAttack = readlineSync.question("Would you like to try and flee again or just attack? Flee or Attack? ")
        if (fleeOrAttack === "Flee"){
            fleeAction()
        } else if (fleeOrAttack === "Attack"){
            attackAction()
        }
    }
}

var start = "This function works!"

if (walking === "W") {
    walkingAdventure()
} else if (walking != "W") {
    console.log("Have you not learned yet? You do not have a choice in the matter! Begin walking!")
    walkingAdventure()
} 
