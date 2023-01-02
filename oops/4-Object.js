// ES6 Class ==

// program 1

class Person{
    firstname = "Chinmay"
    lastname = "Deshpande"
    age = 32
    rollnum = 20
}

let hanif = new Person()
let aishwarya = new Person()
console.log(hanif)
console.log(aishwarya)

// Update

hanif.firstname = "Hanif"
hanif.lastname = "Aj"
hanif.age = 23
hanif.rollnum = 34
console.log(hanif)

// Program 2

class Person1{
    constructor(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollnum = rn
    }
}

let Chinmay = new Person1("Chinmay","Deshpande",32,45)
console.log(Chinmay)
let virat = new Person1("Virat", "Sharma",34,18)
console.log(virat)

// Program 3

class Person2{
    constructor(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollnum = rn
        this.display = function(){
            console.log(this.firstname + this.lastname)
        }
    }

}

let omkar = new Person2("Omkar","K",32,25)
console.log(omkar)
let aish = new Person2("Aish","D",23, 25)
console.log(aish)

omkar.display()
aish.display()

// Program 4 

class Person3{
    constructor(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age =ag
        this.rollnum = rn
    }
    displayN(){
        console.log(this.firstname + this.lastname)
    }
}

let aisf = new Person3("Asif", "AJ", 22,17)
let zayn = new Person3("Zayn", "Malik", 28, 29)
console.log(aisf)
console.log(zayn)

aisf.displayN()
zayn.displayN()

// Object.creat======>>

// let q1 = Object.create({})
// console.log(q1)

// q1.firstname = "Amol"
// q1.lastname = "Rao"
// q1.age = 23
// q1.rollnum = 56
// console.log(q1)


// Program-1

let info = {
    init:function(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollnum = rn
    },
    displayName:function(){
        console.log(this.firstname + this.lastname)
    }
}

let q2 = Object.create(info)
// console.log(q2)

q2.init('Amol',"Rao",25,45)
console.log(q2)

function PersonB(fn,ln,ag,rn){
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.rollnum = rn
}
PersonB.prototype.DisplayName = function(){
    console.log(this.firstname + this.lastname)
}

console.log(PersonB)


