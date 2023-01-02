// async Parallel execution

function one() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('One')
        }, 1000)
    })
}

function two() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Two')
        }, 1000)
    })
}

function three() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Three')
        }, 1000)
    })
}

function four() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Four')
        }, 1000)
    })
}

// Promise.all()

// async function getUser1() {
//     try {
//         let a = await Promise.all([
//             one(),
//             two(),
//             three(),
//             four()
//         ])
//         console.log(a)
//     }
//     catch {
//         console.log('Error')
//     }
// }
// getUser1()

// Promise.allSettled()

// async function getUser2(){
//     let b = await Promise.allSettled([
//         one(),
//         two(),
//         three(),
//         four()
//     ])
//     console.log(b)
// }
// getUser2()

// Promise.race()

function five() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Five')
        }, 1000)
    })
}

function six() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Six')
        }, 100)
    })
}

// async function getUser3() {
//     try {
//         let c = await Promise.race([
//             five(),
//             six()
//         ])
//         console.log(c)
//     }
//     catch {
//         console.log("Error 12")
//     }
// }
// getUser3()

// Promise.any()

async function getUser4(){
    try{
        let d = await Promise.any([
            four(),
            five(),
            six(),
            one()
        ])
        console.log(d)
    }
    catch{
        console.log('Error 23')
    }
}
getUser4()