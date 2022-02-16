// function greet(){
//     console.log("Welcome to regular functions")
// }

// greet()

function getFullName(firstname, lastName){
    console.log('First function is executed')
    var fName = firstname
    var lName = lastName
    return fName + ' ' + lName
}

function getFullName(firstname, lastName, optional){
    console.log('Second function is executed')
    var fName = firstname
    var lName = lastName
    console.log(optional)
    return fName + ' ' + lName 
}
function getFullName(){
    console.log('third function is executed')
    // var fName = firstname
    // var lName = lastName
    // console.log(optional)
    // return fName + ' ' + lName 
}

console.log(getFullName("Scott", "Desatnick", "Tuan"))
console.log(getFullName("Adam", "Colson"))
console.log(getFullName("Tuan", "Bui"))

// Function always reurns a value
// if you return the value explicitly it wuld return the same value
// else it would return undefined

function getMessage(message,name){
    //return message + ' ' + name

}

var message = getMessage("Welcome", "Scott")
console.log(message)


function sayHello(message, name1, name2, name3){
    return message + ' ' + name1 + ', ' + name2 + ' and ' + name3
}

console.log(sayHello("Hello Dear,", "Scott", "Adam", "Tuan"))