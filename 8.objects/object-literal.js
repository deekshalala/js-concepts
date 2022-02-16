var person = {} // Object literal Syntax

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



var student = {
    id: 1, // number
    name: "Tuan", // string
    isActive : true, // boolean
    info: undefined, // undefined
    details: null,  // null
    getName: function(){}, // function which is of type Object
    adress: {
        
    }, // this is object
    marks: [] // this is an array which is of type Object
}
console.log(student)

var customer = {
    firstName: "Scott",
    lastName: "Desatnick",
    getFullName: function(){
      return this.firstName + " " + this.lastName
    }
}

console.log(customer)
console.log(customer.getFullName())