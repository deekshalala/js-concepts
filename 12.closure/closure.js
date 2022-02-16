function greet(message){
    var city = 'Hyderabad'
    return function hello(name){
        return message + ' ' + name + ' to ' + city
    }
}

var sayHello = greet('Welcome')
var wish1 = sayHello('Scott')
var wish2 = sayHello('Adam')
var wish3= greet('dee')
console.log(wish1)
console.log(wish2)
console.log(wish3)