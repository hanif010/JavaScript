// SET

let setA = new Set([1,2,3,4,5,6])
console.log(setA)

let setB = new Set("Chinmay")
console.log(setB)

let setC = new Set()
console.log(setC)
console.log(typeof setC)

// ===========================================

// Object

let setD = new Set()

// Size
console.log(setD.size)

// Method
console.log(setD)

// Add

setD.add('apple')
console.log(setD)
console.log(setD.size)
setD.add('apple')
console.log(setD)
setD.add('grapes')
console.log(setD)

// Has()

let q1 = setD.has('apple')
console.log(q1)
let q2 = setD.has('chickoo')
console.log(q2)

// Delete()

let q3 = setD.delete('apple')
console.log(q3)
console.log(setD)

// Clear()

setD.clear()
console.log(setD)

// ======================================================>>>

let setE = new Set(["Apple", "chickoo","Banana"])
console.log(setE)

console.log(setE[0])

// SET Loop

setE.forEach(function(el){
    console.log(el)
})