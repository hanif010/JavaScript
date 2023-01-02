// let  info = ["Chinmay", "Deshpande", 12, 44]
// // Retrive
// console.log(info[0])

// let info2 = {
//     firstname: "Chinmay",
//     lastname: "deshpande",
//     age: 12,
//     rollno: 44
// }
// // Retrive
// console.log(info2.lastname)
// console.log(info2.rollno)

// // Add 
// info2.ciyt = "Pune"
// info2["language"] = "Hindi"
// console.log(info2)

// // Update
// info2.firstname = "Hanif"
// info2["lastname"] = "Jamadar"
// console.log(info2)

// // Delete
// delete info2.age
// delete info2["rollNo"]
// console.log(info2)

// // ================================================>>>>>>>>>>

// // For loop
// let vehicle = {
//     color: "red",
//     type: "sedane",
//     color: "blue"
// }
// console.log(vehicle)

// let animal = {
//     name: "tiger",
//     color: "red"
// }
// for(let key in animal){
//     console.log(key, animal[key])
// }

// // ===================  ======================================>>>>>>>>>

// let info3 = {
//     firstName: "Chinmay",
//     lastName: "Deshpande",
//     skills: ["python", "java", "c", "cpp"]
// }
// console.log(info3.skills)
// info3.skills.push("javascript")
// console.log(info3)
// info3.parent = {
//     father: "shirish",
//     mother: "Deshpande"
// }
// console.log(info3)

let car = {
    color: "green",
    type: "sedane"
}
let j = []
for(let key in car){
    j.push(car[key])
}
console.log(j)