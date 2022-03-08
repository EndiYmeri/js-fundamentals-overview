/**
 * This is a test to see how well you understand loops in javascript.
 *
 */

// This is sample data. Don't modify it. You will need to use it though:
const Elidon = Object.freeze({
    name: "Elidon",
    id: 1,
    hobbies: ["Memes", "Ed's haircut", "Visard's jokes"]
});
const Artiola = Object.freeze({
    name: "Artiola",
    id: 2,
    hobbies: ["Cats", "Chatting"]
});
const Marsel = Object.freeze({
    name: "Marsel",
    id: 3,
    hobbies: ["Basketball", "Being pretty tall"]
});
const Visard = Object.freeze({
    name: "Visard",
    id: 4,
    hobbies: ["Fishing", "Real estate", "Being very freaking tall"]
});
const Rinor = Object.freeze({
    name: "Rinor",
    id: 5,
    hobbies: ["Dogs", "Teaching", "Challenging himself"]
});

const data = Object.freeze({
    people: [Elidon, Artiola, Marsel, Visard, Rinor]
});

// 1. Print out the name of each person in the data object.
for (const person of data.people) {
    console.log(person.name)
}

// 1.1 There are many ways to achieve the above. Try to think of another way.
data.people.forEach((person) => console.log(person.name))


// 2. Count the total number of hobbies
let hobbyCounter = 0
data.people.forEach((person) => hobbyCounter += person.hobbies.length)
console.log("Total hobbies:", hobbyCounter)

// 3. Create a mutable copy of Visard and change his name to "Visard of Oz"
let theGreatVisard = JSON.parse(JSON.stringify(Visard));
theGreatVisard.name = "Visard of Oz"


// 4. Capitalise all hobbies in the data object
let newData = JSON.parse(JSON.stringify(data))
newData.people.forEach(person => {
    person.hobbies = person.hobbies.map(hobby => hobby.toUpperCase())
})

console.log("New Data:", newData)

// 5. Create a new object called "peopleByName" and add all the people from the data object to it. It should look like this:
// peopleByName = { 
//   Ed: { name: Ed, id: 6, hobbies: ["Drawing birds", "Shitposts", "Muay thai"] },
//   Nico: { name: Nico, id: 7, hobbies: ["Coding", "Learning Japanese", "Being pretty lit"] },
//   ...etc
// }
//
let peopleByName = {}
data.people.forEach(person => {
    peopleByName[person.name] = person
})

console.log("People by name:", peopleByName)