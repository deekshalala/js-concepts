(function sample(){
    console.log('Hello')
})();

(function sample(message){
    console.log(message)
})('Welcome to IIFs');

console.log(fullName) // undefined
var fullName = (function getFullName(firstname, lastName){
                    return firstname + ' ' + lastName
                })('Scott', 'Destanick')

console.log(fullName)

var getFullname = (function getFullName(firstname, lastName){
    return firstname + ' ' + lastName
})('Scott', 'Destanick')

console.log(getFullname)