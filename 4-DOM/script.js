// <h1 id="one" class="two" name="nm">Chinmay</h1>

// by tagName

let byTagName = document.querySelector('h1')
console.log(byTagName)

// by Class

let byClass = document.querySelector('.two')
console.log(byClass)

// ByID

let byID = document.querySelector('#one')
console.log(byID)

// Comman formula

let commF = document.querySelector('h1[name="nm"]')
console.log(commF)

byID.addEventListener('click',function(){
    byID.style.color = "red"
    byID.textContent = "Poorva"
})