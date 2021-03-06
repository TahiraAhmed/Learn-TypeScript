let arrayOfNumbers: number[] = [1, 2, 3]; // this array is strongly typed which is of type number
arrayOfNumbers = [3, 4, 5];
arrayOfNumbers = ["one", "two", "three"];

let array1 : number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); // results 6

let array2:Array<number> = [1, 2, 3]; //alternative correct syntax
let array3 : number[] = []; //correct syntax to define an empty array

//let array4: number[] = new number[2]; //error

let array5: number[] = [];
array5.push(1234); //dynamically adding
console.log(array5);  
console.log(array5[0]);

 let arr2 : number[] = [1,2,3,4,5];
 let arr3 : string[] = ["a", "b", "c"];
 let arr4 : any[] = [1, "a", "b", {}, function(){}];




