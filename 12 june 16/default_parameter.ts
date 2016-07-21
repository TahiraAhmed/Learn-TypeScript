var concatString = function(a: string, b: string, c: string = "c") {
return a + b + c;
}
console.log(concatStrings("a", "b", "c")); // abc
console.log(concatStrings("a", "b")); // abc