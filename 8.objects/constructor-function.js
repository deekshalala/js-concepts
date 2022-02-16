function Student(firstName, lastName){
    this.fName = firstName
    this.lName = lastName
    this.getFullName = function(){
        //console.log(this)
        return this.fName + ' ' + this.lName
    }
}

var student = new Student("Scott", "Desatnick")

console.log(student)
console.log(student.getFullName())