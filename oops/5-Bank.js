// Progam (Bank)

class Bank {
    constructor(bal, accNo, city, branchN) {
        this.balance = bal
        this.accountNumbe = accNo
        this.city = city
        this.branchName = branchN
        this.transaction = []
    }


    withDrawl(amount) {
        if (amount < this.balance) {
            console.log('Withdrawl successful')
            this.balance = this.balance - amount
            this.transaction.push(-amount)
            return this.balance
        }
        else {
            console.log("Withdrawl unsuccessfull")
            return this.balance
        }
    }


    deposit(amount) {
        this.balance = this.balance + amount
        console.log("deposit successfull")
        this.transaction.push(amount)
        return this.balance
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }

    totalDeposit(){
        let TotalD = this.transaction.filter(function(el){
            return el > 0
        })
        console.log(TotalD)
        
        let TotalS = TotalD.reduce(function(acc,el){
            return acc + el
        },0)
        console.log("Deposit" + TotalS) 
    }


    totalWithdrawl(){
        let TotalW = this.transaction.filter(function(el){
            return el < 0
        })
        console.log(TotalW)
        
        let TotalSa = TotalW.reduce(function(acc,el){
            return acc + el
        }, 0)
        console.log("Withdrawl" + TotalSa)
    }


}

let Hanif = new Bank(1000,1234,"Pune","Kharadi")
console.log(Hanif)

let xyz = new Bank(2000,1235,"pune","Kharadi")
console.log(xyz)

let w1 = Hanif.withDrawl(100)
let w2 = Hanif.withDrawl(150)
let d1 = Hanif.deposit(1000)
let w3 = Hanif.withDrawl(150)
let d2 = Hanif.deposit(800)
let d3 = Hanif.deposit(8000)
let w4 = Hanif.withDrawl(150)
let d4 = Hanif.deposit(300)
let w5 = Hanif.withDrawl(150)
let d5 = Hanif.deposit(200)

xyz.deposit(2300)
xyz.deposit(700)


console.log(w1,w2,w3,w4,w5)
console.log(d1,d2,d3,d4,d5)
console.log(Hanif.transaction)
console.log(Hanif.balance)
console.log(Hanif)

let lf = Hanif.lastFiveTransaction()
console.log(lf)

// Total Deposit






Hanif.totalDeposit()
Hanif.totalWithdrawl()

xyz.totalDeposit()



