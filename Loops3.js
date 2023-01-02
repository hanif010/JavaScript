// Loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// print Hello 5 times

for(let i = 0; i < 5; i++){
    console.log("Hello")
}

// print 1 to 3

for(let i = 1; i <= 3; i++){
    console.log(i)
}

// print 1 to 10

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// print table of 2

for(let i = 2; i <= 20; i= i+2){
    console.log(i)
}

// print 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i)
}

// break

for(let i = 0; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i)
}

for(let i = 0; i <= 5; i++){
    console.log(i)
    if(i == 3){
        break;
    }
}

// continue statement

for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i)
}

for(let i = 5; i >= 1; i--){
    if(i == 3){
        continue;
    }
    console.log(i)
}

let names = ["chinmay", "amol", "poorva", "ram", "mayuri"]
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

for(let i = names.length -1; i >= 0; i--){
    console.log(names[i])
}

let city = "Pune"
for(let i = 0; i < city.length; i++){
    console.log(city[i])
}

for(let i = city.length -1; i >= 0; i--){
    console.log(city[i])
}

// While loo

let i = 0
while(i < 5){
    console.log("Hello")
    i++
}

// print 1-5

let i2 = 1
while(i2 <= 5){
    console.log(i2)
    i2++
}

// Print 5-1

let i3 = 5
while(i3 >= 1){
    console.log(i3)
    i3--
}

// Break statement

let i4 = 0
while(i4 <= 5){
    if(i4 == 3){
        break
    }
    console.log(i4)
    i4++
}

// Continue statement

let i5 = 0
while(i5 <= 5){
    if(i5 == 3){
        i5++
        continue
    }
    console.log(i5)
    i5++
}




