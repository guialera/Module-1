var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    console.log("computer")
  }
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    console.log("not old enough")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log("old enough")
  }
}

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
  }
}

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Mad Max.")
  }
}
