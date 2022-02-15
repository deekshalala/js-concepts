// function a(){
//     var c =2 // private variable
//     b()
// }

// function b(){
//     var c =3// private varaible

//     var sample = function(){ // private function
//         console.log(c)
//     }
//     sample()
// }

// var c =1
// a()

// console.log(c)

function b(){
    var myvar
    console.log(myvar)
}

function a(){
    var myvar =2
    console.log(myvar)
    b()
}

var myvar =1;
console.log(myvar)
a()
console.log(myvar)

// 1 , 2 , undefined, 1