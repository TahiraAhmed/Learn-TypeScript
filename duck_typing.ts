/** fresh object literals */
let complexType = { name: "myName", id: 1 };
complexType = { id: 2 , name: "anotherName" }; // duck-typing
complexType = { id: 2 }; // missing property
complexType = { name: "anotherName" };  // missing property
complexType = { address: "address" };  // missing properties and added new property
complexType = { name: "name", id: 2, address: "address" }; //error due to excess property

// index signature allows excess property
let p: { id: number, [p: string]: any };
//Note now 'x' can have any name, just that the property should be of type string
p = {id: 10, firstname: "Tahira" };
p = {id: 10, lastname: "Syed"};
p = {num: 44, firstname: "Tahira", lastname: "Syed", num2: 32, id: 10};
p = {id: 10, num: 44};
p = {num: 44, num2: 32};
p = {id: 10};
p = {firstname: "Tahira"}; 


let sid = 6;  //inferred type
sid = "sidra";

/** stale object literals */

let complexType2 = { id: 2,  name: "Tom" };
complexType = complexType2;

let complexType3 = { id: 2}; // missing property
complexType = complexType3;

let complexType4 = { id: 2,  name_person: "Tom" }; // renamed or missing property
complexType = complexType4;

let complexType5 = { id: 2,  name: "Tom", age: 22 }; // excess property
complexType = complexType5;
console.log(complexType); // results { id: 2,  name: "Tom", age: 22 }

let v: { id: number, [v: string]: any };
console.log(v); // undefiend
let l = { id: 1, str: "fdfd", str1: "dfdfd", str2: "sdds"};
v = l;
console.log(v);

// more examples
 
 let myType2: {foo: number, bar?: number}; 
 myType2 = {foo: 7};
 myType2 = {foo: 7, baz: 7889};
 myType2 = {foo: 7, bar : 78}
 
 let myType3: {foo: number, barr: string}; // excess property
 myType2 = myType3;
 
 
 
