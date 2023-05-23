"use strict";
// step 1 download nodejs
// step 2 write => npm install -g typescript
// step 3 check version => tsc -v
// step 4 change location => cd C:\Users\raoar\OneDrive\Desktop\RAO\ADVANCED JAVASCRIPT  
// step 5 write code and run on command prompt =>tsc index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.std_name = void 0;
exports.std_name = "Rao";
var std_age = 21;s
console.log(exports.std_name);
function SUM(a, b) {
    return a + b;
}
SUM(20, 40);
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function (c_name, c_price) {
        return c_name + " " + c_price;
    };
    return car;
}());
var car_obj = new car();
car_obj.drive("BMW", 20000);
var student_name = ["Rao", "Ali", "Asim"];
var student_age = [20, 23, 40];
var students = ["Aqsa", 23, "Anum"];
