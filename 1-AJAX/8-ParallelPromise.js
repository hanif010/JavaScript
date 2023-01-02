// Parallel Promises

// Promise.All()
async function getuserss() {
    let data = await Promise.all([
        Promise.resolve("Hello"),
        Promise.resolve("Bye"),
        Promise.resolve("Hello2")
    ])
    console.log(data)
}
// getuserss()

// Promise combinators --- parallel

// Program 1 (Will get the output)

async function getuserss1() {
    let a = await Promise.all([
        Promise.resolve("Hello"),
        Promise.resolve("Hello"),
        Promise.resolve("Hi")
    ])
    console.log(a)
}
// getuserss1()

// Program 2 (Will not get the output)

async function getuserss2() {
    let b = await Promise.all([
        Promise.resolve("Hello"),
        Promise.reject("Bye"),
        Promise.resolve("Hello")
    ])
    console.log(b)
}
// getuserss2()

// Program 3
// Promise.allSettled()

async function getuserss3() {
    let c = await Promise.allSettled([
        Promise.resolve("Hello"),
        Promise.reject("Bye"),
        Promise.resolve("Hello1"),
        Promise.reject("Bye1")
    ])
    // console.log(c)
}
// getuserss3()

// Program 4
// Promise.race()

async function getuserss4() {
    let d = await Promise.race([
        new Promise(function (reject) {
            setTimeout(function () {
                reject("Bye")
            }, 000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("Hello")
            }, 2000)
        })
    ])
    console.log(d)
}
// getuserss4()

// Program 5
// Promise.any()

async function getuserss5() {
    let e = await Promise.any([
        new Promise(function (reject) {
            setTimeout(function () {
                reject("Bye1")
            }, 1000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject("Bye2")
            }, 2000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("Hello")
            }, 3000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("Hello1")
            }, 4000)
        })
    ])
    console.log(e)
}
getuserss5()