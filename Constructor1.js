// Obejct literals

let amol = {
    firstname: "Amol",
    lastname: "Rao",
    age: 27,
    skills: ["python", "Django", "sql"]
}
let chinmay = {
    firstname: "Chinamy",
    lastname: "Deshpande",
    age: 32,
    skills: ["python","javascript","html"]
}

// Dot notation
console.log(amol.firstname)
amol.firstname = "Amit"
amol.city = "Pune"
delete amol.skills

console.log(amol)

// Bracket notation

console.log(chinmay.firstname)
chinmay["firstname"] = "Hanif"
chinmay ["City"] = "Bijapur"
delete chinmay ["skills"]
console.log(chinmay)

// Templates
// Function Cinstructor

function Person(fn,ln,ag,sks){
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.skills = sks
}
let Hanif = new Person("Hanif","Jamadar",24,["Js","cypress"])
console.log(Hanif)
let Zakir = new Person("Zakir","Torgal", 28, ["Python","Java","html"])
console.log(Zakir)

// ES 6 Class

class Person2{
    constructor(fn,ln,ag,sks){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.skills = sks
    }
}
let Ram = new Person2("Ram","Natikar",32,["c-prog","C++"])

Ram.city = "Atharga"
console.log(Ram)