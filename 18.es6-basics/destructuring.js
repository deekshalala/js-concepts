//Array Destructuring

let arr = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = arr

console.log(name1)
console.log(name2)
console.log(name3)


let names = ["Scott", "Adam", "Tuan"]

let [value1, , value3] = names

console.log(value1)
//console.log(value2)
console.log(value3)

// Split()

let [firstName, lastName] = "John Galt".split(' ')

console.log(firstName)
console.log(lastName)


let nestedArray = [1,2,[3,4]]

let [num1, num2, [num3, num4]] = nestedArray

//let [num4, num5] = num3

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
//console.log(num5)

// Object Destructuring

let user = {
    name: 'John',
    age: 30
}


for(var [key, value] of Object.entries(user)){
    console.log(`key : ${key}, value: ${value}`)
}

let options = {
    title: 'Menu',
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)