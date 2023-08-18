//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result 
//for each of the following:

//! Tests for equality and inequality with strings
let variable1 =  10
console.log(variable1 == 5+5)
console.log(variable1 != 10)

//! Tests using the lower case function

let variable2 = "Muhammad Bilal"
console.log(variable2.toLocaleLowerCase() === "Muhammad Bilal")
console.log(variable2.toLocaleLowerCase() != "Muhammad Bilal")

//! Numerical tests involving equality and inequality, greater than and less than,
//! greater than or equal to, and less than or equal to
console.log(variable1 == 5+5)
console.log(variable1 != 10)
console.log(variable1 > 5+5)
console.log(variable1 >= 10)
console.log(variable1 < 2+5)
console.log(variable1 <= 10)

//! Tests using "and" and "or" operators
console.log(variable1 == 5+5 && variable2.toLowerCase() == variable2)
console.log(variable1 >= 5+5 && variable2.toLowerCase() == "muhammad bilal")

console.log(variable1 == 5+5 || variable2.toLowerCase() == variable2)
console.log(variable1 == 4+5 || variable2.toLowerCase() == variable2)

//! Test whether an item is in a array
const guestList1 = ["Hassan", "Hussain", "Ahmad", "Ali", "Umar", "Usman"]
// Index Method
console.log(guestList1.indexOf("Ali"))
// Find Method
console.log(guestList1.find(x=>x==="Umar"))

//! Test whether an item is not in a array
// Includes Method
console.log(guestList1.includes("Bilal"))