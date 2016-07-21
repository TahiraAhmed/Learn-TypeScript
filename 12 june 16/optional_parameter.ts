let sum3 = (x: number, y?: number) => x + y; // lambda function with optional parameter
 console.log(sum3(10));

let sum4 = (x?:string, y?: string) => x + y;
 console.log(sum4("10"));

let concatStrings = function(a: string, b?: string, c?: string) {
return a + b + c;
}
console.log(concatStrings("a", "b", "c")); // abc
console.log(concatStrings("a", "b")); // abundefined
console.log(concatStrings("a")); // aundefinedundefined