// Program 1
let chinamy = {
    firstname : "Chinmay",
    lastname: "Deshpande",
    age : 32,
    skills: ["Python","Javascript","css"],
    displayName:function(){
        console.log(this.firstname,this.lastname)
    }
}

let mayuri = {
    firstname : "Mayuri",
    lastname : "Katwe",
    age:23,
    skills:["Python3","cypress","Jira"]
}

let peeyush = {
    firstname:"Peeyush",
    lastname: "Sharma",
    age: 28,
    skills:["JS","python","selenium"]
}

// Bind()
// let borrow = chinamy.displayName

// let a = borrow.bind(mayuri)
// a()
// let b = borrow.bind(peeyush)
// b()

// Call()

// let borrow1 = chinamy.displayName
// borrow1.call(mayuri)
// borrow1.call(peeyush)

// Program 2

let student1 = {
    firstname : "Hanif",
    lastname: "Jamadar"
}

let student2 = {
    firstname : "Zakir",
    lastname: "Torgal"
}

let student3 = {
    firstname : "Chinmay",
    lastname: "Deshpande"
}

let student4 = {
    firstname : "Aish",
    lastname: "D"
}

let displayName = function(a){
    console.log(a , this.firstname,this.lastname)
}

displayName.call(student1,"GM")
displayName.call(student2,"GA")
displayName.call(student3,"GE")
displayName.call(student4,"GN")

displayName.apply(student1,["GoodMorning"])
displayName.apply(student2,["GoodAfternoon"])
displayName.apply(student3,["GoodEvening"])
displayName.apply(student4,["GoodNight"])