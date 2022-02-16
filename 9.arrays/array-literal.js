var people = [] // Array literal Syntax

people[0] = "Scott"
people[1] = "Adam"
people[2] = "Tuan"
console.log(people)
console.log(people.length)

var customer = []

customer[0] = "Uma"
customer[1] = "Siva"
customer[2] = "Sudheer"
customer[3] = "Sundar"
customer[5] = "ByreGowda"
console.log(customer)

console.log(customer[0])
console.log(customer[1])
console.log(customer[2])
console.log(customer[3])
console.log(customer[4])
console.log(customer[5])

var items = ["Desktop", "Laptop", "Mobile"]

items[3]="iPad"
console.log(items.length)
console.log(items)


var fruits = ["Orange", "Apple", "Banana", "Guava"]
var vegetables = ["Potato", "Tomato", "Brinjal", "Drumstick"]

var all = fruits.concat(vegetables)

console.log(all)

var all1 = vegetables.concat(fruits)
console.log(all1)