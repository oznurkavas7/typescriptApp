"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
function greeter (name) {
    console.log("hello" + name);
}

let user = "oznur"

greeter(user);

---------------------------------------------------------------------
let a:number = 5;
let b:string = "a";
let c:boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,'a',true];
let h: [string, number, boolean] = ['a', 1, true]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi = 0 , havale = 1, eft = 2};

let kredi = Payment.kredi; //0
let havale = Payment.havale; //1
let eft = Payment.eft; //2
-------------------------------------------------------------------------

function getAverage(a: number, b: number, c: number) : string {
    let total = a+b;
    let count = 2;

    if(typeof c !== "undefined") {
        total+=c;
        count++
    }
    const result = total/count;
    return "result: " + result
}

console.log(getAverage(10,20,30))


function getAverage(...a:number[]) : string {
    let total = 0;
    let count = 0;

    for(let i = 0; i < a.length; i++) {
        total +=a[i]
        count++
    }
    const result = total/count;
    return "result: " + result
}

console.log(getAverage(10,20,30))
--------------------------------------------------------


interface Point {
    x: number,
    y: number
}

interface Passenger {
    name: string,
    tel: string
}

interface Vehicle {
    currentLoc: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLoc: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    currentLoc: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna gidiyor`)
    }
}

class Bus implements Vehicle {
    currentLoc: Point;
    travelTo(point: Point): void {
        console.log(`Bus x: ${point.x} Y: ${point.y} konumuna gidiyor`)

    }
}

let taxi_1 = new Taxi(); //new den sonra obje üretilmiş oldu
taxi_1.travelTo({x:1, y:2});
taxi_1.currentLoc = {x:2, y:3}

let taxi_2 = new Taxi(); //new den sonra obje üretilmiş oldu
taxi_2.travelTo({x:4, y:5});
taxi_2.currentLoc = {x:2, y:3}

let bus_1 = new Bus(); //new den sonra obje üretilmiş oldu
bus_1.travelTo({x:1, y:2});
bus_1.currentLoc = {x:2, y:3}

console.log(taxi_1.currentLoc.x)
console.log(taxi_1.currentLoc.y)


interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private location: Point, private color: string) {
        
    }

    travelTo(point: Point): void {
        console.log(`taksi x: ${this.location.x} Y: ${this.location.y} dan x: ${point.x} Y: ${point.y} 'a konumuna gidiyor`)
    }
}

let taxi_1: Taxi = new Taxi({x:2, y:3}, 'Red');
taxi_1.travelTo({x:1, y:2});


interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private location: Point, private color: string) {
        
    }

    travelTo(point: Point): void {
        console.log(`taksi x: ${this.location.x} Y: ${this.location.y} dan x: ${point.x} Y: ${point.y} 'a konumuna gidiyor`)
    }
    get Loc() {
        return this.location;
    }
    set Loc(value: Point) {
        if(value.x < 0 || value.y < 0) {
            throw new Error('kordinat bilgileri negatif olamaz')
        }
        this.location = value;
    }
}

let taxi_1: Taxi = new Taxi({x:2, y:3}, 'Red');
taxi_1.travelTo({x:1, y:2});
taxi_1.getLoc()
let currentLocation = taxi_1.Loc;
taxi_1.Loc = {x:3, y:3};
*/
var Taxi_1 = require("./Taxi");
var taxi_1 = new Taxi_1.Taxi({ x: 2, y: 3 }, 'Red');
taxi_1.travelTo({ x: 1, y: 2 });
