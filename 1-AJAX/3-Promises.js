// Promises
// promises is the way to handle
// sync execution for async code
// Promises is the way to handle paralle execution of async code


// Program 1
let pro1 = new Promise(function(resolve,reject){
    let a = 10
    let b = 20
    if(a == b){
        resolve('A and B are equal')
    }
    else{
        reject('A and B are not equal')
    }
})
pro1.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// Program 2

let pro2 = new Promise(function(resolve,reject){
    let a = 20
    let b = 20
    if(a == b){
        resolve('Equal')
    }
    else{
        reject('NotEqual')
    }
})
pro2.then(function(str){
    console.log(str)
})
.catch(function(a){
    console.log(a)
})
.finally(function(){
    console.log('Finally Complete')
})

// Program 3

let pro3 = new Promise(function(resolve,reject){
    let str = "Amol"
    if(str.startsWith('A')){
        resolve('String starting with A')
    }
    else{
        reject('String does nit starting with A')
    }
})
pro3.then(function(str){
    console.log(str)
    return "Amol"
})
.then(function(q){
    console.log(q)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('I am Happy Today')
})

// Program 4
function getinfo(){
    setTimeout(function(){
        console.log('Create User')
    },3000)

    setTimeout(function(){
        console.log("Get user by ID")
    },2000)

    setTimeout(function(){
        console.log("Print User")
    },1000)
}
// getinfo()

// Call back Hell

function getinfo1(){
    setTimeout(function(){
        console.log("Create user")
        setTimeout(function(){
            console.log('Get user by ID')
            setTimeout(function(){
                console.log("Print users")
            },1000)
        },2000)
    },3000)
}
// getinfo1()

// Promises

function createuser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Create user')
        },3000)
    })
}

function getuser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Get user by ID')
        },2000)
    })
}

function printuser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Print user')
        },1000)
    })
}

createuser()
.then(function(str){
    console.log(str)
    return getuser()
})
.then(function(str){
    console.log(str)
    return printuser()
})
.then(function(str){
    console.log(str)
})





















