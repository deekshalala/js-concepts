function Sample(){
    var foo="Blue"
    console.log(foo)
}

Sample()

//console.log(foo) ReferenceError: foo is not defined

function test(){
    if(true){
        var foo ='Hello'
        let bar = 'How are you ?'
        const baz = 'I am fine'

        console.log(foo) // Hello
        console.log(bar) // How are you ?
        console.log(baz) // I am fine
    }
    console.log(foo) // Hello
    //console.log(bar) // ReferenceError: bar is not defined
    // console.log(baz) //ReferenceError: baz is not defined

}

test()

// for(var count=0; count<3;count++){
//     console.log(count)
// }

// console.log(count)

// for(let count=0; count<3;count++){
//     console.log(count)
// }

// console.log(count) // ReferenceError: count is not defined

// Redefining

function display(){
    let foo =1
        foo =100

    const bar = 20
        //bar = 30
        // const bar=80
    //let foo =101 // Error : Identifier 'foo' has already been declared
    console.log(foo)
    console.log(bar)
}

display()

// const USER_API = ""
// const DBSOURCE = ""
// const USERNAME = ""
// const PASSWORD = ""
// const FILE_PATH = ""

const names = ['Scott', 'Adam', 'Tuan']
names.push('Uma')

console.log(names)