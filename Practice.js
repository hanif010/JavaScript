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

// let borrow = chinamy.displayName

// let a = borrow.bind(mayuri)
// a()
// let b = borrow.bind(peeyush)
// b()

// let borrow1 = chinamy.displayName
// borrow1.call(mayuri)
// borrow1.call(peeyush)

// ------------------------------------------------------->>>

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

let displayName = function(greet){
    console.log( this.firstname,this.lastname,greet)
}

// displayName.call(student1,"Good morning")
// displayName.call(student2,"Good afernoon")
// displayName.call(student3,"Good Evening")
// displayName.call(student4,"Good night")

displayName.apply(student1,["GoodMorning"])
displayName.apply(student2,["GoodAfternoon"])
displayName.apply(student3,["GoodEvening"])
displayName.apply(student4,["GoodNight"])