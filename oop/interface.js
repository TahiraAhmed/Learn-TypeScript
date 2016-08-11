var complexType = { id: 1, name: "firstObject" };
var complexType_2 = { id: 1, name: "firstObject" };
if (typeof complexType == typeof complexType_2) {
    console.log("types are equal");
}
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p; //this variable must implement interface Named
p = new Person();
var x;
var y = { name: 'Alice', location: 'Seattle' };
x = y; // no error
console.log(x);
//var x = (a: number) => 0;
//var y = (b: number, s: string) => 0;
//y = x; // ok
//x = y; // error 
