function Person(){
    // this.firstName = firstName
    // this.lastName = lastName
}

Person.prototype. getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

function Student(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

// Inherit the properties from Parent
Student.prototype = new Person()


Student.prototype.getAge = function(){
    return 'Age is: ' + this.age
}

console.log(Student.prototype)

var student = new Student('Scott', 'Desatnick', 45)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.getFullName())
console.log(student.getAge())