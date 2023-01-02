// Program 1 Lexical Scope

function addition() {
    let a = 10
    let b = 20
    console.log(a + b)
    function additionB() {
        let c = 30
        let d = 40
        console.log(a + b + c + d)
        function additionC() {
            let e = 50
            let f = 60
            console.log(a + b + c + d + e + f)
        }
        additionC()
    }
    additionB()
}
addition()

// Program 2 Closures

function addA(x,y){
    console.log(x+y)
    return x+y
    console.log("Ram")
}
let q1 = addA(25,25)
console.log(q1)

// Program 3

function addB(){
    let a = 100
    let b = 200
    console.log(a+b)

    return function(){
        console.log(a + b)
    }
}
let q2 = addB()
console.log(q2)