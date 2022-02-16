// ... spread

const odd = [1,3,5]

const combined = [2,4,6, ...odd]

console.log(combined)

// ... rest

function display(a,b,c, ...args){
    console.log(args)
}

display(1,2,3,4,5,6)

// Constructing array literal 

let initialChars = ['A', 'B']

let chars = ['$',...initialChars, 'C', 'D']

console.log(chars)

// concatenating arrays

let numbers = [1,2]
let mostNumbers = [3,4]

let allNumbers = [...numbers, ...mostNumbers]

console.log(allNumbers)

// copying an array

let scores = [80, 70, 90]
let copiedScores = [...scores]

console.log(copiedScores)

// Spread Operator and string 

let charsOne = ['A', ...'BCD', 'E']

console.log(charsOne)