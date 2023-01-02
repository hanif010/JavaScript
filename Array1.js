// Array In JS

let names = ["Hnaif","Chinmay","Sarika","Poorva"]
console.log(names)
console.log(names[0])

let cities = ["Pune", "Nagpur", "Mumbai",]
let q1 = cities.length
console.log(q1)

// Methods
// push()

let fruits = ["Mango", "Apple", "Grapes", "Banana"]
let q2 = fruits.push("Papaya")
console.log(q2)
console.log(fruits)

// Unshift
let fruits1 = ["Mango", "Apple", "Grapes", "Banana"]
let q3 = fruits1.unshift("Chikoo")
console.log(q3)
console.log(fruits1)

// pop()
let fruits2 = ["Mango", "Apple", "Grapes", "Banana"]
let q4 = fruits2.pop()
console.log(q4)
console.log(fruits2)

// shift()
let fruits3 = ["Mango", "Apple", "Grapes", "Banana"]
let q5 = fruits3.shift()
console.log(q5)
console.log(fruits3)

// Includes
let vegetables = ["tomato", "potato", "brinjal","cabbage"]
let q6 = vegetables.includes("tomato")
console.log(q6)
let q7 = vegetables.includes("Tomato")
console.log(q7)

// Indexof()

let vegetables1 = ["tomato", "potato", "brinjal","cabbage"]
let q8 = vegetables1.indexOf("cabbage")
console.log(q8)
let q9 = vegetables1.indexOf("Brinjal")
console.log(q9)

// Reverse

let vegetables2 = ["tomato", "potato", "brinjal","cabbage"]
let q10 = vegetables2.reverse()
console.log(q10)

// sort
let vegetables3 = ["tomato", "potato", "brinjal","cabbage"]
let q11 = vegetables3.sort()
console.log(q11)

// concat
let vegetables4 = ["tomato", "potato", "brinjal","cabbage"]
let vegetables5 = ["Carrot", "Brinjal"]
let q12 = vegetables4.concat(vegetables5)
console.log(q12)
let q13 = vegetables5.concat(vegetables4)
console.log(q13)

// join

let info = ["Hanif", "Jamadar", 8147765373]
let q14 = info.join(' ')
console.log(q14)

//  <-------------------------------------------------------------------------------------------->

// Map

let num = [11,22,33,44,55]
let s1 = num.map(function(el,index,arr){
    return el + 2
})
console.log(s1)

        // Table of 5

        let table = [1,2,3,4,5,6,7,8,9,10]
        let t1 = table.map(function(el,index,arr){
            return el * 5
        })
        console.log(t1)

// Filter

let marks = [33,55,45,65,75,35,85]
let s2 = marks.filter(function(el,index,arr){
    return el > 45
})
console.log(s2)

        let names1 = ["amol","ram","sham","abhay","amit"]
        let n1 = names1.filter(function(el,index,arr){
            return el.length == 4
        })
        console.log(n1)

// Reduce

let num2 = [2,3,4,5,6,7,8]
let s3 = num2.reduce(function(acc,el,index,arr){
    return acc + el
})
console.log(s3)

// Foreach

let num3 = [10,20,30,40,50]
let s4 = num3.forEach(function(el,index,arr){
    console.log(el * 2)
})

// Find
let num4 = [10,20,30,40,50]
let s5 = num4.find(function(el,index,arr){
   return el > 20
})
console.log(s5)

// findIndex

let num5 = [10,20,30,40,50]
let s6 = num5.findIndex(function(el,index,arr){
    return el >= 35
})
console.log(s6)

// Every
let num6 = [10,20,30,40,50]
let s7 = num6.every(function(el,index,arr){
    return el > 9
})
console.log(s7) 

// Some

let num7 = [10,20,30,40,50]
let s8 = num7.some(function(el,index,arr){
    return el >= 50
})
console.log(s8)

// Slice

let city = ["Pune", "Nagpur", "Mumbai", "Banglore"]
console.log(city.slice(2))
console.log(city.slice(-2))
console.log(city.slice(1,-2))
console.log(city.slice(0,3))
console.log(city.slice(-1,-4))

// Splice
let city1 = ["Pune", "Nagpur", "Mumbai", "Banglore"]
console.log(city1.splice(2,1))
console.log(city1.splice(1,2))

city1.splice(1,2,"wardha","jaipur")
console.log(city1)

// Flat
let arr1 = [[11,22,33],[44,55,66],[77,88,99]]
let s22 = arr1.flat()
console.log(s22)

// At

let a = [1,2,3,4,5,6,7,8,9]
let b1 = a.at(5)
console.log(b1)

// Fill

let a1 = [1,2,3,4,5,6,7,8,9]
let b2 = a1.fill("Hanif",3,7)
console.log(b2)


