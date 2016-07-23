let sum3 = (x: number, y?: number) => x + y ; // lambda function with optional parameter
 console.log(sum3(10)); // NaN

let sum4 = (x?:string, y?: string) => x + y; // all parameters are optional
 console.log(sum4("10"));

let concatStrings = function(a: string, b: string, c?: string) {
return a + b + c;
}
console.log(concatStrings("a", "b", "c")); // abc
console.log(concatStrings("a", "b")); // abundefined
console.log(concatStrings("a")); // aundefinedundefined

function buildName(firstName: string, lastName?: string) : string { //Named function with optional parameters
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //works correctly because last parameter is optional.
console.log(result1); // Bob
let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
console.log(result2); // Bob Adams
let result3 = buildName("Bob", "Adams");  //correct. 
console.log(result3); // Bob Adams



//anonymous function explicit type with optional parameters
// (Note that the type of optional parameter will be optional)
let buildName1 : (fN: string, lN?: string) => string =  // name of parameters in explicit type can be different
function(firstName: string, lastName?: string) : string {  //Note: required parameter can not follow optional parameter
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
