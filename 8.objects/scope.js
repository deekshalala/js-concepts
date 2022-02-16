var person = {
    name: 'Scott',
    email: 'scott@ef.com',
    age: 45
}

person.city = 'Boston'  // CREATE
person.name ='Desatnick' // UPDATE
delete person.age // DELETE
console.log(person) // READ

/**
 * ? Object.preventExtensions
 * ? You can update and delete the existing properties
 * ? you can't add new properties
 */
 var personPreventExtensions = {
    name: 'Scott',
    email: 'scott@ef.com',
    age: 45
}

 Object.preventExtensions(personPreventExtensions)

personPreventExtensions.city = 'Boston'  // CREATE
personPreventExtensions.name ='Desatnick' // UPDATE
delete personPreventExtensions.age // DELETE
console.log(personPreventExtensions) // READ

/**
 * ? Object.seal
 * ? You can't add new property and delete the existing properties
 * ? but you can update the existing property
 */
 var personSeal = {
    name: 'Scott',
    email: 'scott@ef.com',
    age: 45
}

 Object.seal(personSeal)

personSeal.city = 'Boston'  // CREATE
personSeal.name ='Desatnick' // UPDATE
delete personSeal.age // DELETE
console.log(personSeal) // READ

/**
 * ? Object.freeze
 * ? You can't add new property 
 * ? You can't delete the existing property
 * ? you can't update the existing property
 */
 var personFreeze = {
    name: 'Scott',
    email: 'scott@ef.com',
    age: 45,
    address: {
        state: 'Massachhusets'
    }
}

Object.freeze(personFreeze)
Object.freeze(personFreeze.address)
personFreeze.city = 'Boston'  // CREATE
personFreeze.name ='Desatnick' // UPDATE
delete personFreeze.age // DELETE
personFreeze.address.state ='New York'
console.log(personFreeze) // READ

var data1 = JSON.stringify(personFreeze)
var data2 = JSON.parse(data1)
data2.name='Desatnick'
console.log(data2)