enum Color {Red, Green, Blue};//starts with 0
let n : Color = Color.Green; // Color is enum type
console.log(n); // 1

enum Color1 {Red = 1, Green, Blue};
//var colorName : Color1 = Color1[2]; // error. string is not assignable to Color1
let colorName : string = Color1[2];
console.log(colorName); // green

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex);


/** const enum */

const enum Color3 {Red = 1, Green, Blue};
var colorName: string = Color3[2]; //refers string which is not allowed with const enums
console.log(colorName);

const enum Color4 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex : Color4 = Color4["Blue"];
console.log(colorIndex); // 4