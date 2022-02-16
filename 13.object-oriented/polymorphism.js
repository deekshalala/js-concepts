// function Hello(value1, value2){return value1 + value2 }
// function Hello(value1, value2, value3){return value1 + value2 + value3}
// function Hello(value1){return value1}


// Hello(1,2,3)

// Shape
function Shape(){

}

Shape.prototype.info = "Always use parent Class"

Shape.prototype.draw = function(){
    return "I am generic shape"
}

// Circle

function Circle(){

}

Circle.prototype = new Shape()

Circle.prototype.draw = function(){
    return "I am a circle"
}

// Sqaure

function Sqaure(){

}

Sqaure.prototype = new Shape()
Sqaure.prototype.draw = function(){
    return "I am a sqaure"
}

// Triangle

function Triangle(){

}

Triangle.prototype = new Shape()
// Triangle.prototype.draw = function(){
//     return "I am a triangle"
// }

var shape = new Shape()
console.log(shape.info)
console.log(shape.draw())

var circle = new Circle()

//circle.info = 'I am overriding parents info'
console.log(circle.info)
console.log(circle.draw())

var sqaure = new Sqaure()
console.log(sqaure.draw())

var triangle = new Triangle()
console.log(triangle.draw())