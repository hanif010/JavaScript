// ES6 Class===========>>
// Program 1

class PersonA{
    firstname = "Hanif"
    lastname = "AJ"
    age = 23
    rollnum= 34
}

let amol = new PersonA()
amol.firstname = "Amol"
amol.lastname = "Rao"
amol.age = 34
amol.rollnum = 45
console.log(amol)


// Program 2
// Updating the object properties at object creation only

class PersonB{
    constructor(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollnum = rn
    }
}

let poorva = new PersonB('poorva','vyas',29,21)
console.log(poorva)
let chinmay = new PersonB('Chinmay','deshpande',32,25)
console.log(chinmay)

// Program 3

class PersonC{
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

let zakir = new PersonC("Zakir","Torgal",28,29)
let ram = new PersonC("Ram", "Natikar",32,42)
console.log(zakir)
console.log(ram)

// Program 4

class PersonD{
    constructor(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollnum = rn
    }
    display(){
        console.log(this.firstname +" "+ this.lastname)
    }
}

let sagar = new PersonD("Sagar","Talwar",26,37)
let Omkar = new PersonD("Omkar", "K",31,42)
console.log(sagar)
console.log(Omkar)

sagar.display()
Omkar.display()


// Object,Creat()

// Program - 1

let a = {
    init:function(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollnum = rn
    },
    display:function(){
        console.log(this.firstname + this.lastname)
    },
    language: "Hindi"
}

let ayesha = Object.create(a)
console.log(ayesha)
ayesha.init('ayesha','momin',35,02)
console.log(ayesha)
console.log(ayesha.language)