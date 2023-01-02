let ram = {
    firstname: "rame",
    lastname: "kulkarni",
    age: 23,
    rollnumber: 45,
    display: function () {
        console.log(this.firstname + this.lastname)
    }
}

let mayuri = {
    firstname: "mayuri",
    lastname: "katwe",
    age: 23,
    rollnumber: 45,
    display: function () {
        console.log(this.firstname + this.lastname)
    }
}


// // Function Cunstructor

function Person(firstname, lastname, age, rollnumber) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.rollnumber = rollnumber
    // this.display = function () {
    //     console.log(this.firstname + this.lastname)
    // }
}

let hanif = new Person("hanif", "aj", 24, 34)
console.log(hanif)
let amol = new Person("amol", "rao", 25, 45)
console.log(amol)

hanif.city = "Bijapur"
console.log(hanif)

hanif.display()
amol.display()

console.log(hanif instanceof Person)
console.log(amol instanceof Person)

console.log(amol.__proto__ == Person.prototype)
console.log(hanif.__proto__ == Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstname + this.lastname)
}
Person.prototype.city = "Pune"

hanif.display()
amol.display()

console.log(amol.city)
console.log(hanif.city)

console.log(amol.hasOwnProperty("city"))
console.log(amol.hasOwnProperty('lastname'))
console.log(amol.hasOwnProperty('firstname'))
console.log(amol.hasOwnProperty('rollnumber'))
console.log(amol.hasOwnProperty('age'))

// ================================================================>>

let names = ["Amol", "ram", "sham", "satish"]
console.log(names)

console.log(names.length)
console.log(names.sort())

let names2 = new Array(6)
names2[0] = "rame"
names2[1] = "sham"
names2[2] = "satish"
names2[3] = "laxman"
names2[4] = "sachin"
names2[5] = "ray"

console.log(names2)

console.log(names2 instanceof Array)
console.log(names instanceof Array)

console.log(names.__proto__ == Array.prototype)
console.log(names2.__proto__ == Array.prototype)

console.log(names.hasOwnProperty('length'))
