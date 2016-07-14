/** let */

function foo() {
  
   console.log( x ); /** variable hoisting. results 'undefined' */ 
   console.log( y ); /** undefined. variable hoisting */
 
  var x = 1;  /** defined function-scoped variable */
  if (x === 1) {
    let y = 2;
	 console.log( y ); /** results 2 */
	 console.log( x ); /** results 1 */
  }
  console.log( y ); /** cannot find name y but it results 2 ? */
  console.log( x ); /** results 1   */
}
 
foo();
console.log( x ); /** reference error x is not defined */

/** const */

//use const where variable values do not change
const d = 5;
d = 5; /** syntax error */
const e : number = 33;
const c = "best";


//I suggest you to use let instead of var everywhere, becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
  console.log(z); /** block-scoped variable z is used before its declaration */
	let z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope though it results 4

