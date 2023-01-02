// ES6 Class

class Person{
    firstname = "Hanif"
    lastname = "Aj"
    age = 23
    skills = ["Javascript","Cypress"]
}

let amol = new Person()
console.log(amol)

let Chinmay = new Person()

Chinmay.firstname = "Chinmay"
Chinmay.lastname = "Deshpande"
Chinmay.age = 32
Chinmay.skills = ["Python","Javascript","Cypress"]
console.log(Chinmay)

// Program 2 

let PersonB = class{
    constructor(fn,ln,ag,sks){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.skills = sks
    }
}

let Zakir = new PersonB("Zakir","Torgal",28,["C-Pro","C++"])
console.log(Zakir)


let Group = [
    new PersonB("Ram","Natikar",30,["Vhdl","c pro"]),
    new PersonB("Omkar","K",31,["Vhdl","c pro"]),
    new PersonB("Sagar","Talwar",26,["Vhdl","c pro"]),
    new PersonB("Aftab","Shaikh",32,["Java","c pro"]),
    new PersonB("Ram2","Natikar2",30,["Vhdl","c pro"])
]
console.log(Group)

Group.forEach(function(el){
    for(let key in el){
        console.log(key,el[key])
    }
})

// Program 3 

class PersonC {

    // SET
    setFirstName(str){
        this.firstname =str
    }

    setLastName(str){
        this.lastname=str
    }

    setAge(ag){
        this.age = ag
    }

    setSkills(sks){
        this.skills = sks
    }

    // GET

    getFirstName(){
        console.log(this.firstname)
    }

    getLastName(){
        console.log(this.lastname)
    }

    getAge(){
        console.log(this.age)
    }

    getSkills(){
       console.log(this.skills)
    }

}

let Hanif1 = new PersonC()
console.log(Hanif1)


// Set
Hanif1.setFirstName("Hanif")
Hanif1.setLastName('Aj')
Hanif1.setAge(23)
Hanif1.setSkills(["JavaScript","Cypress"])
console.log(Hanif1)

// Get

Hanif1.getFirstName()
Hanif1.getLastName()
Hanif1.getSkills()
Hanif1.getAge()
