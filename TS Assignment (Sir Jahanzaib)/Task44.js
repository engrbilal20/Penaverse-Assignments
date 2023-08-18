"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
let sandwichItems = ["Egg", "Kabaab", "Ketchup", "Mioneez"];
function sanditems(...args) {
    console.log(`The sandwitch you ordered contains ${args}`);
}
sanditems(sandwichItems[0], sandwichItems[1]);
sanditems(sandwichItems[0], sandwichItems[1], sandwichItems[2]);
sanditems(sandwichItems[0], sandwichItems[1], sandwichItems[2], sandwichItems[3]);
