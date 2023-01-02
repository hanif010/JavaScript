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
        skills: ["pyhton", "cpp"],
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

console.log(students[0].firstname)
console.log(students[1]['firstname'])

// Update name for poorva
students[1].firstname = "purva"
console.log(students[1])

// Program - 1
// print full name

for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstname + students[i].lastname)
}

// using forech()
students.forEach(function(el){
    console.log(el.firstname + " " + el.lastname)
    console.log(el['firstname'] + el['lastname'])
})

// Program 2

students.forEach(function(el){
    if(el.age > 25){
        console.log(el.firstname + el.lastname)
    }
})

let allAbove25 = students.filter(function(el){
    return el.age > 25
})
// console.log(allAbove25)
allAbove25.forEach(function(el){
    console.log(el.firstname, el.lastname)
})

// Program 3
// Sum of ages of all students(avg age)

let sumA = students.reduce(function(acc,el){
    return el.age + acc
}, 0)
console.log(sumA / students.length)

// program 4 - username with city 

students.forEach(function(el){
    if(el.city == "nagpur"){
        console.log(el.firstname)
    }
})

// Program - 6

students.forEach(function(el){
    console.log(el.firstname+ " " + el.skills.length)
})

// Program 7
// user with city nagpur & python

let q1 = students.filter(function(el){
    return el.city == 'nagpur' && el.skills.includes('python')
})
// console.log(q1)
q1.forEach(function(el){
    console.log(el.firstname)
})

students.forEach(function(el){
    if(el.city = "nagpur" && el.skills.includes('python')){
        console.log(el.firstname)
    }
})

// Porgram 8
// skills of person with first name starting from 'a'

students.forEach(function(el){
    if(el.firstname.startsWith('a')){
        console.log(el.firstname + " " + el.skills.length)
    }
})

// program 9
// Add country "India" to all students

students.forEach(function(el){
    el.country = "India"
})
console.log(students)

// Program 10
students.forEach(function(el){
    if(el.marks < 50){
        el.marks + el.marks + 10
    }
})
console.log(students)
let q2 = students.filter(function(el){
    return el.marks > 50
})