
// Program - 1
// polymorphism -overlaoding

class Calculator {

    addition(w, x, y, z) {

        if (w != undefined && x != undefined && y != undefined && z != undefined) {
            console.log(w + x + y + z)
        }

        else if (w != undefined && x != undefined && y != undefined) {
            console.log(w + x + y)
        }

        else if (w != undefined && x != undefined) {
            console.log(w + x)
        }
    }
}

let a = new Calculator()
a.addition(12,96)
a.addition(25,36,58)
a.addition(25,36,47,58)

// Program -2

class WorldBank{

    loan(){
        console.log("I am Loan From WorldBank")
    }

    save(){
        console.log("I am Save from WorldBank")
    }
}

class SBI extends WorldBank{

    loan(){
        console.log("I am Loan from SBI")
    }

    save(){
        console.log("I am save from SBI")
    }

    branchname(){
        console.log("SBI Main branch")
    }
}

let sbi = new SBI()


sbi.loan()
sbi.save()
sbi.branchname()