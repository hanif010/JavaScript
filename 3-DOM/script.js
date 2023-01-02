let headingOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

console.log(headingOne)
console.log(buttonC)

buttonC.addEventListener('click',function(){
    headingOne.style.color = "red"
})

let q1 = buttonC
buttonC.addEventListener('click',function(){
    headingOne.style.color = "yellow"
})