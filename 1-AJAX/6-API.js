// Program 

function getUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            // console.log(res)
            return res.json()
        })
        .then(function (res) {
            // console.log(res.data[0].id)
            return res.data[0].id
        })
}
// getUser(2)

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            // console.log(res)
            return res.json()
        })
        .then(function (res) {
            // console.log(res.data)
            return res.data
        })
}
// getSingleUser(7)

function renderHtml(obj) {
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<img src = ${obj.avatar}>`)
}

getUser(2)
.then(function(id){
    return getSingleUser(id)
})
.then(function(res){
    // console.log(res)
    renderHtml(res)
})