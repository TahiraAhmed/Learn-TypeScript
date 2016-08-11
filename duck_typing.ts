/** fresh object literals */
let complexType = { name: "myName", id: 1 };
complexType = { id: 2 , name: "anotherName" }; // duck-typing
complexType = { id: 2 }; // error! missing property
console.log(complexType);
complexType = { name: "anotherName" };  // error! missing property
console.log(complexType);
complexType = { address: "address" };  //error! missing properties and added new property
console.log(complexType);
complexType = { name: "name", id: 2, address: "address" }; //error due to excess property
console.log(complexType);

// index signature allows excess property
let p: { id: number, [p: string]: any };
//Note now 'x' can have any name, just that the property should be of type string
p = {id: 10, firstname: "Tahira" };
p = {id: 10, lastname: "Syed"};
p = {num: 44, firstname: "Tahira", lastname: "Syed", num2: 32, id: 10};
p = {id: 10, num: 44};
p = {num: 44, num2: 32};error!
p = {id: 10};
p = {firstname: "Tahira"}; 


let sid = 6;  //inferred type
sid = "sidra";

/** stale object literals */

let complexType2 = { id: 2,  name: "Tom" };
complexType = complexType2;
console.log(complexType);

let complexType3 = { id: 2}; // missing property
complexType = complexType3;
console.log(complexType);

let complexType4 = { id: 2,  name_person: "Tom" }; // renamed or missing property
complexType = complexType4;
console.log(complexType);

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
 console.log(myType2); // undefined
 
 
 
