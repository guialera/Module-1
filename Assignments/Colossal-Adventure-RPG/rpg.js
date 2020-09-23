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

    if (enemyRandom === 0) {
        console.log(enemy[0] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack") {
            console.log("Attack")
            wildDreamsAttackAction()
        } else if (attackQuestion === "Flee") {
            console.log("Flee")
            wildDreamsFleeAction()
        }
    } else if (enemyRandom === 1) {
        console.log(enemy[1] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack") {
            console.log("Attack")
            deadlyChancesAttackAction()
        } else if (attackQuestion === "Flee") {
            console.log("Flee")
            deadlyChancesFleeAction()
        }
    } else if (enemyRandom === 2) {
        console.log(enemy[2] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack") {
            console.log("Attack")
            unforseenDirectionsAttackAction()
        } else if (attackQuestion === "Flee") {
            console.log("Flee")
            unforseenDirectionsFleeAction()
        }
    } else if (enemyRandom === 3) {
        console.log(enemy[3] + " has attacked you!")
        var attackQuestion = readlineSync.question("Would you like to flee or attack? Attack or Flee? ")
        if (attackQuestion === "Attack") {
            console.log("Attack")
            misplacedTrustAttackAction()
        } else if (attackQuestion === "Flee") {
            console.log("Flee")
            misplacedTrustFleeAction()
        }
    }
}

var wildDreamsDamages = [100]
var playerHP = [80]
var playerItems = []

function wildDreamsAttackAction() {
    console.log("Wild Dreams HP")

    var wdAttackQuestion = readlineSync.question("Would like you to attack? ")

    if (wdAttackQuestion === "Yes") {
        wdAttack()
        console.log(wildDreamsDamages)
        if (wildDreamsDamages[0] <= 0) {
            console.log(name + " you defeated Wild Dreams! You may continue on your adventure.")
            wildDreamsDamages.shift()
            wildDreamsDamages.unshift(100)
            console.log(wildDreamsDamages)
            playerHP.unshift(playerHP[0] + 5)
            console.log(name + " you have received 5 HP! Also you have received potion!")
            playerItems.push("Potion")
            return walkingAdventure()
        } else if (wildDreamsDamages[0] > 0 && playerHP[0] > 0) {
            playerAttack()
            console.log(playerHP)
            if (playerHP[0] <= 0) {
                console.log(name + " sorry you have been defeated! Please begin your adeventure again.")
            } else wildDreamsAttackAction()
        }
    }

    /*if (playerHP[0] <= 0) {
        console.log(name + " sorry you have been defeated! Please begin your adevnture again.")
        return beginQuestion
    } else wdAttackQuestion

    if (wildDreamsDamages[0] > 0 && playerHP[0] > 0) {
        attackMode()
    } else if (wildDreamsDamages[0] <= 0) {
        console.log(name + " you defeated Wild Dreams! You may continue on your adventure.")
        return walkingAdventure()
    } else if (playerHP[0] <= 0) {
        console.log(name + " sorry you have been defeated! Please begin you adevnture again.")
        return beginQuestion
    }*/

    function wdAttack() {
        var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

        if (damageAmountRandom === 0) {
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[0])
            console.log("You inflicted " + damageAmount[0] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 1) {
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[1])
            console.log("You inflicted " + damageAmount[1] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 2) {
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[2])
            console.log("You inflicted " + damageAmount[2] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 3) {
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[3])
            console.log("You inflicted " + damageAmount[3] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 4) {
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[4])
            console.log("You inflicted " + damageAmount[4] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 5) {
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[5])
            console.log("You inflicted " + damageAmount[5] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 6) {
            //console.log(damageAmount[6])
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[6])
            console.log("You inflicted " + damageAmount[6] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 7) {
            //console.log(damageAmount[7])
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[7])
            console.log("You inflicted " + damageAmount[7] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 8) {
            //console.log(damageAmount[8])
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[8])
            console.log("You inflicted " + damageAmount[8] + " HP.")
            //console.log(wildDreamsDamages)
        } else if (damageAmountRandom === 9) {
            //console.log(damageAmount[9])
            wildDreamsDamages.unshift(wildDreamsDamages[0] - damageAmount[9])
            console.log("You inflicted " + damageAmount[9] + " HP.")
            //console.log(wildDreamsDamages)
        }
    }
    function playerAttack() {
        var damageValue = [5, 10, 15, 20, 25, 30]
        var damageValueRandom = Math.floor(Math.random() * damageValue.length)

        if (damageValueRandom === 0) {
            console.log(damageValue[0])
            playerHP.unshift(playerHP[0] - damageValue[0])
            console.log("You have lost " + damageValue[0] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 1) {
            console.log(damageValue[1])
            playerHP.unshift(playerHP[0] - damageValue[1])
            console.log("You have lost " + damageValue[1] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 2) {
            console.log(damageValue[2])
            playerHP.unshift(playerHP[0] - damageValue[2])
            console.log("You have lost " + damageValue[2] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 3) {
            console.log(damageValue[3])
            playerHP.unshift(playerHP[0] - damageValue[3])
            console.log("You have lost " + damageValue[3] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 4) {
            console.log(damageValue[4])
            playerHP.unshift(playerHP[0] - damageValue[4])
            console.log("You have lost " + damageValue[4] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 5) {
            console.log(damageValue[5])
            playerHP.unshift(playerHP[0] - damageValue[5])
            console.log("You have lost " + damageValue[5] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 6) {
            console.log(damageValue[6])
            playerHP.unshift(playerHP[0] - damageValue[6])
            console.log("You have lost " + damageValue[6] + " HP.")
            //console.log(playerHP)
        }
    }
}

var deadlyChancesDamages = [70]

function deadlyChancesAttackAction() {
    console.log("Deadly Chances HP")

    var dcAttackQuestion = readlineSync.question("Would like you to attack? ")

    if (dcAttackQuestion === "Yes") {
        dcAttack()
        console.log(deadlyChancesDamages)
        if (deadlyChancesDamages[0] <= 0) {
            console.log(name + " you defeated Deadly Chances! You may continue on your adventure.")
            deadlyChancesDamages.shift()
            deadlyChancesDamages.unshift(100)
            console.log(deadlyChancesDamages)
            playerHP.unshift(playerHP[0] + 5)
            console.log(name + " you have received 5 HP! Also you have received a magic stone!")
            playerItems.push("Magic Stone")
            return walkingAdventure()
        } else if (deadlyChancesDamages[0] > 0 && playerHP[0] > 0) {
            playerAttack()
            console.log(playerHP)
            if (playerHP[0] <= 0) {
                console.log(name + " sorry you have been defeated! Please begin your adeventure again.")
            } else deadlyChancesAttackAction()
        }
    }

    function dcAttack() {

        var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

        if (damageAmountRandom === 0) {
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[0])
            console.log("You inflicted " + damageAmount[0] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 1) {
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[1])
            console.log("You inflicted " + damageAmount[1] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 2) {
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[2])
            console.log("You inflicted " + damageAmount[2] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 3) {
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[3])
            console.log("You inflicted " + damageAmount[3] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 4) {
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[4])
            console.log("You inflicted " + damageAmount[4] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 5) {
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[5])
            console.log("You inflicted " + damageAmount[5] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 6) {
            //console.log(damageAmount[6])
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[6])
            console.log("You inflicted " + damageAmount[6] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 7) {
            //console.log(damageAmount[7])
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[7])
            console.log("You inflicted " + damageAmount[7] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 8) {
            //console.log(damageAmount[8])
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[8])
            console.log("You inflicted " + damageAmount[8] + " HP.")
            //console.log(deadlyChancesDamages)
        } else if (damageAmountRandom === 9) {
            //console.log(damageAmount[9])
            deadlyChancesDamages.unshift(deadlyChancesDamages[0] - damageAmount[9])
            console.log("You inflicted " + damageAmount[9] + " HP.")
            //console.log(deadlyChancesDamages)
        }
        /*
        if (damageAmountRandom === 0) {
            console.log(damageAmount[0])
        } else if (damageAmountRandom === 1) {
            console.log(damageAmount[1])
        } else if (damageAmountRandom === 2) {
            console.log(damageAmount[2])
        } else if (damageAmountRandom === 3) {
            console.log(damageAmount[3])
        } else if (damageAmountRandom === 4) {
            console.log(damageAmount[4])
        } else if (damageAmountRandom === 5) {
            console.log(damageAmount[5])
        } else if (damageAmountRandom === 6) {
            console.log(damageAmount[6])
        } else if (damageAmountRandom === 7) {
            console.log(damageAmount[7])
        } else if (damageAmountRandom === 8) {
            console.log(damageAmount[8])
        } else if (damageAmountRandom === 9) {
            console.log(damageAmount[9])
        }*/
    }

    function playerAttack() {
        var damageValue = [5, 10, 15, 20, 25, 30]
        var damageValueRandom = Math.floor(Math.random() * damageValue.length)

        if (damageValueRandom === 0) {
            console.log(damageValue[0])
            playerHP.unshift(playerHP[0] - damageValue[0])
            console.log("You have lost " + damageValue[0] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 1) {
            console.log(damageValue[1])
            playerHP.unshift(playerHP[0] - damageValue[1])
            console.log("You have lost " + damageValue[1] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 2) {
            console.log(damageValue[2])
            playerHP.unshift(playerHP[0] - damageValue[2])
            console.log("You have lost " + damageValue[2] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 3) {
            console.log(damageValue[3])
            playerHP.unshift(playerHP[0] - damageValue[3])
            console.log("You have lost " + damageValue[3] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 4) {
            console.log(damageValue[4])
            playerHP.unshift(playerHP[0] - damageValue[4])
            console.log("You have lost " + damageValue[4] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 5) {
            console.log(damageValue[5])
            playerHP.unshift(playerHP[0] - damageValue[5])
            console.log("You have lost " + damageValue[5] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 6) {
            console.log(damageValue[6])
            playerHP.unshift(playerHP[0] - damageValue[6])
            console.log("You have lost " + damageValue[6] + " HP.")
            //console.log(playerHP)
        }
    }
}

var unforseenDirectionsDamages = [50]

function unforseenDirectionsAttackAction() {
    console.log("Unforseen Directions HP")

    var udAttackQuestion = readlineSync.question("Would like you to attack? ")

    if (udAttackQuestion === "Yes") {
        dcAttack()
        console.log(unforseenDirectionsDamages)
        if (unforseenDirectionsDamages[0] <= 0) {
            console.log(name + " you defeated Unforseen Directions! You may continue on your adventure.")
            unforseenDirectionsDamages.shift()
            unforseenDirectionsDamages.unshift(100)
            console.log(unforseenDirectionsDamages)
            playerHP.unshift(playerHP[0] + 5)
            console.log(name + " you have received 5 HP! Also you have received a hammer!")
            playerItems.push("Hammer")
            return walkingAdventure()
        } else if (unforseenDirectionsDamages[0] > 0 && playerHP[0] > 0) {
            playerAttack()
            console.log(playerHP)
            if (playerHP[0] <= 0) {
                console.log(name + " sorry you have been defeated! Please begin your adeventure again.")
            } else unforseenDirectionsAttackAction()
        }
    }

    function dcAttack() {

        var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

        if (damageAmountRandom === 0) {
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[0])
            console.log("You inflicted " + damageAmount[0] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 1) {
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[1])
            console.log("You inflicted " + damageAmount[1] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 2) {
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[2])
            console.log("You inflicted " + damageAmount[2] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 3) {
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[3])
            console.log("You inflicted " + damageAmount[3] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 4) {
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[4])
            console.log("You inflicted " + damageAmount[4] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 5) {
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[5])
            console.log("You inflicted " + damageAmount[5] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 6) {
            //console.log(damageAmount[6])
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[6])
            console.log("You inflicted " + damageAmount[6] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 7) {
            //console.log(damageAmount[7])
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[7])
            console.log("You inflicted " + damageAmount[7] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 8) {
            //console.log(damageAmount[8])
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamagess[0] - damageAmount[8])
            console.log("You inflicted " + damageAmount[8] + " HP.")
            //console.log(unforseenDirectionsDamages)
        } else if (damageAmountRandom === 9) {
            //console.log(damageAmount[9])
            unforseenDirectionsDamages.unshift(unforseenDirectionsDamages[0] - damageAmount[9])
            console.log("You inflicted " + damageAmount[9] + " HP.")
            //console.log(unforseenDirectionsDamages)
        }
    }

    /*function udAttack() {

        var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

        if (damageAmountRandom === 0) {
            console.log(damageAmount[0])
        } else if (damageAmountRandom === 1) {
            console.log(damageAmount[1])
        } else if (damageAmountRandom === 2) {
            console.log(damageAmount[2])
        } else if (damageAmountRandom === 3) {
            console.log(damageAmount[3])
        } else if (damageAmountRandom === 4) {
            console.log(damageAmount[4])
        } else if (damageAmountRandom === 5) {
            console.log(damageAmount[5])
        } else if (damageAmountRandom === 6) {
            console.log(damageAmount[6])
        } else if (damageAmountRandom === 7) {
            console.log(damageAmount[7])
        } else if (damageAmountRandom === 8) {
            console.log(damageAmount[8])
        } else if (damageAmountRandom === 9) {
            console.log(damageAmount[9])
        }
    }*/

    function playerAttack() {
        var damageValue = [5, 10, 15, 20, 25, 30]
        var damageValueRandom = Math.floor(Math.random() * damageValue.length)

        if (damageValueRandom === 0) {
            console.log(damageValue[0])
            playerHP.unshift(playerHP[0] - damageValue[0])
            console.log("You have lost " + damageValue[0] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 1) {
            console.log(damageValue[1])
            playerHP.unshift(playerHP[0] - damageValue[1])
            console.log("You have lost " + damageValue[1] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 2) {
            console.log(damageValue[2])
            playerHP.unshift(playerHP[0] - damageValue[2])
            console.log("You have lost " + damageValue[2] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 3) {
            console.log(damageValue[3])
            playerHP.unshift(playerHP[0] - damageValue[3])
            console.log("You have lost " + damageValue[3] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 4) {
            console.log(damageValue[4])
            playerHP.unshift(playerHP[0] - damageValue[4])
            console.log("You have lost " + damageValue[4] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 5) {
            console.log(damageValue[5])
            playerHP.unshift(playerHP[0] - damageValue[5])
            console.log("You have lost " + damageValue[5] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 6) {
            console.log(damageValue[6])
            playerHP.unshift(playerHP[0] - damageValue[6])
            console.log("You have lost " + damageValue[6] + " HP.")
            //console.log(playerHP)
        }
    }
}

var misplacedTrusDamages = [40]

function misplacedTrustAttackAction() {
    console.log("Misplaced Trust HP")

    var mtAttackQuestion = readlineSync.question("Would like you to attack? ")

    if (mtAttackQuestion === "Yes") {
        mtAttack()
        console.log(misplacedTrusDamages)
        if (misplacedTrusDamages[0] <= 0) {
            console.log(name + " you defeated Misplaced Trust! You may continue on your adventure.")
            misplacedTrusDamages.shift()
            misplacedTrusDamages.unshift(100)
            console.log(misplacedTrusDamages)
            playerHP.unshift(playerHP[0] + 5)
            console.log(name + " you have received 5 HP! Also you have received a ruby!")
            playerItems.push("Ruby")
            return walkingAdventure()
        } else if (misplacedTrusDamages[0] > 0 && playerHP[0] > 0) {
            playerAttack()
            console.log(playerHP)
            if (playerHP[0] <= 0) {
                console.log(name + " sorry you have been defeated! Please begin your adeventure again.")
            } else misplacedTrustAttackAction()
        }
    }

    function mtAttack() {

        var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

        if (damageAmountRandom === 0) {
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[0])
            console.log("You inflicted " + damageAmount[0] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 1) {
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[1])
            console.log("You inflicted " + damageAmount[1] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 2) {
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[2])
            console.log("You inflicted " + damageAmount[2] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 3) {
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[3])
            console.log("You inflicted " + damageAmount[3] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 4) {
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[4])
            console.log("You inflicted " + damageAmount[4] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 5) {
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[5])
            console.log("You inflicted " + damageAmount[5] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 6) {
            //console.log(damageAmount[6])
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[6])
            console.log("You inflicted " + damageAmount[6] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 7) {
            //console.log(damageAmount[7])
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[7])
            console.log("You inflicted " + damageAmount[7] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 8) {
            //console.log(damageAmount[8])
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[8])
            console.log("You inflicted " + damageAmount[8] + " HP.")
            //console.log(misplacedTrusDamages)
        } else if (damageAmountRandom === 9) {
            //console.log(damageAmount[9])
            misplacedTrusDamages.unshift(misplacedTrusDamages[0] - damageAmount[9])
            console.log("You inflicted " + damageAmount[9] + " HP.")
            //console.log(misplacedTrusDamages)
        }
    }

    /*function mtAttack() {

        var damageAmount = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        var damageAmountRandom = Math.floor(Math.random() * damageAmount.length)

        if (damageAmountRandom === 0) {
            console.log(damageAmount[0])
        } else if (damageAmountRandom === 1) {
            console.log(damageAmount[1])
        } else if (damageAmountRandom === 2) {
            console.log(damageAmount[2])
        } else if (damageAmountRandom === 3) {
            console.log(damageAmount[3])
        } else if (damageAmountRandom === 4) {
            console.log(damageAmount[4])
        } else if (damageAmountRandom === 5) {
            console.log(damageAmount[5])
        } else if (damageAmountRandom === 6) {
            console.log(damageAmount[6])
        } else if (damageAmountRandom === 7) {
            console.log(damageAmount[7])
        } else if (damageAmountRandom === 8) {
            console.log(damageAmount[8])
        } else if (damageAmountRandom === 9) {
            console.log(damageAmount[9])
        }
    }*/

    function playerAttack() {
        var damageValue = [5, 10, 15, 20, 25, 30]
        var damageValueRandom = Math.floor(Math.random() * damageValue.length)

        if (damageValueRandom === 0) {
            console.log(damageValue[0])
            playerHP.unshift(playerHP[0] - damageValue[0])
            console.log("You have lost " + damageValue[0] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 1) {
            console.log(damageValue[1])
            playerHP.unshift(playerHP[0] - damageValue[1])
            console.log("You have lost " + damageValue[1] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 2) {
            console.log(damageValue[2])
            playerHP.unshift(playerHP[0] - damageValue[2])
            console.log("You have lost " + damageValue[2] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 3) {
            console.log(damageValue[3])
            playerHP.unshift(playerHP[0] - damageValue[3])
            console.log("You have lost " + damageValue[3] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 4) {
            console.log(damageValue[4])
            playerHP.unshift(playerHP[0] - damageValue[4])
            console.log("You have lost " + damageValue[4] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 5) {
            console.log(damageValue[5])
            playerHP.unshift(playerHP[0] - damageValue[5])
            console.log("You have lost " + damageValue[5] + " HP.")
            //console.log(playerHP)
        } else if (damageValueRandom === 6) {
            console.log(damageValue[6])
            playerHP.unshift(playerHP[0] - damageValue[6])
            console.log("You have lost " + damageValue[6] + " HP.")
            //console.log(playerHP)
        }
    }
}

function wildDreamsFleeAction() {
    console.log("Wild Dreams Flee")

    var fleeAmount = ["Flee", "Cannot Flee"]
    var fleeAmountRandom = Math.floor(Math.random() * fleeAmount.length)

    if (fleeAmountRandom === 0) {
        console.log("You escaped")
        walkingAdventure()
    } else if (fleeAmountRandom === 1) {
        console.log("You cannot escape! You must attack!")
        var fleeOrAttack = readlineSync.question("Would you like to try and flee again or just attack? Flee or Attack? ")
        if (fleeOrAttack === "Flee") {
            wildDreamsFleeAction()
        } else if (fleeOrAttack === "Attack") {
            wildDreamsAttackAction()
        }
    }
}

function deadlyChancesFleeAction() {
    console.log("Deadly Chances Flee")

    var fleeAmount = ["Flee", "Cannot Flee"]
    var fleeAmountRandom = Math.floor(Math.random() * fleeAmount.length)

    if (fleeAmountRandom === 0) {
        console.log("You escaped")
        walkingAdventure()
    } else if (fleeAmountRandom === 1) {
        console.log("You cannot escape! You must attack!")
        var fleeOrAttack = readlineSync.question("Would you like to try and flee again or just attack? Flee or Attack? ")
        if (fleeOrAttack === "Flee") {
            deadlyChancesFleeAction()
        } else if (fleeOrAttack === "Attack") {
            deadlyChancesAttackAction()
        }
    }
}

function unforseenDirectionsFleeAction() {
    console.log("Unforseen Directions Flee")

    var fleeAmount = ["Flee", "Cannot Flee"]
    var fleeAmountRandom = Math.floor(Math.random() * fleeAmount.length)

    if (fleeAmountRandom === 0) {
        console.log("You escaped")
        walkingAdventure()
    } else if (fleeAmountRandom === 1) {
        console.log("You cannot escape! You must attack!")
        var fleeOrAttack = readlineSync.question("Would you like to try and flee again or just attack? Flee or Attack? ")
        if (fleeOrAttack === "Flee") {
            unforseenDirectionsFleeAction()
        } else if (fleeOrAttack === "Attack") {
            unforseenDirectionsAttackAction()
        }
    }
}

function misplacedTrustFleeAction() {
    console.log("Misplaced Trust Flee")

    var fleeAmount = ["Flee", "Cannot Flee"]
    var fleeAmountRandom = Math.floor(Math.random() * fleeAmount.length)

    if (fleeAmountRandom === 0) {
        console.log("You escaped")
        walkingAdventure()
    } else if (fleeAmountRandom === 1) {
        console.log("You cannot escape! You must attack!")
        var fleeOrAttack = readlineSync.question("Would you like to try and flee again or just attack? Flee or Attack? ")
        if (fleeOrAttack === "Flee") {
            misplacedTrustFleeAction()
        } else if (fleeOrAttack === "Attack") {
            misplacedTrustAttackAction()
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
