function addWithUnion(arg1: string | number | boolean,
                      arg2: string | number | boolean): string | number | boolean {
    if (typeof arg1 === "string") {
		//This is known as a type guard and means that the type of x will be treated 
		//as a string within the if statement block.
        // arg1 is treated as a string here
        return arg1 + "is a string";
    }
    if (typeof arg1 === "number") {
        // arg1 is treated as a number here
        return arg1 + 9;
    }
    if (typeof arg1 === "boolean") {
        // arg1 is treated as a boolean here
        return arg1 && false;
    }
}

// call
addWithUnion("tahira", 24);

function f(x: number | number[]) {
  if (typeof x === "number") { 
    return x + 10;
  }
  else {
    // return sum of numbers
  }
}

class Dog { woof() { } }
class Cat { meow() { } }
let pet: Dog|Cat = new Dog();
if(pet instanceof Dog) { //this is also a type guard
   pet.woof(); // OK
} else {
   pet.woof(); // Error
}

let x: any = "Tom"; //Line A
if(typeof x === 'string') { //Line B
   console.log(x.lengthX);// Error, 'lengthX' does not exist on 'string' but 'length' does
}

function concate(a: string | number, b: string | number) {
        return a + b;
 }

 console.log(concate(1, 1));
 concate("a", "b");
 concate([], {});
 concate(1, "a");
 
 
 function sumBy2(num: number | number[]): number{
     if(typeof num === "number"){
         return num + 2;
         
     } else{
         for(let i = 0; i <= num.length; i++){
         }  
     }
 }
 
 console.log(sumBy2(2));
 console.log(sumBy2([2,3,4,56,5]))
  
 let ab : number|{} = {};
 
 /** type guard function */
 //In 1.6, you can now create your own type guard functions:

interface Animal {name: string; }
interface Cat extends Animal { meow(); }

function isCat(a: Animal): a is Cat {
  return true;
}

var x: Animal;

if(isCat(x)) {
  x.meow(); // OK, x is Cat in this block
}

//This allows you to work with not only typeof and instanceof checks, which need a type that JavaScript understands, 
//but now you can work with interfaces and do custom analysis.  Guard functions are denoted by their “a is X” return type, 
//which returns boolean and signals to the compiler if what the expected type now is.
