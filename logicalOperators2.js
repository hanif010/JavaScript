// Logical Operators

// And

console.log(6 > 5 && 7 == 7)
console.log(6 == '6' && 7 !== 7)
console.log( 6 >= 7 && 8 === 8)
console.log( 7 != 7 && 9 > 10)

// OR 

console.log(6 > 5 || 7 ==7)
console.log(6 == '6' || 7 !== 7)
console.log(6 >= 7 || 8 === 8)
console.log(7 != 7 || 9 > 10)

// AND

console.log(!7===7)
console.log(!8 !== 8)

// Program 1
// Conditional Statements

if(7 == 7){
    console.log("Hello")
}
else{
    console.log("Bye")
}

let numT = 11
if(numT > 0 && numT <=5){
    console.log('5% Discount')
}
if(numT >5 && numT <= 10){
    console.log('10% discount')
}
if(numT >10){
    console.log('20% Discount')
}

let numT1 = 6
if(numT > 0 && numT <= 5){
    console.log('5% Discount')
}
else if(numT > 5 && numT <= 10){
    console.log('10% Discount')
}
else if(numT >10){
    console.log('20% Discount')
}


// Program 2

let marks = 74
if(marks > 90){
    console.log('A Grade')
}
if(marks > 75){
    console.log('B Grade')
}
if(marks > 65){
    console.log('C Grade')
}

let marks1 = 66
if(marks > 90){
    console.log('A Grade')
}
else if(marks > 75){
    console.log('B Grade')
}
else if(marks > 65){
    console.log('C Grade')
}


// Program 3 tenary operator

let a = 10
let b = 50

if(a > b){
    console.log('A is Greater')
}
else{
    console.log('B is Greater')
}

//  Ternary Operator

a > b ? console.log('A is greater'):console.log('B is greater')


























