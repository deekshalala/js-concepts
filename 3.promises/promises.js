console.clear()

//console.log('Customer1')
//setTimeout(function(){
//    console.log('Customer2') 
//}, 3000)
//console.log('Customer3')

// Promise

// Get the data from database

function getdata(){
    return new Promise(function(resolve, reject){
          if(false)  {
              setTimeout(function(){
                  resolve('here is your data') 
              }, 3000)
                 
            } else {
                reject('Sorry no data')
             }
    })

}

getdata()
.then(function(data){  
    updateData(data)    
}).catch(function(data){
    console.log(data)
})


function updateData(data){
    console.log(data)
}

//function finalData(){
    
//}
// Modify the data and send to some other method