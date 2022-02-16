var person = Object.create(null) // Creaeting a object without prototype
//var person = Object.create({}) // Creaeting a object with prototype
// var personPrototype = {}
// var person =Object.create(personPrototype)

console.log(person)
person["firstName"] = "Scott"
person["lastName"] ="Desatnick"
var cityName = "city"
person[cityName] = "Boston"

person.email = "scott@ef.com"

person.address = new Object()

person.address.street = "1st Main" 
person.address.state = "Massachusetts"

// Object.defineProperty(person, 'age', {value:45})
// Object.defineProperty(person, 'country', {value:"USA"})

// Object.defineProperties(person, {
//     newValue1 : {
//         value: 'value1'
//     },
//     newValue2 : {
//         value: 'value2'
//     }
// })

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.address)

console.log(person["address"]["street"])
console.log(person["address"].state)
console.log(person.address.street)
console.log(person.address.state)