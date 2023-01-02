// Promises

// sync code 
function additionA(){
    console.log("A is called")
}

function additionB(){
    console.log("B is called")
}
// additionB()
// additionA()

// async code

function additionC(){
    setTimeout(function(){
        console.log("C is called")
    },3000)
}
function additionD(){
    console.log("D is called")
}
// additionC()
// additionD()

// Progra to crete user

function getinfo(){
    setTimeout(function(){
        console.log('create user')
    },3000)

    setTimeout(function(){
        console.log('Get user bi ID')
    },2000)

    setTimeout(function(){
        console.log('Get user info')
    },1000)
}
// getinfo()

// Callback hell

function getinfo1(){
    setTimeout(function(){
        console.log("Create user")
        setTimeout(function(){
            console.log("Get user by ID")
            setTimeout(function(){
                console.log('Get user info')
            },1000)
        },2000)
    },3000)
}
// getinfo1()

// Promises 
// Pending, resolve, reject

// Program 1
let pro2 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10

    if(a == b){
        resolve("a and b are equal")
    }
    else{
        reject('a and b are not equal')
    }
})
pro2.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// Program 2

let pro3 = new Promise(function(resolve,reject){
    let a = 90
    let b = 900
    if(a == b){
        resolve([11,22,33])
    }
    else{
        reject([-11,-22,-33])
    }
})
pro3.then(function(q1){
    console.log(q1[2])
},function(q1){
    console.log(q1[2])
})

// Program 3

let pro4 = new Promise(function(resolve,reject){
    let a = 20
    let b = 20
    if(a == b){
        resolve([11,22,33])
    }
    else{
        reject([-11,-22,-33])
    }
})
pro4.then(function(q2){
    console.log(q2[1])
},function(q2){
    console.log(q2[2])
})

// Program 4

let pro5 = new Promise(function(resolve,reject){
    let a = 50
    let b = 50
    if(a == b){
        resolve([11,22,33])
    }
    else{
        reject([-11,-22,-33])
    }
})
pro5
.then(function(q3){
    console.log(q3[0])
}).
catch(function(q4){
    console.log(q4[2])
}).
finally(function(){
    console.log("Always Executed")
})