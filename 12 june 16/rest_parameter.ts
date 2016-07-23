function buildName4(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);


//anonymous function type with Rest parameters
let buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

//Note: Rest, optional and default parameters can only be at the end of the parameter list

// book example

function testParams(...argArray: number[] | string[]) {  // Error! due to union type. Note that rest parameter must of an array type
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

function testParamsTs2(...ArgArray: number[], arg1: string,  //Error!!  rest parameter must be last in a parameter list
arg2: number) {
}
	