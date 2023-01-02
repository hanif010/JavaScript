// // Actual Difference between Functions

// Function declartion 
function add() {
    console.log('Hello')
}
add()

// Function expression
let greet = function () {
    console.log('Wel-Come')
}
greet()

// // Arrow Function
let init = () => {
    console.log('Bye')
}
init()

// Program 1

let info = {
    firstname: "Hanif",
    lastname: "Aj",
    age: 23,
    display: function () {
        console.log(this.firstname + this.lastname)

        let greet = function () {
            console.log(this.firstname + this.lastname)
        }
        greet()
    }
}
info.display()

// Program 2

var firstname = "Asif"
var lastname = "AJ"
let info1 = {
    firstname: "Mayuri",
    lastname: "Katwe",
    age : 23,
    display : function(){
        console.log(this.firstname + this.lastname)

        let greet = function(){
            console.log(this.firstname + this.lastname)
        }
        greet()
    }
}
info1.display()

// Program 3

let Person = {
    firstname: "Zakir",
    lastname:"Torgal",
    age: 28,
    display: function(){
        console.log(this.firstname + this.lastname)

        let info = ()=>{
            console.log(this.firstname + this.lastname)
        }
        info()
    }
}
Person.display()

// Program 4

let Person1 = {
    firstname: "Ram",
    lastname: "Natikar",
    age: 32,
    info: ()=>{
        console.log(this.firstname + this.lastname)

        let display = ()=>{
            console.log(this.firstname + this.lastname)
        }
        display()
    }
}
Person1.info()

// Program 5

var firstname = "Sham"
var lastname = "Kulkarni"
let Person2 = {
    firstname: "Hanif",
    lastname: "Aj",
    age: 23,
    info: ()=>{
        console.log(this.firstname + this.lastname)

        let display = ()=>{
            console.log(this.firstname + this.lastname)
        }
        display()
    }
}
Person2.info()