/**
 * ? Join and Split methods
 */
 var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "Mars"]

 var movieString = movies.join(",")
 
 console.log(movieString, typeof movieString)
 
 var movieArray = movieString.split(",")
 
 console.log(movieArray, typeof movieArray)
 
 /**
  * ? push - Adds the new values at the end of an array
  * ? unshift - Adds the new values at the begining of an array
  * ? pop - Deletes the new values at the end of an array
  * ? shift - Deletes the new values at the begining of an array
  */
 
 var numbers = [1,2,3]
 
 
 numbers.push(4)
 numbers.push(5)
 numbers.push(6)
 
 numbers.unshift(0)
 numbers.unshift(-1)
 numbers.unshift(-2)
 
 numbers.pop()
 numbers.pop()
 numbers.pop()
 
 numbers.shift()
 numbers.shift()
 numbers.shift()
 
 console.log(numbers)
 
 
 /**
  * ? Spilce - Adds your element at specific location
  */
 
 var names = ["Scott", "Adam", "Tuan", "Daniel", "JP", "Elon Musk"]
 
 names.splice(3,0, "Uma") // Adding
 
 console.log(names) // ["Scott", "Adam", "Tuan", "Uma" "Daniel", "JP", "Elon Musk"]
 
 names.splice(5, 1) // Removing
 
 console.log(names)
 
 /**
  * ? Slice - Returns the copy of section of an array
  */
 
 var colors = ["orange", "yellow", "Blue" ,"Brown"]
 
 var slicedArray = colors.slice(0,3)
 
 console.log(slicedArray)
 console.log(colors)