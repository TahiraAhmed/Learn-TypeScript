var concatString = function (a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
};
console.log(concatString("a", "b", "d")); // abd
console.log(concatString("a")); // aundefinedc
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var r1 = buildName2("Bob"); //works correctly because last parameter is optional
console.log(r1); // Bob Khan
var r2 = buildName2("Bob", "Adams", "Sr."); //error, too many parameters
console.log(r2); // Bob Adams
var r3 = buildName2("Bob", "Adams"); //correct
console.log(r3); // Bob Adams
//anonymous function explicit type with default parameters 
//(Note that the parameter type will be optional when used with default value)
//( Note that the default parameters can only be at the end of the parameter list)
var buildName3 = function (lastName, firstName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
var r4 = buildName3("Bob"); //works correctly because last parameter is optional
console.log(r4); // undefined Bob 
var r5 = buildName3("Bob", "Adams", "Sr."); //error, too many parameters
console.log(r5); // Adams Bob
var r6 = buildName3("Bob", "Adams"); //correct
console.log(r6); // Adams Bob 
//# sourceMappingURL=default_parameter.js.map