// AJAX

function additionA() {
    console.log("A is called")
}

function additionB() {
    console.log("B is called")
}

additionB()
additionA()

function additionC() {
    setTimeout(function () {
        console.log("C is called")
    }, 1000)
}

function additionD() {
    console.log("D is called")
}

// additionC()
// additionD()

// Program 1

function GetuserInfoDisplay() {
    setTimeout(function () {
        console.log("User Created")
    }, 3000)

    setTimeout(function () {
        console.log("Get info by ID")
    }, 2000)

    setTimeout(function () {
        console.log("Display User info")
    }, 1000)
}
// GetuserInfoDisplay()

// Call back Hell

function getinfodisplay() {
    setTimeout(function () {
        console.log('User Created')
        setTimeout(function () {
            console.log('Get ID for User')
            setTimeout(function () {
                console.log("Get info for User")
            },1000)
        },2000)
    },3000)
}
getinfodisplay()