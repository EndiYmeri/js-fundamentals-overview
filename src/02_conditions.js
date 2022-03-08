/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
function getShorterString(str1, str2) {
    if (str1.length < str2.length) return str1
    if (str1.length > str2.length) return str2
    return "They're the same length!"
}
// 1.1 Call the function with "Bob" and "Steven" as arguments.
getShorterString("Bob", "Steven")

// 1.2. Call the function with "Henrica" and "Mark" as arguments.
getShorterString("Henrica", "Marc")

// 1.3. Call the function with any arguments we like to test the remaining use case.
getShorterString("One", "Guy")

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean
function checkDirtyBirds(birds) {
    let dirtyBirds = ["pigeon", "seagull", "bin chicken"]

    let dirtyBirdsCount = 0
    for (const bird of birds) {
        if (dirtyBirds.includes(bird)) dirtyBirdsCount++
    }
    if (dirtyBirdsCount === 1) return "Eww"
    if (dirtyBirdsCount === 2) return "Oh god"
    if (dirtyBirdsCount >= 3) return "Where the hell am I?"
    return "Birds are cute!"
}


// 2.1 Test all the scenarios by calling the function with different arguments.

checkDirtyBirds(["pigeon", "eagle", "crow"])
checkDirtyBirds(["pigeon", "seagull", "crow"])
checkDirtyBirds(["pigeon", "seagull", "bin chicken"])
checkDirtyBirds(["eagle", "crow"])