let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttonOne.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li') 
    newLi.textContent = text 
    CreateButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})


ulList.addEventListener('click', function (event) {

    if (event.target.tagName == "BUTTON") {

        if (event.target.className === "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if (event.target.className === "down") {

        }
        else if (event.target.className === "up") {

        }

    }

})





function CreateButton(li) {
    let remove = document.createElement('button') 
    remove.textContent = "Remove"  
    remove.className = "remove" 
    li.appendChild(remove)

    let up = document.createElement('button') 
    up.textContent = "Up"  
    up.className = "up" 
    li.appendChild(up)

    let down = document.createElement('button') 
    down.textContent = "Down"  
    down.className = "down" 
    li.appendChild(down)


}