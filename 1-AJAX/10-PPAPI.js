// Parallel Promises Combinators

// function getUser1(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (res) {
//             if (res.ok) {
//                 return res.json()
//             }
//             else {
//                 return new Error('New Error Found')
//             }
//         })
// }

// async function getUsersA(id, id2, id3) {
//     try {
//         let a = await Promise.all([
//             getUser1(id),
//             getUser1(id2),
//             getUser1(id3)
//         ])
//         console.log(a)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// getUsersA(1, 2, 3)

function timeOut(sec){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject(new Error('Late to Response'))
        },sec*1000)
    })
}

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res.data
    })     
}
async function getUserInTime(id,sec){
    let a = await Promise.race([
        getUser(id),
        timeOut(sec)
    ])
    console.log(a)
}
getUserInTime(1,0.00001)
