var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var combinedArr = []

for (i = 0; i < people.length; i++) {
    combinedArr.push(people[i])
    for (j = 0; j < alphabet.length; j++) {
        combinedArr.push(alphabet[j])
    }
}

console.log(combinedArr) 