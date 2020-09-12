//Preliminaries 

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//1

for (var i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
}

//2

for (var i = numbersArray.length - 1; i >= 0; i--) {
    console.log(numbersArray[i])
}

//3

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

//Bronze Medal

var numbersArrayTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//1

for (var i = 0; i < 1; i++) {
    console.log(numbersArrayTwo)
}

//2

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log([i])
    }
}

//3 Not Complete

var fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i = 0; i < fruitTwo.length; i++) {
    if (i % 2 === 0) {
        console.log(fruitTwo[i])
    }
}

//Silver Medal

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

//1

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

//2 Not Complete