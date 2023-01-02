console.log("Hello")

let x = 10
console.log(x)
x = 100
console.log(x)

const u = 30
console.log(u)
// u = 300

// Arithmetic operstions

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 50
let t = 10

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// fuction

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(16,4)
Calculator(100,20)

// function without parameter and without return type

function add(){
    console.log(9+9)
}
add()
add()
add()

// function with parameter and without return type

function addA(x,y){
    console.log(x+y)
}
addA(20,20)
addA(50,10)

// function with parameter and with return type

function addB(x,y){
    return x+y 
}
let r1 = addB(15,10)
console.log(r1)
console.log(r1+r1)