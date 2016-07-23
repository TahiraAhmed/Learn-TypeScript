var sum3 = function (x, y) { return x + y; }; // lambda function with optional parameter
console.log(sum3(10)); // NaN
var sum4 = function (x, y) { return x + y; }; // all parameters are optional
console.log(sum4("10"));
var concatStrings = function (a, b, c) {
    return a + b + c;
};
console.log(concatStrings("a", "b", "c")); // abc
console.log(concatStrings("a", "b")); // abundefined
console.log(concatStrings("a")); // aundefinedundefined
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); //works correctly because last parameter is optional.
console.log(result1); // Bob
var result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
console.log(result2); // Bob Adams
var result3 = buildName("Bob", "Adams"); //correct. 
console.log(result3); // Bob Adams
//anonymous function explicit type with optional parameters
// (Note that the type of optional parameter will be optional)
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
//# sourceMappingURL=optional_parameter.js.map