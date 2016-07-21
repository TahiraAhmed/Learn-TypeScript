//Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
var myAdd1 = function (x, y) {
    return x + y;
};
//Anonymous function with explict type
var myAdd2 = function (x, y) {
    return x + y;
};
//type names dont matter										
var myAdd3 = function (x, y) {
    return x + y;
};
//Lambda function 															
var myAdd4 = function (a, b) { return a + b; }; // single line function
//output will be: var myAdd4 = function(a : number, b : number) {return a + b}; Anonymous function
// named function	
var food = makeChickenTikka(1000);
function makeChickenTikka(money) {
    console.log('hello');
    return "chickenTikka";
}
console.log(food);
// anonymous function with explicit type
var fg = function (money) {
    console.log('hello');
    return "chickenTikka";
};
var foodie = fg(1000);
// anonymous function
var sum = function (x, y) {
    return x + y;
};
// lambda function
var sum1 = function (x, y) { return x + y; };
console.log(sum1(10, 20)); // 30
//# sourceMappingURL=function.js.map