var names = ["Scott", "Adam", "Tuan"]

console.log('********* Using Index*********')
console.log(names[0], 0)
console.log(names[1], 1)
console.log(names[2] ,2)

// for loop 
console.log('********* Using for Loop *********')
for(var i=0; i<names.length; i++){
    console.log(names[i], i)
}

// forEach
console.log('********* Using forEach*********')
names.forEach(function(name, index){
    console.log(name, index)
})

// map
console.log('********* Using map*********')
names.map(function(name, index){
    console.log(name, index)
})

// forEach
console.log('********* Using forEach*********')
var namesUsingForEach =  names.forEach(function(name, index){
                            return name
                        })

// map
console.log('********* Using map*********')
var namesUsingMap =  names.map(function(name, index){
                        return {name:name, index: index}
                    })

console.log(namesUsingForEach)
console.log(namesUsingMap)

// ES6 
console.log('********* Using for of*********')
for(var name of names){
    console.log(name)
}

console.log('********* Using for of*********')
for(var index in names){
    console.log(index)
}
console.log(names.entries())
for(var [index, name] of names.entries()){

    console.log(name, index)
}