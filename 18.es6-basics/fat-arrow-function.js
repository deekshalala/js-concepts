let add = function(x, y){
    return x + y
}

console.log(add(10,20))

let sum = (x,y) => {
    return x+y
}

console.log(sum(30,20))


let sumOne = (x,y) => {
    var a =10
    var b =20
    return x+y +a +b
}

console.log(sumOne(30,40))

let sumTwo = (x,y) => { return x+y}

console.log(sumTwo(30,20))

/**
 *  ? () => expression : () => x+y
 *  ? () => {return expression} : () => {return x +y}
 */

// sort an array

let numbers = [4,2,6]

numbers.sort(function(a, b){
    return b-a
})

console.log(numbers)

let values = [4,2,6]

values.sort((a, b) => b-a)

console.log(values)

/**
 *  ? (parameter) => 
 *  ?  parameter  =>
 */

let names = ['Scott', 'Adam', 'Tuan', 'Mahesh']

let lengths = names.map(name => name.length)

console.log(lengths)

// With No Parameter

let logDocument = () => console.log(window.document)
logDocument()

// Line Break 

// let multiply = (x,y)   // Invalid Syntax
// => x*y

let multiply =(x,y) =>
x*y

console.log(multiply(4,5))

// Object literal 

// let setColor = function(color){
//     return {value: color}
// }

let setColor = (color) => ({value: color})

let backGroundColor = setColor('blue')
console.log(backGroundColor)