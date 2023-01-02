// // Templates

// // Function constructor

// function Person(fn,ln,ag,sks){
//     this.firstname = fn
//     this.lastname = ln
//     this.age = ag
//     this.skills = sks
// }
// let Hanif = new Person("Hanif", "Jamadar", 24 , ["javascript","cypress"])
// Hanif.city = "Bijapur"
// Hanif.skills.push("C++")
// console.log(Hanif)

// // ES6 Class

// class Person2{
//     constructor(fn,ln,ag,sks){
//         this.firstname = fn
//         this.lastname = ln
//         this.age = ag
//         this.skills = sks
//     }
// }
// let Zakir = new Person2("Zakir", "Torgal", 28 , ["C-pro", "C++"])
// Zakir.city = "Banglore"
// Zakir.skills.push("VHDL")
// console.log(Zakir)

// Object Creat

let obj = {
    init:function(firstname,lastname,age,skills){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.skills = skills
    }
}
let Ram = Object.create(obj)
console.log(Ram)
Ram.init("Ram", "Dani", 34, ["python","js", "cypress"])
console.log(Ram)