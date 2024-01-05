var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, licensePlate, model, horsePower) {
        this.brand = brand;
        this.licensePlate = licensePlate;
        this.model = model;
        this.horsePower = horsePower;
        Car.numberOfProducedCars += 1;
    }
    Car.numberOfProducedCars = 0;
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(model, licensePlate) {
        var _this = _super.call(this, "Bmw", model, licensePlate) || this;
        _this.horsePower = 500;
        return _this;
    }
    return Bmw;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(model, licensePlate) {
        var _this = _super.call(this, "Audi", model, licensePlate) || this;
        _this.horsePower = 800;
        return _this;
    }
    return Audi;
}(Car));
var ParkingArea = /** @class */ (function () {
    function ParkingArea() {
        this.carList = new Array(20).fill(null);
    }
    ParkingArea.prototype.putCar = function (car, slotNo) {
        if (this.carList[slotNo] === null) {
            this.carList[slotNo] = car;
        }
        else {
            console.log("the slot is full");
        }
    };
    ParkingArea.prototype.takeOutCar = function (licensePlate) {
        var hasMatchedCar = false;
        this.carList = this.carList.map(function (car) {
            if (car && car.licensePlate === licensePlate) {
                hasMatchedCar = true;
                car = null;
            }
            return car;
        });
        if (!hasMatchedCar) {
            console.log("this car isnt in the parking area");
        }
    };
    return ParkingArea;
}());
var myCar = new Car("Fiat", "Doblo", "10 BLA 10", 500);
var myCar2 = new Bmw("x5", "20 BLA 20");
var myCar3 = new Audi("x6", "21 BLA 21");
var awmParkinArea = new ParkingArea();
awmParkinArea.putCar(myCar, 5);
awmParkinArea.putCar(myCar2, 12);
awmParkinArea.putCar(myCar3, 19);
console.table(awmParkinArea.carList);
