
let buttonA = document.querySelector('#one')
let ulList = document.querySelector('ul')
let input = document.querySelector('input')

buttonA.addEventListener('click',function(){
    let text = input.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    createButton(newLi)
    ulList.appendChild(newLi)
    input.value = ""
})


ulList.addEventListener('click',function(event){

    if(event.target.className == "remove"){
        let li = event.target.parentElement
        let ul = li.parentElement
        ul.removeChild(li)
    }

    if(event.target.className == "up"){
        let li = event.target.parentElement
        let ul = li.parentElement
        let prev = li.previousElementSibling
        if(prev){
            ul.insertBefore(li,prev)
        }
    }

    if(event.target.className == "down"){
        let li = event.target.parentElement
        let ul = li.parentElement
        let next = li.nextElementSibling
        if(next){
            ul.insertBefore(next,li)
        }
    }
})

function createButton(li){
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
