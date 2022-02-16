class Shape{
    constructor(){

    }
    draw(){
        return "This is a genric shape"
    }
}

class Square extends Shape{
    constructor(){
        super()
    }

    draw(){
        return "This is a Sqaure" 
    }
}

let squre = new Square()
console.log(squre.draw())