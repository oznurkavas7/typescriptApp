/*
function sayHello(message: string) {
    console.log(message);
}

sayHello("selam");


interface Person {
    name: string;
    age: number;

}

interface Employee extends Person {
    readonly empCode: number
}

let newEmployee: Employee

newEmployee = {
    name: "didem",
    age: 25,
    empCode: 222
}
*/
var Employee = /** @class */ (function () {
    function Employee(empCode, name, age) {
        this.getSalary = function (empCode) {
            return 1000;
        };
    }
    return Employee;
}());
var newEmployee = new Employee(22, "öznur", 25);
console.log(newEmployee.getSalary(1));
