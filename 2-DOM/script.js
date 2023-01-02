document.querySelector('h1')
.addEventListener('click',function(){
    document.querySelector('h1').style.color = "green"
})

//<p id="one" class="two" name = "nm">I am learning Javascript</p>
// CSS selector

// by tagName

let bytagName = document.querySelector('p')
console.log(bytagName)

// by class

let byclass = document.querySelector('.two')
console.log(byclass)

// by id

let byID = document.querySelector('#one')
console.log(byID)

// Common formula

let bycommF = document.querySelector('p[name="nm"')
console.log(bycommF)

