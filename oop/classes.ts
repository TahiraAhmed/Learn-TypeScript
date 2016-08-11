class Human {
    name: string;
    
    constructor(name: string)
    {
        this.name = name;
    }
    
    eat()
    {
        console.log(this.name + " is a Human and is eating");
    }
    
}

class Animal {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is an Aniaml and is eating");
    }
}

class WildAnimal {
    title: string;
    
    constructor(title: string){
        this.title = title;
    }
    
    eat(){
        console.log(this.title + " is a Wild Animal and is eating");
    }
}

class Robot {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

let h: Human = new Human("Tom");
let a: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");
let r0: Robot = new Animal("Donkey");  //how is this possible?
let r1: Animal = new Robot("Donkey");  // error property 'eat' is missing in type 'Robot'

var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);//false, giving the right results

var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal);//true, giving the right results

/* TypeScript is a structural type system which is different from Java, C#, etc. When we compare two different types, 
regardless of where they came from, if the types of each member are compatible, then we say the types themselves are compatible. */
let h2 = h;
h = a;//both have same properties and methods therefore are compatible
h.eat();
let a2 = a;

let r2 = r;
r = a;//Animal has a name, Robot also has a name
a = r2;//Error, Robot does not have eat method
let hum : Human = new Animal("Dog");
let wild : Animal = new WildAnimal("Deer");//this is an Error in version 1.6. property 'name' is missing in type 'WildAnimal'
//  If the variable on the left-hand side of the equals sign has all the 
//properties and the methods of the object on the right-hand side of the equals sign, then the two objects are assignable.




class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}