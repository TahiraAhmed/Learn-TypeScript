interface IComplexType {
id: number;
name: string;
}
var complexType : IComplexType =
{ id: 1, name: "firstObject" };
var complexType_2: IComplexType =
{ id: 1, name: "firstObject"};
if (typeof complexType == typeof complexType_2) {
console.log("types are equal");
}

// structural type

interface Named {
	name: string;
}

class Person {
	name: string;	
}

var p: Named; //this variable must implement interface Named
p = new Person();

var x: Named;
var y = { name: 'Alice', location: 'Seattle'};
x = y; // no error beacause of stale object literal.
console.log(x);

//var x = (a: number) => 0;
//var y = (b: number, s: string) => 0;

//y = x; // ok
//x = y; // error
 
/** To determine if two classes are assignable, TypeScript uses what it calls "structural subtyping." With structural subtyping, 
TypeScript compares the properties and methods on the two objects. If the variable on the left-hand side of the equals sign has all
the properties and the methods of the object on the right-hand side of the equals sign, then the two objects are assignable. 
This is a form of "duck typing" (from the old saying: "If it looks like a duck, walks like a duck and quacks like a duck, then it's 
a duck"). With structural subtyping, it's perfectly OK for the object on the left-hand side to have more properties than the object
on the right, it just can't have fewer properties. Obviously, any class that derives from another class will have all of the
properties of the base interface.
**/
