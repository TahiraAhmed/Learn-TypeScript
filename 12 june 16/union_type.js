function addWithUnion(arg1, arg2) {
    if (typeof arg1 === "string") {
        //This is known as a type guard and means that the type of x will be treated 
        //as a string within the if statement block.
        // arg1 is treated as a string here
        return arg1 + "is a string";
    }
    if (typeof arg1 === "number") {
        // arg1 is treated as a number here
        return arg1 + 9;
    }
    if (typeof arg1 === "boolean") {
        // arg1 is treated as a boolean here
        return arg1 && false;
    }
}
// call
addWithUnion("tahira", 24);
function f(x) {
    if (typeof x === "number") {
        return x + 10;
    }
    else {
    }
}
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.woof = function () { };
    return Dog;
}());
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () { };
    return Cat;
}());
var pet = new Dog();
if (pet instanceof Dog) {
    pet.woof(); // OK
}
else {
    pet.woof(); // Error
}
var x = "Tom"; //Line A
if (typeof x === 'string') {
    console.log(x.lengthX); // Error, 'lengthX' does not exist on 'string' but 'length' does
}
function concate(a, b) {
    return a + b;
}
console.log(concate(1, 1));
concate("a", "b");
concate([], {});
concate(1, "a");
function sumBy2(num) {
    if (typeof num === "number") {
        return num + 2;
    }
    else {
        for (var i = 0; i <= num.length; i++) {
        }
    }
}
console.log(sumBy2(2));
console.log(sumBy2([2, 3, 4, 56, 5]));
var ab = {};
function isCat(a) {
    return true;
}
var x;
if (isCat(x)) {
    x.meow(); // OK, x is Cat in this block
}
//This allows you to work with not only typeof and instanceof checks, which need a type that JavaScript understands, 
//but now you can work with interfaces and do custom analysis.  Guard functions are denoted by their “a is X” return type, 
//which returns boolean and signals to the compiler if what the expected type now is.
//# sourceMappingURL=union_type.js.map