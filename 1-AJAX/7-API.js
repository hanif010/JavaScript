// Api to get single user   

function getuserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        // console.log(res)
        return res.json()
    })
    .then(function(res){
        // console.log(res.data)
        return res.data
    })
}
// getuserInfo(7)

async function getUserInfos(id,id2,id3){
    let a = await getuserInfo(id)
    let b = await getuserInfo(id2)
    let c = await getuserInfo(id3)
    console.log(a,b,c)
}
// getUserInfos(1,2,3)

async function getUsersinfo(id,id2,id3){
    let info = await Promise.all([
        getuserInfo(id),
        getuserInfo(id2),
        getuserInfo(id3)
    ])
    console.log(info)
}
getUsersinfo(1,2,3)

