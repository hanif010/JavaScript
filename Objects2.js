// Object 
// Retrive (Dot notation and bracket notation)

let info = {
    firstName: "Hanif",
    lastName: "Jamadar",
    age: 24,
    rollNo: 34
}
console.log(info.firstName)
console.log(info["lastName"])

// Update (Dot notation anf=d bracket notation)

let info1 = {
    firstName: "Hanif",
    lastName: "Jamadar",
    age: 24,
    rollNo: 34
}
info1.firstName = "Asif"
info1["lastName"] = "AJ"
console.log(info1)

// Add (Dot notation and bracket notation)

let info2 = {
    firstName: "Hanif",
    lastName: "Jamadar",
    age: 24,
    rollNo: 34
}
info2.city = "Bijapur"
console.log(info2)
info2["lang"] = "Hindi"
console.log(info2)

// Delete (Dot notation and bracket notaion)
let info3 = {
    firstName: "Hanif",
    lastName: "Jamadar",
    age: 24,
    rollNo: 34
}
delete info3.rollNo
console.log(info3)

delete info3["age"]
console.log(info3)

// For loop

let vehicle = {
    model: "Innova",
    regno: "2589",
    color: "Black",
    version: "BS6"
}
for(let key in vehicle){
    console.log(key, vehicle[key])
}
// ===================================>>>>>>>>>>>>..

let info4 = {
    firstname: "Hanif",
    lastname: "Jamadar",
    skill: ["Java","Python","C++"]
}
info4.skill.push("Cypress")
console.log(info4)

// ========= =======================>>>>>>>>>>>
let info5 = {
    firstname: "Hanif",
    lastname: "Jamadar",
    age: 24,
    family:{
        mother: "Mumtaz",
        father: "Maktum",
    }
}
info5.family.brother = "Asif"
console.log(info5)