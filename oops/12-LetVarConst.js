// let and const are blocked scope
// Program 1

let x = 10
console.log(x)

// Program 2

{
    let x = 40
    console.log(x)
}
console.log(x)

// Program 3

let y = 70
{
    let y = 80
    console.log(y)
}
console.log(y)

// Program 4

let z = 10
{
    z = 20
    console.log(z)
}
console.log(z)

// Program 5

const a = 50
console.log(a)
{
    const a1 = 90
    console.log(a1)
}
// console.log(a1)

// Program 6

const a2 = 90
console.log(a2)
{
    const a2 = 800
    console.log(a2)
}
console.log(a2)

// Program 7
const a3 = 90
console.log(a3)
// {
//     a3 = 800
//     console.log(a3)
// }
console.log(a3)

// Part - B

// Program 1 
// Var are function scope

var i = 10
console.log(i)

{
    var oo = 900
}
console.log(oo)

// Program 2

var t = 100
function add(){
    console.log(t)
}
add()

// /Progra 3

function addA(){
    var t1 = 600
    console.log(t1)
}
addA()
// console.log(t1)

// Program 4

var t2 = 900
function addB(){
    var t2 = 600
    console.log(t2)
}
console.log(t2)
addB()
console.log(t2)

// Program 5

var t3 = 900
function addC(){
    t3 = 600
    console.log(t3)
}
console.log(t3)
addC()
console.log(t3)