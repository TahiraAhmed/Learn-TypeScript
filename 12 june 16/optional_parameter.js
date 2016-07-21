var sum3 = function (x, y) { return x + y; }; // lambda function with optional parameter
console.log(sum3(10));
var sum4 = function (x, y) { return x + y; };
console.log(sum4("10"));
var concatStrings = function (a, b, c) {
    return a + b + c;
};
console.log(concatStrings("a", "b", "c")); // abc
console.log(concatStrings("a", "b")); // abundefined
console.log(concatStrings("a")); // aundefinedundefined
//# sourceMappingURL=optional_parameter.js.map