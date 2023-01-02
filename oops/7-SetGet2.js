class Person{
    firstName = "Chinmay"
    lastName = "Deshpande"
}

let chinmay = new Person()
let sarika = new Person()
console.log(chinmay)
console.log(sarika)

// Setting values outside the class

chinmay.firstName = "Chinmay S"
chinmay.lastName = "Deshpande"

sarika['firstName'] = "Sarika P"
sarika['lastName'] = "Pansare"

console.log(chinmay)
console.log(sarika)

// Program - 2

class PersonB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
}

let amolA = new PersonB("Amol", "Rao")
console.log(amolA)
let amolB = new PersonB("Amol1","Rao1")
console.log(amolB)

// Program Get and Set method

class PersonC{

    setFirstname(name){
        this.firstName = name
    }

    setLastname(name){
        this.lastName =name
    }

    getFirstname(){
        return this.firstName 
    }

    getLastname(){
        return this.lastName
    }
}

let hanif = new PersonC()

hanif.setFirstname("Hanif")
hanif.setLastname("AJ")

console.log(hanif)

let q1 = hanif.getFirstname()
let q2 = hanif.getLastname()
console.log(q1,q2)
console.log(q1)

// Program to setting the property  using set & get method

class PersonD{

    set sFirstname(name){
        this.firstName = name
    }

    set sLastname(name){
        this.firstName = name
    }

    get gfirstname(){
        return this.firstName
    }

    get glastname(){
        return this.lastName
    }
}

let poorva = new PersonD()

poorva.sFirstname = "Poorva"
poorva.lastName = "Vyas"
console.log(poorva)

console.log(poorva.gfirstname)

console.log(poorva.glastname)

