/**
 *  ? This is regular object
 */
 var person1 = {
    id: 1,
    firstName: "Scott",
    lastName: "Desatnick"
}

/**
 *  ? This is valid JSON object
 *  * all properties must be wrapped with in double quotes
 */
 var person2 = {
     "id" : 1,
    "firstName": "Scott",
    "lastName": "Desatnick"
}

console.log(person1)
console.log(person2)


var student = {
    id: 1,
    name: "adam"
}

var JSONStringify = JSON.stringify(student)

console.log(JSONStringify, typeof JSONStringify)

var JSONParse= JSON.parse(JSONStringify)

console.log(JSONParse, typeof JSONParse)
