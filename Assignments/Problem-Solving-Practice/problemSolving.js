//1

var numberArr = [70, 50, 1000, 4500, 60, 75]

/*function largestNumber() {

    var largerArr = []

    var equalArr = []

    var smallerArr = []

    for (var i = 1; i < numberArr.length; i++) {
        if (numberArr[0] > numberArr[i]) {
            largerArr.push(numberArr[0])
        } else if (numberArr[0] === numberArr[i]) {
            equalArr.push(numberArr[0])
        } else if (numberArr[0] < numberArr[i]) {
            smallerArr.push(numberArr[i])
        }
    }
    console.log(largerArr)
    console.log(equalArr)
    console.log(smallerArr)
} 

largestNumber(numberArr) */

function largestNumber(){
    numberArr.sort(function(a, b){return b - a})
    console.log(numberArr[0])
}

largestNumber(numberArr)

//2

var arr = ["!ABC", "@ABC", "ABC", "CCC", "#F", "*BBB", "@@@", "Ya!", "Bye!", "What?"]

function lettersCharacters() {

    var lettersCharacterNotPresentArr = []

    var lettersCharacterPresentArr = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("!") != -1) {
            lettersCharacterPresentArr.push(arr[i])
        } else {
            lettersCharacterNotPresentArr.push(arr[i])
        }
    }

    console.log(lettersCharacterPresentArr)
}

lettersCharacters(arr)

//3

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        console.log("true")
    } else if (num1 % num2 != 0) {
        console.log("false")
    }
}

isDivisible(10, 2)
isDivisible(100, 3)
isDivisible(1000, 20) 