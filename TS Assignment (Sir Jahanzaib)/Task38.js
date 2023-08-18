"use strict";
let describe_city = (City, Country) => {
    if (City === "Dehli") {
        console.log(`${City} is not in ${Country}`);
    }
    else {
        console.log(`${City} is in ${Country}`);
    }
};
describe_city("Lahore", "Pakistan");
describe_city("Karachi", "Pakistan");
describe_city("Dehli", "Pakistan");
