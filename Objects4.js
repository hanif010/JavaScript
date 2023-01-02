let students = [
    {
        firstname: "chinmay",
        lastname: "deshpande",
        age: 25,
        city: "pune",
        skills: ["python", "Javascript", "cpp", "html", "CSS3"],
        marks: 80
    },
    {
        firstname: "poorva",
        lastname: "vyas",
        age: 29,
        city: "ujjain",
        skills: ["python", "cpp"],
        marks: 79
    },
    {
        firstname: "amol",
        lastname: "rao",
        age: 32,
        city: "nagpur",
        skills: ["sql", "python", "css"],
        marks: 43
    },
    {
        firstname: "abhisha",
        lastname: "burande",
        age: 25,
        city: "nagpur",
        skills: ["sql", "javascript", "tableau", "css", "python"],
        marks: 23
    }
]
// Program 4 - username with city nagpur

students.forEach(function(el){
    if(el.city == "nagpur"){
        console.log(el.firstname)
    }
})

// program 5 -
// Add salesforce to every student
students.forEach(function(el){
    el.skills.push('sales force')
})
console.log(students)

// program 6 
// amol:4

students.forEach(function(el){
    console.log(el.firstname+":"+el.skills.length)
})

// program 7
// User with city nagpur && python

let q1 = students.filter(function(el){
    return el.city == "nagpur" && el.skilss == "python"
})
console.log(q1)
q1.forEach(function(el){
    console.log(el.firstname)
})

students.forEach(function (el) {
    if (el.city == "nagpur" && el.skills == "python"){
        console.log(el.firstname)
    }  
})

// program 8 -
// skills of person with firstname starting with from "A"

students.forEach(function(el){
    if(el.firstname.startsWith("a")){
        console.log(el.firstname +":" + el.skills.length)
    }
})

// program 9
// add country "India" to all students
students.forEach(function(el){
    el['country'] = "India"
})
console.log(students)

// Program 10 - SUM

students.forEach(function(el){
    if(el.marks < 50){
        el.marks = el.marks + 10
    }
})
console.log(students)

let q2 = students.filter(function(el){
    return el.marks < 50
})
console.log(q2)

// SUM
let q3 = students.reduce(function(acc,el){
    return acc + el.marks
}, 0)
console.log(q3)



















