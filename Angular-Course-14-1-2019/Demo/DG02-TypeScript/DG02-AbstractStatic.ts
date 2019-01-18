// abstract class shape{

//     constructor(
//         readonly name: string,
//         readonly sides: number,
//         public area: number = null
//     ){}
// abstract get calsArea(): number;

// }

abstract class Circle{
    static readonly SIDES: number = 1;
    static readonly SHAPENAME: string = "Circle";

    static calcArea(radius: number): number
{
    return Math.PI * Math.pow(radius, 2);
}
}

let circleArea = Circle.calcArea(5);
console.log (circleArea);
