function getName () {
    return "Scott Desatnick"
}
var getName
console.log(getName, typeof getName)

 var getName = function() {
    return "Scott Desatnick"
}

console.log(getName())

var getFullName = function(firstname, lastName){
    return firstname + ',' + lastName
}

console.log(getFullName('Scott', 'Desatnick'))


//console.log(display()) will thorw error

var display = function (){
    return "This is display method"
}

//display= undefined
// display = function(){
//     return "This is display method"
// }

console.log(display())

//console.clear()
var display = function test(){
    return "This is display method"
}

test()

console.log(display)