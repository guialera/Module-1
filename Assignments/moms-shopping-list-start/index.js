var shoppingItem = document.getElementById("title")
var submitItem = document.getElementById("add-todo")

submitItem.addEventListener("submit", function(e) {
        e.preventDefault()
        var mainList = document.createElement("li")
        var addItem = document.createElement("div")
        var list = document.getElementById("list")
        list.append(mainList)
        addItem.textContent = shoppingItem.value
        mainList.append(addItem)
        console.log("this works!")

        var editButton = document.createElement("button")
        var deleteButton = document.createElement("button")
        editButton.textContent = "edit"
        deleteButton.textContent = "X"
        mainList.append(editButton)
        mainList.append(deleteButton)
        editButton.style.margin = "5px"

        deleteButton.addEventListener("click", function(){
            mainList.remove()
            addItem.remove()
            editButton.remove()
            deleteButton.remove()
        })
    
        editButton.addEventListener("click", function(){
            var input = document.createElement("input")
            mainList.append(input)
            input.value = addItem.textContent
            addItem.remove()
            editButton.remove()
            deleteButton.remove()

            var saveButton = document.createElement("button")
    
            mainList.append(saveButton)
            mainList.append(deleteButton)
            saveButton.textContent = "save"
            saveButton.style.margin = "5px"

            saveButton.addEventListener("click", function(){
                newItem = document.createElement("div")
                newItem.textContent = input.value
                input.remove()
                addItem.remove()
                saveButton.remove()
                deleteButton.remove()
                mainList.append(newItem)
                mainList.append(editButton)
                mainList.append(deleteButton)

                editButton.addEventListener("click", function(){
                    newItem.remove()
                })
            })
             
        })
    
    })
