const myHeading = document.querySelector("h1")
myHeading.textContent = "Hello World"


console.log("Hello World")

// var is globally scoped
var a = "Harnoor"
{
    var a = "Changed"
    console.log(a)
}
console.log(a)

// let is locally scoped
let b = "Harnoor"
{
    let b = "Changed"
    console.log(b)
}
console.log(b)

// data types in js
// NNBBSSU
let A = null
let B = 1234
let C = true
let D = BigInt("56788888888888")
let E = "Harnoor"
let F = Symbol("I am a nice Symbol")
let G = undefined
console.log(A, B, C, D, E, F, G)
console.log(typeof A, typeof B, typeof C, typeof D, typeof E, typeof F, typeof G)


// objects
let H = {
    "Name": "Harnoor",
    "Age": 19,
    "Phone no": "XXXXXXXXXXX"
}
console.log(H["Name"])



// Practice set Chapter 1
// create a variable of string type and try to add a number to it
let str = "Harnoor"
let num = 123
console.log(str + num)

// typeof 
console.log(typeof (str + num))

// const object and change in it
const obj = {
    "Name": "Harnoor",
    "Age": 19
}
obj["Name"] = "Harnoor Kaur"
// obj=100
console.log(obj)

// addd a new key to the const object
obj["Registration number"] = 12401301
console.log(obj)


// create a word meaning dictionary
let dictionary = {
    "Syntax": "set of rules",
    "Bug": "Error",
    "function": "Block of code that can be reused",
    "operators": "Perform operation on different operands",
    "conditional statements": "to make a decision based flow of code"
}
console.log(dictionary)
console.log(dictionary.Bug)


// type conversion 
let score = "88"
console.log(typeof (Number(score)))
console.log(Number(score))

console.log(String(score))

score = 0
console.log(Number(score))


//Negative operation
let numb = 10
console.log(-numb)