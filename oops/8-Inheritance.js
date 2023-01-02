
// Program 1

class student {
    fullname = "Hanif Jamadar"
    IdNo = 987654

    displayName(){
        console.log(this.fullname)
    }
}

class Teacher extends student{

    salary = 1000
}

class Professor extends Teacher{

    subjet = "Maths"
}

let hanif = new Professor()
console.log(hanif.fullname)
console.log(hanif.IdNo)
hanif.salary = 20000
console.log(hanif.salary)
console.log(hanif.subjet)

// Method()

hanif.displayName()

let asif = new Teacher()
console.log(asif.salary)


// Inheritance

console.log(asif.fullname)
console.log(asif.IdNo)

asif.displayName()

// Program -2 (Parent has constuctor and child has no constructor)

class Student1{
    constructor(fn,ln,id){
        this.firstname = fn
        this.lastname = ln
        this.id = id
    }
    displayName1(){
        console.log(this.firstname + this.lastname)
    }
}

class Teacher1 extends Student1{
    salary = 15000
}

let amol = new Teacher1("Amol","Rao")
console.log(amol.firstname)
console.log(amol.lastname)
console.log(amol.salary)
amol.displayName1()


// Program 3 (Parent is Having Constructor and child also has Constructor)

class Student2 {
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    displayName(){
        console.log(this.firstname +" " + this.lastname)
    }
}

class Teacher2 extends Student2{
    constructor(firstname,lastname,salary){
        super(firstname,lastname)
        this.salary = salary
    }
}

let chinmay = new Teacher2("Chinmay","Deshpande",12000)

console.log(chinmay.firstname)
console.log(chinmay.lastname)
console.log(chinmay.salary)

chinmay.displayName()







