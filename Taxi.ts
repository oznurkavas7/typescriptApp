import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Taxi implements Vehicle {

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