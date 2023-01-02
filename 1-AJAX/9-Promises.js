// Promise Combinators

function getUser1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise-1')
        }, 3000)
    })
}

function getUser2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise-2')
        }, 2000)
    })
}

function getUser3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise-3')
        }, 3000)
    })
}

async function getUser() {
    console.time('Serial execution')
    let a = await getUser1()
    let b = await getUser2()
    let c = await getUser3()
    console.timeEnd('serial execution')
    console.log(a, b, c)
}
// getUser()

async function getUsers() {
    console.time('serial execution')
    let b1 = await Promise.all([
        getUser1(),
        getUser2(),
        getUser3()
    ])
    console.timeEnd('Serial execution')
    console.log(b1)
}
// getUsers()

let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise-1')
    },1000)
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise-2')
    },2000)
})

let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise-4')
    },3000)
})

let p4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject('Promise-4')
    },400)
})

// async function getUserI(){
//     let a = await Promise.all([
//         p1,p2,p3,p4
//     ])
//     console.log(a)
// }
// getUserI()

// async function getUserI1(){
//     try{
//         let a1 = await Promise.all([
//             p1,p2,p3,p4
//         ])
//         console.log(a1)
//     }
//     catch{
//         console.log('Error Handles')
//     }
//     console.log('Executing second')
// }
// getUserI1()

// async function getUserI2(){
//     let a2 = await Promise.allSettled([
//         p1,p2,p3,p4
//     ])
//     console.log(a2)
//     a2.forEach(function(el){
//         if(el.status === "rejected"){
//             console.log('run for any failed state')
//         }
//     })
// }
// getUserI2()


// async function getUserI3(){
//     try{
//         let a3 = await Promise.race([
//             p1,p2,p3,p4
//         ])
//         console.log(a3)
//     }
//     catch{
//         console.log('Error state')
//     }
// }
// getUserI3()

async function getUserI4(){
    let a4 = await Promise.any([
        p1,p2,p3,p4
    ])
    console.log(a4)
}
getUserI4()