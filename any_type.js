var myType = { name: "Zia", id: 1 };
myType = { id: 2, name: "Tom" }; // can only assign a type which has the at least the same properties
myType = { id: 3, name: "Mike", gender: false }; //becuase of any it assigns a different type
myType = { name: "Mike", gender: false }; //can even reduce the properties because of any type
myType = "Even a sring can be assigned"; // string assigned to any
myType = true;
console.log(myType);
myType = function () {
    console.log("Even a function can be assigned to any");
};
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure); // results false
var a = 5;
var b = 9;
if (true) {
    var bd = 10;
    if (true) {
        var bd_1 = 20;
        console.log(bd_1); // 20
    }
    console.log(bd); //10
}
//# sourceMappingURL=any_type.js.map