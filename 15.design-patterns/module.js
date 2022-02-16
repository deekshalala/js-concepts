var Module = (function(){

    var privateMethod = function(){

    }

})()

console.log(Module)

// Use return 

var Module = (function(){

    var privateMethod = function(){

    }

    return privateMethod

})()

console.log(Module)

var Module = (function(){
    return {
        publicMethodOne : function(){

        },
        publicMethodTwo : function(){

        },
        publicMethodThree : function(){

        },
    }

})()

console.log(Module)

// Locally Scoped Object

var Module = (function(){
    var myObject = {}

    var privateMethod = function(){

    }

    myObject.publicMethodOne = function(){

    },
    myObject.publicMethodTwo = function(){

    },
    myObject.publicMethodThree = function(){

    }

    return myObject

})()

console.log(Module)

var Module = (function(){

    var privateMethod = function(){
  
    }

    var myObject = {
        someMethod: function(){},
        anotherMethod: function() {}
    }

    return myObject

})()

console.log(Module)