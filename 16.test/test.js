console.log(
    multiply(2)(3)(4) //24
)

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

var a =10
var b = a

a =20
console.log(a)
console.log(b)

var a =[ 1,2]
var b = a

a.push(3)

console.log(a)
console.log(b)

var a =[1,2]
var b = a

a =[1,2,3]

console.log(a)
console.log(b)

var output = (function(x){
    delete x
    return x
})(0)

console.log(output)

var output = (function(x){
    delete x.a
    return x
})({a:1})

console.log(output)

var output = (function(x){
    delete x
    return x
})({a:1})

console.log(output)

var x =1
var output = (function(){
    delete x
    return x
})()

console.log(output)

// Empty an array
var array = ['a', 'b', 'c', 'd', 'e', 'f']

// Method1
//array =[]

//Method2
//array.length=0

// Method3
// while(array.length){
//     array.pop()
// }

// Method
array.splice(0, array.length)

console.log(array)

var count =1

var message = count > 0 ? "Hello" : "Hai"

console.log(message)