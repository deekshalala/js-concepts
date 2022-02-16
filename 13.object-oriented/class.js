// Class
function Student(){

}

// Instance
function Person(){

}

// person1 person 2 are called 
// objects or instances
var person1 = new Person()
var person2 = new Person()
console.log(person1)
// Constructor

function Order(){
    console.log('Order is initiated')
}

var order = new Order() // Order() is called contructor

// property

function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer('Female')
var customer2 = new Customer('Male')

console.log(customer1)
console.log(customer2)