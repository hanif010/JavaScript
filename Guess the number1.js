// console.log(Math.floor(12.3))
// console.log(Math.floor(45.36))
// console.log(Math.floor(-18.6))

// console.log(Math.ceil(13.6))
// console.log(Math.ceil(45.2))
// console.log(Math.ceil(-15.6))

// console.log(Math.round(14.2))
// console.log(Math.round(14.6))
// console.log(Math.round(-12.6))

// console.log(Math.random())
// console.log(Math.random()*6)


// Program Guess Number 1-6
let randomNumber = Math.floor(Math.random()*6)+1
console.log(randomNumber)
let userInput = prompt("Enter any number between 1-6")
if(userInput == randomNumber){
    console.log("Guess is Correct")
}
else{
    console.log("Guess is Incorrect")
}