for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log([i])
    }
}

//Optional Coding Challenge

var fizzBuzzArr = []
var fizzArr = []
var buzzArr = []
var numberArr = []

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArr.push(i)
    } else if (i % 3 === 0) {
        fizzArr.push(i)
    } else if (i % 5 === 0) {
        buzzArr.push(i)
    } else {
        numberArr.push(i)
    }
}

var fizzBuzzCountArr = []

var fizzBuzzArrCount = fizzBuzzArr.length
fizzBuzzCountArr.push("fizzbuzz: " + fizzBuzzArrCount)

var fizzArrCount = fizzArr.length
fizzBuzzCountArr.push("fizz: " + fizzArrCount)

var buzzArrCount = buzzArr.length
fizzBuzzCountArr.push("buzz: " + buzzArrCount)

var count = {
    fizzbuzz: [],
    fizz: [],
    buzz: []
}

count.fizzbuzz.push(fizzBuzzArrCount)
count.fizz.push(fizzArrCount)
count.buzz.push(buzzArrCount)

console.log(count)

console.log(fizzBuzzCountArr)

//var numberArrCount = numberArr.length
//fizzBuzzCountArr.push(numberArrCount)

//console.log("fizzbuzz: " + fizzBuzzCountArr[0] + ", fizz: " + fizzBuzzCountArr[1] + ", buzz: " + fizzBuzzCountArr[2])