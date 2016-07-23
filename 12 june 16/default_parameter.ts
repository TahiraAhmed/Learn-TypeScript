var concatString = function(a: string, b: string, c: string = "c",) {
return a + b + c;
}
console.log(concatString("a", "b", "d")); // abd
console.log(concatString("a")); // aundefinedc

function buildName2(firstName: string, lastName: string = "Khan") : string { //Named function with optional and default parameter
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let r1 = buildName2("Bob");  //works correctly because last parameter is optional
console.log(r1); // Bob Khan
let r2 = buildName2("Bob", "Adams", "Sr.");  //error, too many parameters
console.log(r2); // Bob Adams
let r3 = buildName2("Bob", "Adams");  //correct
console.log(r3); // Bob Adams



//anonymous function explicit type with default parameters 
//(Note that the parameter type will be optional when used with default value)
//( Note that the default parameters can only be at the end of the parameter list)

let buildName3 : (firstName: string, lastName?: string) => string = 
function(lastName = "Khan", firstName: string) : string {   // placed lastName as first parameter
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let r4 = buildName3("Bob");  //works correctly because last parameter is optional
console.log(r4); // undefined Bob 
let r5 = buildName3("Bob", "Adams", "Sr.");  //error, too many parameters
console.log(r5); // Adams Bob
let r6 = buildName3("Bob", "Adams");  //correct
console.log(r6); // Adams Bob 
	