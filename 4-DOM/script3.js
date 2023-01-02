let headOne = document.querySelector('h1')
let textbox = document.querySelector('input')
let buttonC = document.querySelector('button')

buttonC.addEventListener('click',function(){
    let text = textbox.value
    headOne.style.color = text
    headOne.textContent = text
    textbox.value = ""
})