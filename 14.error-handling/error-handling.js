// try - catch - finally

try {
    // code that may thor error
} catch (ex) {
    // Code to be executed if an error occurs
} finally {
    // code be executed regardless of errors
    // Close your DB Connections
    // Network Connections
    // File Connections
    // Cleanup code
}

try {
    var output = getMessage('Hello', 'Uma')
    console.log('This is try block')
} catch(ex){
    console.log(ex.name)
    console.log(ex.message)
    console.log({
        name: ex.name,
        message: ex.message
    })
} finally {
    console.log('This will execute always')
}

// throw 
// try {
//     throw 'Error Occured'
// } catch (excpetion) {
//     console.log(excpetion)
// }

// Get StudentById - single record
try {
    //var output = getMessage('Hello', 'Uma')
    var studentCount =2
    if(studentCount ===1)  {
        console.log('Got the student Record')
    } else {
        var error = new Error('Multiple students returned for this Id')
        error.id =101
        error.status = 500
        throw  error
    }

    var output = getMessage('Hello', 'Uma')
} catch (ex){
    console.log(ex.name)
    console.log(ex.id)
    console.log(ex.message)
    console.log(ex.status)
}