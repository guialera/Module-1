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

function stringCapitalizeFunction() {
    for (i = 0; i < initialString.length; i++) {
        if (initialString[i] === " ")
            var whiteSpace = initialString.indexOf(" ")
            var newString = initialString.slice(0, whiteSpace)
            var newStringTwo = initialString.slice(whiteSpace+1)
        console.log(initialString[i])
    }
    console.log(newString)
    console.log(newStringTwo)
}

var initialString = "we like coffee!"

stringCapitalizeFunction(initialString)