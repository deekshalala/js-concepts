var person1 = {name: 'Scott', email:'scott@ef.com'}
var person2 = {name: 'Adam', email:'adam@ef.com'}
var person3 = {name: 'Tuan', email:'tuan@ef.com'}

function displayUser(message, city){

    return message + ' to ' + city + ' Mr.' + this.name + ' ' + this.email
}

//displayUser()

var displayBind = displayUser.bind(person1)

console.log(displayBind('Welcome', 'Boston'))

var displayBindOne = displayUser.bind(person1, 'Welcome', 'Boston')

console.log(displayBindOne())

var displayCall = displayUser.call(person2, "Welcome", "Sydney")

console.log(displayCall)


var displayApply = displayUser.apply(person3, ["Welcome", "Vietnam"])

console.log(displayApply)


var student = {
    id: 1, 
    name: "uma",
    getName: function(){ 
        console.log(this)
        this.name ="mahesh"
        console.log(this)

        var changeName = function(){
            this.name ="umesh"
        }.bind(this)

        changeName()
        console.log(this)
        //changeName.bind(this)()

        return this
    }


}

console.log(student)
console.log(student.getName())