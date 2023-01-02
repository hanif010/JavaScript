let q1 = document.querySelector('#one')
console.log(q1)

let q2 = document.querySelector('.two')
console.log(q2)

let q3 = document.querySelector('p')
console.log(q3)

let q4 = document.querySelector('p[name="nm"]')
console.log(q4)


let q5 = document.querySelectorAll('li')
console.log(q5)

for(let i = 0; i < q5.length; i++){
    q5[i].style.color = "red"
}

let q6 = document.getElementById('one')
console.log(q6)

let q7 = document.querySelectorAll('.three')
console.log(q7)

let q8 = document.getElementsByClassName('three')
console.log(q8)

let q9 = document.getElementsByTagName('li')
console.log(q9)

console.log(q7.length)
console.log(q8.length)

q7.forEach(function(el){
    el.style.color = "blue"
})