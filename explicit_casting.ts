let m = <any> { name: "Zia", id: 1 };
let m1 : any = <any> { name: "Zia", id: 1 };
m1 = {name: "khan", id : 83};

let m2 = { name: "Zia", id: 1 } as any; //this is an alternative syntax for casting

let abc:string = <number> "tahira";
console.log(abc);