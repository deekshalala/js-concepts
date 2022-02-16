// function Student(){
//     console.log('Student.created')
// }


// var student1 = new Student()
// var student2 = new Student()
// var student3 = new Student()
// var student4 = new Student()
// var student5 = new Student()
// var student6 = new Student()
// var student7 = new Student()

// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)
// console.log(student5)
// console.log(student6)

var Singleton =(function(){
    var instance = null;

    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Object is created')
        return obj
    }

    var getInstance = function(){
        if(!instance){
            instance = createInstance()
        }
        return instance
    } 

    var obj = {
        createObject: getInstance
    }

    return obj
})()

var singleton1 = Singleton.createObject()
var singleton2 = Singleton.createObject()
var singleton3 = Singleton.createObject()
var singleton4 = Singleton.createObject()

singleton1.name = 'Scott'
// student1.city = 'Boston'


singleton2.name ='Adam'
// student2.city ='Sydney'

console.log(singleton1)
console.log(singleton2)
console.log(singleton3)
console.log(singleton4)