// For loop

// Print Hello 5 times
for(i = 0; i < 5; i++){
    console.log("Hello")
}

// print 0 - 2
for(let i = 0; i < 3; i++){
    console.log(i)
}

// print 1 - 5
for(let i = 1; i <= 5; i++){
    console.log(i)
}

// table of 2
for(let i = 2; i <= 20; i = i+2){
    console.log(i)
}

// print 10 - 1
for(let i = 10; i >= 1; i--){
    console.log(i)
}

// Break statement
for(let i = 0; i < 5; i++){
    if(i == 3){
        break
    }
    console.log(i)
}

for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}

// --------------------------------------------------------------------------------------->

let i = 0
while(i < 5){
    console.log(i)
    i++
}

let i1 = 1
while(i1 <= 5){
    console.log(i1)
    i1++
}

let i3 = 3
while(i3 <= 30){
    console.log(i3)
    i3 = i3+3
}

let i4 = 10
while(i4 >= 1){
    console.log(i4)
    i4 --
}

let i5 = 1
while(i5 <= 5){
    if(i5 == 4){
        break
    }
    console.log(i5)
    i5++
}

let i6 = 1
while(i6 <= 5){
    console.log(i6)
    if(i6 == 4){
        break
    }
    i6++
}


