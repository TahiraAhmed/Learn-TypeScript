//Tuple types have the advantage that you can accurately describe the type
// of an array of mixed types

let tuple: [number, string] = [1, "bob"]; // declare a tuple type with tuple keyword 
let secondElement = tuple[1];  // secondElement now has type 'string' 

let arr1 : [string | number, number, boolean] = ["tahira", 20, true];
// declare a tuple type with arr1 variable name


// Declare a tuple type
let xy: [string, number];
// Initialize it
xy = ["hello", 10]; // OK
// Initialize it incorrectly
xy = [10, "hello"]; // Error

//When accessing an element with a known index, the correct type is retrieved:

console.log(xy[0].substr(1)); // results ello
console.log(xy[1].substr(1)); // Error, 'number' does not have 'substr'

// When accessing an element outside the set of known indices, a union type is
// used instead.

xy[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(xy[3]);
console.log(xy[5].toString()); // OK, 'string' and 'number' both have 'toString'

xy[6] = true; // Error, 'boolean' isn't 'string | number'