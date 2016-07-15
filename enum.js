var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var n = Color.Green; // Color is enum type
console.log(n); // 1
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
//var colorName : Color1 = Color1[2]; // error. string is not assignable to Color1
var colorName = Color1[2];
console.log(colorName); // green
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
;
var colorName = Color3[2]; //refers string which is not allowed with const enums
console.log(colorName);
; //can assign values to all
var colorIndex = 4 /* "Blue" */;
console.log(colorIndex); // 4
//# sourceMappingURL=enum.js.map