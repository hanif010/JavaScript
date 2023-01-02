// Hit APIs 

function getuser(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(res){
        // console.log(res)
        return res.json()
    })
    .then(function(resp){
        // console.log(resp)
        return resp
    })
}
// getuser(2)

function getsingleuser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        // console.log(res)
        return res.json()
    })
    .then(function(resp){
        // console.log(resp)
        return resp
    })
}
// getsingleuser(7)

getuser(2)
.then(function(res){
    // console.log(res)
    let id = res.data[1].id
    return id
})
.then(function(id){
    // console.log(resp)
    let user = getsingleuser(id)
    return user
})
.then(function(resA){
    console.log(resA.data)
})

