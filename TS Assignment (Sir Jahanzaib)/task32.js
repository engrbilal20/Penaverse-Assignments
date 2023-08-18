"use strict";
let current_users = ["Muhammad", "Bilal", "usman", "Saihaan", "Admin"];
let new_users = ["Muhammad", "Latif", "Usman", "Ukasha", "Ali"];
for (let i = 0; i < new_users.length; i++) {
    if (new_users[i] === current_users[i]) {
        console.log("You need to enter a new username");
    }
    else
        (console.log("User name is available"));
}
