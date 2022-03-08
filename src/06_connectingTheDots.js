/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.



// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.

let myAccounts = [{
        id: 1,
        name: "Bank of America",
        amount: 500
    },
    {
        id: 2,
        name: "Bank of Tirana",
        amount: 1000
    },
    {
        id: 3,
        name: "Bank of England",
        amount: 69
    },
    {
        id: 4,
        name: "HSBC",
        amount: 100
    },
    {
        id: 5,
        name: "Bank of Italy",
        amount: 200
    },
]


// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.
function amountOfMoneyInABank(bankName) {
    return myAccounts.find(account => account.name === bankName).amount
}
console.log("Amount:", amountOfMoneyInABank("Bank of Italy"))

// 3. Find a way to find out how much money you have in total.
function totalAmount() {
    let total = 0
    for (const account of myAccounts) {
        total += account.amount
    }
    return total
}
console.log("Total:", totalAmount())

// 4. Find a way to add money to a selected account.
function addMoneyInABank(bankName, amount) {
    return myAccounts.find(account => account.name === bankName).amount += amount
}
console.log("Account with the new amount after adding:", addMoneyInABank("Bank of Tirana", 100))

// 4.1 And subtract too.
function removeMoneyFromABank(bankName, amount) {
    return myAccounts.find(account => account.name === bankName).amount -= amount
}
console.log("Account with the new amount after removing:", removeMoneyFromABank("Bank of Italy", 131))

// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.

myAccounts.forEach((account, index) => {
    account.accountNumber = Math.floor(Math.random() * 99999)
})
console.log("My accounts after adding the account nubmer", myAccounts)