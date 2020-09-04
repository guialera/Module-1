//Qualifier//

var header = document.getElementById("header")

header.textContent = "JavaScript Made This!!"
header.style.display = "flex"
header.style.flexDirection = "column"
header.style.alignItems = "center"
header.style.fontSize = "40px"
header.style.fontWeight = "bold"
header.style.color = "black"

var newDiv = document.createElement("div")
header.append(newDiv)
newDiv.style.display = "flex"
newDiv.style.flexDirection = "row"
newDiv.style.gap = "5px"

var newP = document.createElement("p")
newP.textContent = "Alex"
newDiv.append(newP)
newP.style.fontSize = "20px"
newP.style.color = "peachpuff"

var additionalP = document.createElement("p")
additionalP.textContent = "wrote the JavaScript"
newDiv.append(additionalP)
additionalP.style.fontSize = "20px"
additionalP.style.color = "black"

//Bronze//

var messageLeft = document.getElementsByClassName("message left")
messageLeft[0].textContent = "Hello!"
messageLeft[1].textContent = "What was Wenger thinking sending Walcott in that early?"

var messageRight = document.getElementsByClassName("message right")
messageRight[0].textContent = "Did you see that ludicrous last night!?"
messageRight[1].textContent = "The thing about Arsenal is, they always try and walk it in." 

var clearPressed = document.getElementById("clear-button") 
clearPressed.addEventListener("click", function(){
    console.log("Clear button is pressed")

    var messageLeft = document.getElementsByClassName("message left")
    messageLeft[0].remove()

    var messageRight = document.getElementsByClassName("message right")
    messageRight[0].remove()

    var messageLeft = document.getElementsByClassName("message left")
    messageLeft[0].remove()

    var messageRight = document.getElementsByClassName("message right")
    messageRight[0].remove()
})

//Silver//

var mainColor = document.getElementById("main")

var colorStyle = document.getElementById("theme-drop-down")
    colorStyle.addEventListener("change", function(){
        console.log(this.value)
    
    if (this.value === "theme-one"){
        console.log("blue/brown selected")

        document.body.style.backgroundColor = "brown"
        mainColor.style.backgroundColor = "blue"
    }

    if (this.value === "theme-two"){
        console.log("red/black slected")

        document.body.style.backgroundColor = "red"
        mainColor.style.backgroundColor = "black"
    }
})

//Gold//

var newMessageButton = document.getElementsByTagName("button")

newMessageButton[1].addEventListener("click", function(event){
    event.preventDefault()

    console.log("button is clicked")
    
    var newDivMessage = document.createElement("div")
    newDivMessage = document.getElementById("input")
    newDivMessage.textContent = this.value[2]
    newDivMessage.style.alignSelf = "flexStart"
    newDivMessage.style.backgroundColor = "burlywood"
    
    var newMessage = document.getElementById("main").getElementsByClassName("messages")[0]
    newMessage.append(newDivMessage)

    var clearPressed = document.getElementById("clear-button") 
    clearPressed.addEventListener("click", function(){

    newDivMessage.remove()
})
})
