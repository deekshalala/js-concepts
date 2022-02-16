let simple = 'This is a string \n' + 
            'defined with single quotes \n' + 
            'defined with single quotes ' 

console.log(simple)

let user = "Scott"
let city = "Boston"

console.log('user: %s, city: %s', user, city)

let btSimple = `This is string 
with line breaks 
and also we can inject dynamic 
values to this string. for example let us display user and city
user: ${user} city: ${city}`

console.log(btSimple)

let firstName = 'Scott'
let lastName = 'Desatnick'

let fullName = `${firstName} ${lastName}`
console.log(fullName)