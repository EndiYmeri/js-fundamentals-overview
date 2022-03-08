/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
const getMyname = () => {
    return "Endi"
}


// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.
function add(num1, num2) {
    return num1 + num2
}

// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"
function subtractWithCheck(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 - arg2
    } else return "Yo dawg you can't subtract us!"
}


// 4. now call the functions with some arguments of your choice.
// 4.1 assign results to variables.
// 4.2 print the results to the console.
const result1 = subtractWithCheck(1, 2)
const result2 = subtractWithCheck(2, 1)
const result3 = subtractWithCheck(1, 1)
const result4 = subtractWithCheck("1", 1)
console.log(result1, result2, result3, result4)


// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }

function getAge(person) {
    return `${person.name} is ${2022 - person.bornIn}`
}

// 5.1 Call the function with a person argument of your choosing.
getAge({ id: 1, bornIn: 1996, name: "John" })

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.

function getGreet(name, shouldCapitalise) {
    if (shouldCapitalise) return `Hello, ${name.toUpperCase()}!`
    return `Hello, ${name}!`
}

// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it
console.log(getGreet(getMyname(), true))