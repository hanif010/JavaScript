let inputText = document.querySelector('input')
let ulList = document.querySelector("ul")
let buttonC = document.querySelector('button')

buttonC.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    ulList.appendChild(newLi)
    inputText.value = " "
})