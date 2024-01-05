"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(this.location.x, " Y: ").concat(this.location.y, " dan x: ").concat(point.x, " Y: ").concat(point.y, " 'a konumuna gidiyor"));
    };
    Object.defineProperty(Taxi.prototype, "Loc", {
        get: function () {
            return this.location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('kordinat bilgileri negatif olamaz');
            }
            this.location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
exports.Taxi = Taxi;
