var Module = (function(){

    var privateMethod = function(){
  
    }

    var someMethod = function(){

    }

    var anotherMethod = function(){

    }
    return {
        someMethod,
        anotherMethod
    }

})()

console.log(Module)


var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    var anotherMethod = function(){

    }
    return {
        publicMethod, anotherMethod
    }

})()
console.log(Module)
console.log(Module.publicMethod('Private method is called'))