// Problem 
var employee = {
    id: 1,
    greet : function(){
        console.log(this)
        setTimeout(function(){
            console.log(this)
            console.log(this.id)
        }, 1000)
        
    }
}

employee.greet()

// Using a variable called self

var employee = {
    id: 1,
    greet : function(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log(self.id)
        }, 1000)
        
    }
}

employee.greet()

// Using bind 
var employee = {
    id: 1,
    greet : function(){
        console.log(this)
        setTimeout(function(){
            console.log(this)
            console.log(this.id)
        }.bind(this), 1000)
    }
}

employee.greet()

// Fat Arraow function 

var employee = {
    id: 1,
    greet : function(){
        
        var display = () =>{
            console.log(this)
            console.log(this.id)
        }

        display()
    }
}

employee.greet()

var employee = {
    id: 1,
    greet : function (){
        console.log(this)
        setTimeout(() =>{
            console.log(this)
            console.log(this.id)
        }, 1000)
        
    }
}

employee.greet()

function sample(){
    console.log(this)
}

sample()