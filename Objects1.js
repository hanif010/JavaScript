// Objects
// Retrive (Dot notation and bracket notation)

let info = {
    firstname: "Hanif",
    lastname: "Jamadar",
    age: 24,
    rollno: 34
}
console.log(info.firstname)

console.log(info["age"])

// Update(Dot notation and bracket notaion)
let info1 = {
    firstname: "Hanif",
    lastname: "Jamadar",
    age: 24,
    rollno: 34
}
info1.firstname = "Asif"
console.log(info1)

info1["lastname"] = "AJ"
console.log(info1)

// Add (Dot notation and bracket notatiom)

let info2 = {
    firstname: "Hanif",
    lastname: "Jamadar",
    age: 24,
    rollno: 34
}
info1.city = "Bijapur"
console.log(info2)

info1["Langauge"] = "Hindi"
console.log(info2)

// Delete (Dot notation and nracket notation)
let info3 = {
    firstname: "Hanif",
    lastname: "Jamadar",
    age: 24,
    rollno: 34,
    city: "Bijapur",
    Language: "Hindi"
}
delete info2.city
console.log(info3)

delete info2["Language"]
console.log(info3)

// =========================================================>>>>>>>>>
let vehicle = {

    name: "Swift",
    color: "White",
    regno: "7412",
}
// Dot notation(Retrivr, Update, Add, delete)
console.log(vehicle.name)

vehicle.color = "Black"
console.log(vehicle)

vehicle.passing = "KA 28"
console.log(vehicle)

delete vehicle.regno
console.log(vehicle)

// Bracket notation (Retrive, Update, Add, Delete)

console.log(vehicle["name"])

vehicle["color"] = "Green"
console.log(vehicle)

vehicle["passing"] = "KA 28"
console.log(vehicle)

delete vehicle["regno"]
console.log(vehicle)

// For loop in object

let employee = {
    firstname: "Chinmay",
    lastname: "deshpande",
    age: 32,
    rollNo: 25,
    MobNo: 147852369
}
for(let key in employee){
    // console.log(employee[key])
    console.log(key, employee[key])
}
