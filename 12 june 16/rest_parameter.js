function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
//Note: Rest, optional and default parameters can only be at the end of the parameter list
// book example
function testParams() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i - 0] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray " + i + " = " + argArray[i]);
            console.log("arguments " + i + " = " + arguments[i]);
        }
    }
}
testParams(1);
testParams(1, 2, 3, 4);
testParams("one", "two");
function testParamsTs2(ArgArray, arg1, //Error!!  rest parameter must be last in a parameter list
    arg2) {
}
//# sourceMappingURL=rest_parameter.js.map