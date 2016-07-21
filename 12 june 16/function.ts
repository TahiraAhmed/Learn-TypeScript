//Named function
function add(x: number, y: number): number { 
    return x+y;
}

//Anonymous function
let myAdd1 = function(x: number, y: number): number {  
				return x+y; 
			};

//Anonymous function with explict type
let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};
	
//type names dont matter										
let myAdd3: (baseValue:number, increment:number)=>number = function(x: number, y: number): number
                                                    {
	                                                             return x+y; 
															};
//Lambda function 															
let myAdd4 = (a : number, b : number) => a + b;  // single line function
//output will be: var myAdd4 = function(a : number, b : number) {return a + b}; Anonymous function
	
	
// named function	
 let food = makeChickenTikka(1000);
function makeChickenTikka(money : number) : string {
     console.log('hello');
     return "chickenTikka";
 }	
 console.log(food);
 
 // anonymous function with explicit type
  let fg : (xyz : number) => string = function (money : number) : string{
     console.log('hello');
     return "chickenTikka";
 }
 let foodie : string = fg(1000);
 
 // anonymous function
 let sum = function(x: number, y: number): number{
     return x + y;
 }
 // lambda function
 let sum1 = (x:number, y: number) => x + y;
 console.log(sum1(10, 20)); // 30
 

	