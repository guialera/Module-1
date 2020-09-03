
var square = document.getElementById("square")
square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red";
})

var square = document.getElementById("square")
square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow";
})

var square = document.getElementById("square")
square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue";
})

var square = document.getElementById("square")
square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green";
})

var square = document.getElementById("square")
square.addEventListener("scroll", function() {
    square.style.backgroundColor = "orange";
})

var square = document.getElementById("square")
document.addEventListener("keypress", function(event) {
    console.log(event.which)

    if (event.keyCode === 114 || event.keyCode === 82) {
        square.style.backgroundColor = "red";
    }

    if (event.keyCode === 98 || event.keyCode === 66) {
        square.style.backgroundColor = "blue";
    }

    if (event.keyCode === 103 || event.keyCode === 71) {
        square.style.backgroundColor = "green";
    }

    if (event.keyCode === 121 || event.keyCode === 89) {
        square.style.backgroundColor = "yellow";
    }

    if (event.keyCode === 111 || event.keyCode === 79) {
        square.style.backgroundColor = "orange";
    }
})
