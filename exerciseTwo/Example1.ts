class Car {
    brand: string;
    licensePlate: string;
    model: string;
    protected horsePower?: number;
    static numberOfProducedCars: number = 0;

    constructor(brand: string,
        licensePlate: string,
        model: string,
        horsePower?: number) {

        this.brand = brand;      
        this.licensePlate = licensePlate;
        this.model = model;
        this.horsePower = horsePower;

        Car.numberOfProducedCars +=1
    }
}

class Bmw extends Car{ // BMW sub class, Car super class
    constructor(model: string, licensePlate: string) {
        super("Bmw", model, licensePlate);

        this.horsePower = 500
    }
}

class Audi extends Car{
    constructor(model: string, licensePlate: string) {
        super("Audi", model, licensePlate);

        this.horsePower = 800
    }
}

class ParkingArea {
    public carList: Array<Car | null> = new Array(20).fill(null);

    public putCar(car: Car, slotNo: number) {
        if(this.carList[slotNo] === null) {
            this.carList[slotNo] = car;
        }
        else {
            console.log("the slot is full");
        }
    }

    public takeOutCar(licensePlate: string) {
        let hasMatchedCar = false;

        this.carList = this.carList.map((car: Car | null) => {
            if(car && car.licensePlate === licensePlate) {
                hasMatchedCar = true;
                car = null;
            }

            return car;
        });

        if(!hasMatchedCar) {
            console.log("this car isnt in the parking area")
        }
    }
}

const myCar = new Car("Fiat", "Doblo", "10 BLA 10", 500);
const myCar2 = new Bmw("x5", "20 BLA 20");
const myCar3 = new Audi("x6", "21 BLA 21");

const awmParkinArea = new ParkingArea();
awmParkinArea.putCar(myCar, 5);
awmParkinArea.putCar(myCar2, 12);
awmParkinArea.putCar(myCar3, 19);

console.table(awmParkinArea.carList);

awmParkinArea.takeOutCar("21 BLA 21")

console.table(awmParkinArea.carList);

