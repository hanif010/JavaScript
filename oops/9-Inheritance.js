
// Program -1

class GrandFather {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    displayName() {
        console.log(this.firstname + " " + this.lastname)
    }
}

class Father extends GrandFather {
    constructor(firstname, lastname, FatherName) {
        super(firstname, lastname)
        this.FatherName = FatherName
    }
    displayfatherName() {
        console.log(this.FatherName + " " + this.lastname)
        super.displayName()
    }
}

class Son extends Father {
    constructor(firstname, lastname, FatherName, sonname) {
        super(firstname, lastname, FatherName)
        this.sonname = sonname
    }
    displaysonName() {
        console.log(this.sonname + " " + this.lastname)
        super.displayfatherName()
    }
}

let chinmay = new Son("Manohar", "Deshpande", "Shirish", "Chinmay",)

// chinmay.displaysonName()


// Program -2

class FatherA {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    displayName() {
        console.log(this.firstname + " " + this.lastname)
    }
}

class SonA extends FatherA {
    constructor(firstname, lastname, sfName) {
        super(firstname,lastname)
        this.sfName = sfName
    }
    displaysonName() {
        console.log(this.sfName + " " + this.lastname)
    }
}

class DaughterA extends SonA {
    constructor(firstname, lastname, dfName) {
        super(firstname, lastname)
        this.dfName = dfName
    }
    displayDFName() {
        console.log(this.dfName + " " + this.lastname)
    }
}

let ShirishA = new FatherA("shirish", "deshpande")
ShirishA.displayName()
let ChinmayA = new SonA("shirish", "deshpande", "chinmay")
ChinmayA.displaysonName()
let GauriA = new DaughterA("shirish", "deshpande", "gauri")
GauriA.displayDFName()
