// Function which is passed as a paramter to another function 
// is called callback function
function sample(value){
    console.log("first")
    value()
}

sample(function(){
    console.log("Sample func")
})