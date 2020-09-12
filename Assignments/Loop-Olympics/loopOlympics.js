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

//3

var fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var newFruitTwo = []

for (var i = 0; i < 6; i++) {
    if (i % 2 === 0) {
        newFruitTwo.push(fruitTwo[i])
    }
}

console.log(newFruitTwo)

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

//2

var peopleArrayNames = []

for (var i = 0; i < 4; i++) {
    peopleArrayNames.push(peopleArray[i].name)
}

console.log(peopleArrayNames)

var peopleArrayOccupations = []

for (var i = 0; i < 4; i++) {
    peopleArrayOccupations.push(peopleArray[i].occupation)
}

console.log(peopleArrayOccupations)

//3

var everyOtherPeopleNames = []

for (var i = 0; i < 4; i++) {
    if (i % 2 === 0) {
        everyOtherPeopleNames.push(peopleArray[i].name)
    }
}

console.log(everyOtherPeopleNames)

var everyOtherPeopleOccupations = []

for (var i = 0; i < 4; i++) {
    if (i % 2 != 0) {
        everyOtherPeopleOccupations.push(peopleArray[i].occupation)
    }
}

console.log(everyOtherPeopleOccupations)

//Gold Medal

//1

var nestedLoopsOne = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]

]

for (var i = 0; i < nestedLoopsOne.length; i++) {
    console.log(nestedLoopsOne[i])
}

//2

var nestedLoopsTwo = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]

]

for (var i = 0; i < nestedLoopsTwo.length; i++) {
    console.log(nestedLoopsTwo[i])
}

//3

var nestedLoopsThree = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]

]

for (var i = 0; i < nestedLoopsThree.length; i++) {
    console.log(nestedLoopsThree[i])
}

//4
