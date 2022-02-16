class Student {
    count= 0
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    sample(){
        console.log(this)
        console.log(this.count)
        console.log(this.firstName)
        this.display()
        this.test()
        return 'This is sample'
    }

    display = function(){
        console.log(this)
        return 'This is display'
    }

    test = () => console.log(this)

}

let student1 = new Student('Scott', 'Desatnick')

console.log(student1)
console.log(student1.sample())
console.log(student1.display())
console.log(student1.test())