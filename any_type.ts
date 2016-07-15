let myType : any = { name: "Zia", id: 1 };
myType = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
myType = { id: 3,  name: "Mike", gender: false };//becuase of any it assigns a different type
myType = { name: "Mike", gender: false };//can even reduce the properties because of any type

myType = "Even a sring can be assigned"; // string assigned to any
myType = true;
console.log(myType);
myType = function(){ // function
	 console.log("Even a function can be assigned to any")
	};

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);  // results false

 let a : number = 5;
 let b : any = 9;
 if(true){
     let bd = 10;
     if(true){
         let bd = 20
         console.log(bd); // 20
     }
	 console.log(bd); //10
}

