 type mytype = number | string | boolean;
 let num : mytype = 10;
 let num1 : mytype= false;
 let num2 : number | string | boolean = 10;
 let num3 : number | string | boolean = '10';
 let num4 : number | string | boolean = true;

 type Callback = (num : number) => void;
 type mytype2 = number[] | string[];
 let arr : mytype2 = [];
 
 //Type aliases are exactly the same as their original types;
 // they are simply alternative names.

type StringNumberOrBoolean = string | number | boolean; // union type
type PrimitiveArray = Array<string|number|boolean>;
type MyNumber = number; // number type
type Callback = () => void; // function
type CallbackWithString = (string) => void;

//You can use type aliases any where you can use a type

function work(x: StringNumberOrBoolean)
{   
}

function usingCallback(f: CallbackWithString){
    f("This is a string");
}




