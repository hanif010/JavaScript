let amol= {
    firstName: "Amol",
    lastName: "Rao",
    age: 32,
    rollNo: 45,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
let chinmay = {
    firstName: "Chinmay",
    lastName: "Deshpande",
    age: 23,
    rollNo: 34,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(amol)


// Function Constructor

function Person(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
    // this.displayName = function(){
    //     console.log(this.firstName + " " + this.lastName)
    // }
}

let hanif = new Person("Hanif","AJ", 23, 34)
console.log(hanif)
let zakir = new Person("Zakir","Torgal",27,29)
console.log(zakir)

console.log(hanif instanceof Person)
console.log(zakir instanceof Person)

console.log(hanif.__proto__ === Person.prototype)
console.log(zakir.__proto__ === Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName +" " +this.lastName)
}
hanif.displayName()                           
zakir.displayName()

 