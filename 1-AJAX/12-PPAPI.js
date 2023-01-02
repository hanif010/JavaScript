// function getUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (res) {
//             if (res.ok) {
//                 return res.json()
//             }
//             else {
//                 return new Error('New error found')
//             }
//         })
// }


// Promise.all()
// async function getUsers(id, id2, id3) {
//     try {
//         let a = await Promise.all([
//             getUser(id),
//             getUser(id2),
//             getUser(id3)
//         ])
//         console.log(a)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// getUsers(1, 2, 33)

// Promise.race
function getUser1(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            if (res.ok) {
                return res.json()
            }
            else {
                return new Error('New error Found')
            }
        })
}

function timeOut(sec) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Too much time')
        }, sec * 1000)
    })
}

// async function getUsersB(sec,id){
//     try{
//         let b = await Promise.race([
//             getUser1(id),
//             timeOut(sec)
//         ])
//         console.log(b)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// getUsersB(1,1)

// Promise.allSettled()

// async function getUsersC(id,sec){
//     let c = await Promise.allSettled([
//         getUser1(id),
//         timeOut(sec)
//     ])
//     console.log(c)
// }
// getUsersC(1,1)

// Promise.any()

async function getUsersD(id, id2, sec) {
    let d = await Promise.any([
        timeOut(sec),
        getUser1(id),
        getUser1(id2)
    ])
    console.log(d)
}
getUsersD(1, 2, 3)
