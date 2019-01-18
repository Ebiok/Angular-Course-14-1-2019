var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add2numers(a, b) {
    console.log("" + (a + b));
    // return a + b ;
}
// add2numbers(2, 3);
// add2numbers(2, "three");
// add2numbers(2, "2");
function throwFatalError(msg) {
    throw new Error(msg);
}
// Type Assertion
var someValue = "this is a string with length 29";
//method
console.log(someValue.length);
var strLength1 = someValue.length;
var strLEngth2 = someValue.length;
//Class 
var MotorV = /** @class */ (function () {
    function MotorV(wheels, power) {
        this.speed = 0;
        this.wheels = wheels;
        this.power = power;
    }
    MotorV.prototype.accelerator = function (time) {
        this.speed = this.speed + 0.5 * this.power * time;
    };
    return MotorV;
}());
var myV = new MotorV(4, 200);
myV.accelerator(10);
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(wheels, power, doors) {
        var _this = _super.call(this, wheels, power) || this;
        _this.doors = doors;
        return _this;
    }
    return car;
}(MotorV));
//public, private, protected
var PlaneA = /** @class */ (function () {
    function PlaneA(engines, power) {
        this.speed = 0;
        this.__engines = engines;
        this.__power = power;
    }
    PlaneA.prototype.accelerator = function (time) {
        this.speed = ((this.__engines * this.__power) * time) / this.__power;
    };
    return PlaneA;
}());
//Shorthand
var PlaneB = /** @class */ (function () {
    function PlaneB(__engines, __power, speed) {
        if (speed === void 0) { speed = 0; }
        this.__engines = __engines;
        this.__power = __power;
        this.speed = speed;
    }
    Object.defineProperty(PlaneB.prototype, "engines", {
        get: function () {
            return this.__engines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaneB.prototype, "power", {
        set: function (newPower) {
            this.__power = newPower;
        },
        enumerable: true,
        configurable: true
    });
    return PlaneB;
}());
var plane = new PlaneB(4, 1500);
console.log(plane.power);
