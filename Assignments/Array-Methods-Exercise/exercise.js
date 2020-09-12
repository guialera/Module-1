var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1
vegetables.pop()
//console.log(vegetables)

//2
fruit.shift()
//console.log(fruit)

//3
var orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex)

//4
fruit.push(orangeIndex)
//console.log(fruit)

//5
var vegetableArrLength = vegetables.length
//console.log(vegetableArrLength)

//6
vegetables.push(vegetableArrLength)
//console.log(vegetables)

//7
var food = fruit.concat(vegetables)
//console.log(food)

//8
var newFood = food.splice(4,2)
//console.log(food)
//console.log(newFood)

//9
food.reverse()
//console.log(food)

//10
var foodArr = food.join(" ")
console.log(foodArr)
