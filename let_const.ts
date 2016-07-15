/** let */

function foo() {
  
   console.log( x ); /** variable hoisting. results 'undefined' */ 
   console.log( y ); /** undefined. variable hoisting */
 
  let x = 1;  /** defined function-scoped variable. write let instead of var and see the code for errors. */
  if (x === 1) {
    let y = 2;
	 console.log( y ); /** results 2 */
	 console.log( x ); /** results 1 */
  }
  console.log( y ); /** cannot find name y but it results 2 after transpilation */
  console.log( x ); /** results 1   */
}
 
foo();
console.log( x );  /** reference error x is not defined. this error won't allow you to see the rest of the output of the code below this line */
console.log( y );  /** reference error y is not defined */

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
console.log("let: " + z);// Error: z is not defined in this scope though it results 4 after transpilation
  
  
  /** class code */
  
  if(true){
    alert(abc);  // undefined
    let abc= 10;
    alert(abc);
}
    alert(abc); /** cannot find name abc, out of scope. after transpilation results 10 */
    
    
    // more examples 
     const abcd = 5;
     abcd = 10 // error

     const ad : number = 12; /** const follows tha same scoping rules as let */

  if(true){
     const ad = 10;
   
  }
     console.log(ad); /** results 12 as expected */
     
 

