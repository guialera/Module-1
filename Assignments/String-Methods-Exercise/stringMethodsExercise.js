var string = "peanut butter"

var stringUpperCase = string.toUpperCase()

var stringLowerCaseAgain = stringUpperCase.toLowerCase()

var stringLowerUpperCase = stringUpperCase + stringLowerCaseAgain

console.log(stringLowerUpperCase)

var stringLength = string.length

var stringLengthNumber = stringLength / 2

console.log(Math.floor(stringLengthNumber))

var stringHalf = string.slice(0, stringLengthNumber)

console.log(stringHalf)

var stringLastHalf = string.slice(stringLengthNumber)

var stringCapitalLowerCase = stringHalf.toUpperCase() + stringLastHalf.toLowerCase()

console.log(stringCapitalLowerCase)

var inputString = "peanut butter"

function stringFunction() {
    var string = inputString

    var stringUpperCase = string.toUpperCase()

    var stringLowerCaseAgain = stringUpperCase.toLowerCase()

    var stringLowerUpperCase = stringUpperCase + stringLowerCaseAgain

    console.log(stringLowerUpperCase)

    var stringLength = string.length

    var stringLengthNumber = stringLength / 2

    console.log(Math.floor(stringLengthNumber))

    var stringHalf = string.slice(0, stringLengthNumber)

    console.log(stringHalf)

    var stringLastHalf = string.slice(stringLengthNumber)

    var stringCapitalLowerCase = stringHalf.toUpperCase() + stringLastHalf.toLowerCase()

    console.log(stringCapitalLowerCase)
}

stringFunction(inputString)

//Optional Code Challenge

function stringCapitalFunction() {
    var capitalStringArr = []
    var initialStringSplit = initialString.split(" ")
    for (var i = 0; i < initialStringSplit.length; i++) {
        capitalStringArr.push(initialStringSplit[i].charAt(0).toUpperCase() + initialStringSplit[i].slice(1))
    }
    var capitalString = capitalStringArr.join(" ")
    console.log(capitalString)
}

var initialString = "we like coffee alot!"

stringCapitalFunction(initialString) 