function Student(firstName, lastName){
    this.firstname = firstName
    this.lastName = lastName
}

Student.prototype.getFullName = function(message){
  return  this.firstname + ' ' + this.lastName
}

Student.prototype.city = "Boston"

var student1 = new Student("Scott", "Desatnick")
var student2 = new Student("Adam", "Colson")
var student3 = new Student("Tuan", "Bui")

student3.city ='Delhi'
console.log(student1)
console.log(student2)
console.log(student3)


console.log(student3.getFullName())
console.log(student3.city)

// Never use __proto__ ever
console.log(Student.prototype)
console.log(student3.prototype)
console.log(student3.__proto__)

student3.__proto__.city = 'Hyderabad'

console.log(typeof Student.prototype)
console.log(typeof student3.__proto__)

console.log(Student.prototype === student3.__proto__)

// student1.__proto__.getFullName = function(){

// }