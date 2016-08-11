/** fresh object literals */
var complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "anotherName" }; // duck-typing
complexType = { id: 2 }; // error! missing property
console.log(complexType);
complexType = { name: "anotherName" }; // error! missing property
console.log(complexType);
complexType = { address: "address" }; //error! missing properties and added new property
console.log(complexType);
complexType = { name: "name", id: 2, address: "address" }; //error due to excess property
console.log(complexType);
// index signature allows excess property
var p;
//Note now 'x' can have any name, just that the property should be of type string
p = { id: 10, firstname: "Tahira" };
p = { id: 10, lastname: "Syed" };
p = { num: 44, firstname: "Tahira", lastname: "Syed", num2: 32, id: 10 };
p = { id: 10, num: 44 };
p = { num: 44, num2: 32 };
error;
!p;
{
    id: 10;
}
;
p = { firstname: "Tahira" };
var sid = 6; //inferred type
sid = "sidra";
/** stale object literals */
var complexType2 = { id: 2, name: "Tom" };
complexType = complexType2;
console.log(complexType);
var complexType3 = { id: 2 }; // missing property
complexType = complexType3;
console.log(complexType);
var complexType4 = { id: 2, name_person: "Tom" }; // renamed or missing property
complexType = complexType4;
console.log(complexType);
var complexType5 = { id: 2, name: "Tom", age: 22 }; // excess property
complexType = complexType5;
console.log(complexType); // results { id: 2,  name: "Tom", age: 22 }
var v;
console.log(v); // undefiend
var l = { id: 1, str: "fdfd", str1: "dfdfd", str2: "sdds" };
v = l;
console.log(v);
// more examples
var myType2;
myType2 = { foo: 7 };
myType2 = { foo: 7, baz: 7889 };
myType2 = { foo: 7, bar: 78 };
var myType3; // excess property
myType2 = myType3;
console.log(myType2); // undefined
//# sourceMappingURL=duck_typing.js.map