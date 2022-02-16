console.log(this)

function sample(){
    console.log(this)
}

sample()

var obj = {
    id: 1, 
    name: "uma",
    getName: function(){
        console.log(this)
        var self = this
        console.log(self)
        self.name ="mahesh"
        console.log(self)

        var changeName = function(){
            self.name ="umesh"
            console.log(self)

            var updateName = function(){
                self.name = "umamahesh"
                console.log(self)
            }

            updateName()
        }

        changeName()
    }
}

console.log(obj)
console.log(obj.getName())