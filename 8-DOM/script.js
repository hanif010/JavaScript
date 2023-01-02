let id = document.getElementById('two')
console.log(id)

let nodeList = document.querySelectorAll('p')
console.log(nodeList)

let htmlCollection = document.getElementsByTagName('p')
console.log(htmlCollection.length)

let classOne = document.querySelectorAll('.one')
console.log(classOne)

let classTwo = document.getElementsByClassName('one')
console.log(classTwo)


let pElement = document.querySelector('.five')
console.log(pElement)
console.log(pElement.className)
pElement.className = "six"


pElement.classList.add('five')
pElement.classList.add('seven')
pElement.classList.remove('six')

pElement.classList.toggle('six')
pElement.classList.toggle('six')