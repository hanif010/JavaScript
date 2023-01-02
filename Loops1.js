// Program 3

let city = "Pune"
switch(city){
    case "Pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaopur":
        console.log("RJ")
    default:
        console.log("invalid city")
}

let city1 = "jaipur"
switch(city1){
    case "pune":
        console.log("MH")
        break;
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break;
    default:
        console.log("invalid city")
}

// program

let city2 = "Udaipur"
switch(city2){
    case "Pune":
    case "Nagpur":
        console.log("MH")
        break;
    case "Indore":
    case "Bhopal":
        console.log("MP")
        break;
    case "Jaipur":
    case "Udaipur":
        console.log("RJ")
        break
    default:
        console.log("invalid city")
}

// loops
// for loop and while loop

for(let i = 0; i < 4; i++){
    console.log("Hello")
}

// print 1 to 5
for(let i =0; i <= 5; i++){
    console.log(i)
}

// print 1 to 10

for(i = 0; i <= 10; i++){
    console.log(i)
}

// table of 2
for(i = 2; i <= 20; i = i+2){
    console.log(i)
}

// table of 3
for(let i = 3; i <= 30; i = i+3){
    console.log(i)
}


