// // Program1
// //  Guess number in 1 chance

// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput = prompt("Enter Any Number Between 1-6")
// if(userInput == randomNumber){
//     console.log("Guess Is Correct")
// }
// else{
//     console.log("Guess Is Incorrect")
// }

// // Program 2
// // Guess the Number Chance-5
// let randomNumber1 = Math.floor(Math.random()*6)+1
// console.log(randomNumber1)
// for(let i = 0; i < 5; i++){
//     let userInput1 = prompt("Enter any number between 1-6")
//     if(userInput1 == randomNumber1){
//         console.log("Guess is correct")
//         break
//     }
//     else{
//         console.log("Guess is incorrect")
//     }
// }

// Program 3 
// Guess the number (till the end)

let randomNumber2 = Math.floor(Math.random()*6)+1
console.log(randomNumber2)
let userInput2
while(userInput2 != randomNumber2){
    userInput2 = prompt("Enter any number between 1-6")
    if(userInput2 == randomNumber2){
        console.log("Guess is correct")
        break
    }
    else{
        console.log("Guess is incorrect")
    }
}



