function add2numers(a: number, b: number): void {
    console.log (`${a+b}`);
    // return a + b ;
}

// add2numbers(2, 3);
// add2numbers(2, "three");
// add2numbers(2, "2");

function throwFatalError(msg: string): never {
    throw new Error(msg);
}

// Type Assertion
let someValue: any = "this is a string with length 29";

//method

console.log(someValue.length);
let strLength1: number = (<string>someValue).length;
let strLEngth2: number = (someValue as string).length;

//Class 

class MotorV {
    wheels: number;
    power: number;
    speed: number =0;

    constructor(wheels: number, power: number){
        this.wheels = wheels;
        this.power = power;
    }

    accelerator(time: number): void {
        this.speed = this.speed +0.5 * this.power *time
    }
}

let myV = new MotorV(4, 200);

myV.accelerator(10);

class car extends MotorV{
    doors: number;

    constructor(wheels: number, power: number, doors:number){
        super(wheels, power);
        this.doors = doors;
    }
}

//public, private, protected

class PlaneA{
    private __engines: number;
    private __power: number;
    public speed: number = 0;

    constructor(engines: number, power: number){
        this.__engines = engines;
        this.__power = power;
    }
public accelerator(time: number): void {
    this.speed = ((this.__engines * this.__power)* time)/ this.__power
}

}

//Shorthand
class PlaneB{
    constructor(
        private __engines: number,
        private __power: number,
        public speed: number =0

    ) {}

    get engines(): number {
        return this.__engines;
    }
    set power(newPower: number){
        this.__power = newPower;
    }

}
let plane = new PlaneB(4, 1500);
console.log(plane.power);
